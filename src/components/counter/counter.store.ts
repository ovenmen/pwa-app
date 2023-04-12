import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CounterStore {
    counter: number,
    increaseCounter: () => void
    decreaseCounter: () => void
}

export const useCounterStore = create<CounterStore>()(
    devtools(
        persist((set) => ({
            counter: 0,
            increaseCounter: () => set((state) => ({
                counter: state.counter + 1
            })),
            decreaseCounter: () => set((state) => ({
                counter: state.counter - 1
            }))
        }), {
            name: 'counter'
        })
    )
);
