import {create} from 'zustand'

export const useDrawerStore = create((set) => ({
    drawerOpen: false,
    setDrawerOpen: (drawerOpen) => set({drawerOpen}),
}))