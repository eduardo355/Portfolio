import { create } from "zustand"

export const ActiveDark = create((set) => 
({
    stateDark: false,
    optionDark: (value) => set(state => ({
        stateDark: state.stateDark = value
    }))
}))