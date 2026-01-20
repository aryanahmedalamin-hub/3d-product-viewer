import { create } from 'zustand'

export const useStore = create((set) => ({
  cakeConfig: {
    layers: 2,
    baseColor: '#FDF5E6',
    fillColor: '#4B2512',
    topper: 'none',
    frosting: 'glossy',
    size: '6"',
  },
  cart: [],
  language: 'EN',
  setLanguage: (language) => set({ language }),
  addToCart: (item) => set((state) => ({
    cart: [...state.cart, item]
  })),
  setLayers: (layers) => set((state) => ({
    cakeConfig: { ...state.cakeConfig, layers }
  })),
  setBaseColor: (baseColor) => set((state) => ({
    cakeConfig: { ...state.cakeConfig, baseColor }
  })),
  setFillColor: (fillColor) => set((state) => ({
    cakeConfig: { ...state.cakeConfig, fillColor }
  })),
  setTopper: (topper) => set((state) => ({
    cakeConfig: { ...state.cakeConfig, topper }
  })),
  setFrosting: (frosting) => set((state) => ({
    cakeConfig: { ...state.cakeConfig, frosting }
  })),
  setSize: (size) => set((state) => ({
    cakeConfig: { ...state.cakeConfig, size }
  })),
}))
