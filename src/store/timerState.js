import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set, get) => ({
    promo: {
      promodoro: 1,
      shortBreak: 1,
      longBreak: 1,
    },
    isBreak: false,
    isShortBreak: false,
    isLongBreak: false,
    seconds: 0,
    minutes: 1,
    percentage: 100,
    timerState: false,
    promoRound: 0,
    rounds: 4,

    resetTimer: () => {
      set((state) => ({ percentage: (state.percentage = 100) }));
      set((state) => ({ timerState: (state.timerState = true) }));
    },

    resetRounds: () => {
      set((state) => ({ rounds: (state.rounds = 4) }));
    },
    resetPromoRound: () => {
      set((state) => ({ promoRound: (state.promoRound = 0) }));
    },

    toggleTimerState: () => set((state) => ({ timerState: !state.timerState })),
    incrementPromoRoundOnStart: () => set({ promoRound: 1 }),
    decrementSeconds: () => {
      set((state) => ({ seconds: state.seconds - 1 }));
    },

    decrementPercentage: () => {
      let ratio =
        100 /
        ((get().isShortBreak
          ? get().promo.shortBreak
          : get().isLongBreak
          ? get().promo.longBreak
          : get().promo.promodoro) *
          60);
      set((state) => ({
        percentage: state.percentage - ratio,
      }));
    },

    decrementMinute: () => {
      set((state) => ({
        seconds: (state.seconds = 59),
      }));
      set((state) => ({ minutes: state.minutes - 1 }));
    },

    shortBreak: () => {
      get().resetTimer();
      set((state) => ({ minutes: (state.minutes = get().promo.shortBreak) }));
      set({ isBreak: true });
      set({ isShortBreak: true });
      set({ isLongBreak: false });
      get().decrementRounds();
    },

    longBreak: () => {
      get().resetTimer();
      set((state) => ({ minutes: (state.minutes = get().promo.longBreak) }));
      set({ isBreak: true });
      set({ isShortBreak: false });
      set({ isLongBreak: true });
      get().resetRounds();
    },

    promodoro: () => {
      get().resetTimer();
      set((state) => ({ minutes: (state.minutes = get().promo.promodoro) }));
      set({ isLongBreak: false });
      set({ isShortBreak: false });
      set({ isBreak: false });
      set((state) => ({ promoRound: state.promoRound + 1 }));
    },

    stopTimerAfterFullCycle: () => {
      if (get().isLongBreak && get().rounds == 4) {
        set((state) => ({ timerState: (state.timerState = false) }));
      }
    },

    decrementRounds: () => {
      set((state) => ({ rounds: state.rounds - 1 }));
    },

    toggleShortLongBreak: () => {
      let toggledBreak = !get().isBreak;
      toggledBreak
        ? get().promoRound == 4
          ? (get().longBreak(), get().resetPromoRound())
          : get().shortBreak()
        : get().promodoro();
    },
  }))
);

export default useStore;
