import { useSyncExternalStore } from 'react'

export function useMediaQuery(query: string): boolean | null {
  const subscribe = (callback: () => void) => {
    const mediaQuery = window.matchMedia(query)
    mediaQuery.addEventListener('change', callback)
    return () => mediaQuery.removeEventListener('change', callback)
  }

  const getClientSnapshot = () => window.matchMedia(query).matches

  const getServerSnapshot = (): null => null

  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)
}
