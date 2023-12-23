import {create} from 'zustand'

export const useLoginOrSignupStore = create((set) => ({
    loginOrSignup: 'login',
    setLoginOrSignup: (loginOrSignup) => set({loginOrSignup}),
}))
