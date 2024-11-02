import { shallow } from 'zustand/shallow'

import { ThemeStore, useThemeStore as useThemeStoreZus } from './useThemeStore'

const useThemeStore = <T>(
  selector: (state: ThemeStore) => T,
  equalityFn: (a: T, b: T) => boolean = shallow,
): T => useThemeStoreZus(selector, equalityFn)

export { useThemeStore }
