import { describe, it, expect, beforeEach } from 'vitest'
import { useStore } from '../store/useStore'

describe('useStore', () => {
  beforeEach(() => {
    useStore.setState({
      cakeConfig: {
        layers: 2,
        baseColor: '#FDF5E6',
        fillColor: '#4B2512',
        topper: 'none',
        frosting: 'glossy',
        size: '6"',
      },
      cart: [],
      language: 'EN'
    })
  })

  it('should update layers', () => {
    const { setLayers } = useStore.getState()
    setLayers(3)
    expect(useStore.getState().cakeConfig.layers).toBe(3)
  })

  it('should update language', () => {
    const { setLanguage } = useStore.getState()
    setLanguage('BN')
    expect(useStore.getState().language).toBe('BN')
  })

  it('should add to cart', () => {
    const { addToCart } = useStore.getState()
    const item = { id: 1, layers: 2 }
    addToCart(item)
    expect(useStore.getState().cart).toContain(item)
  })
})
