import { StateCreator, StoreApi, UseBoundStore } from "zustand"
import { devtools } from "zustand/middleware"
import { createWithEqualityFn } from "zustand/traditional"

type StoreWithDevtools<T, A = string> = UseBoundStore<StoreApi<T>> & {
	getState: () => T
	setState: (partial: T | Partial<T>, replace?: boolean) => void
	subscribe: (listener: (state: T) => void) => () => void
}

export const createStore = <T>(
	fn: StateCreator<T, [], [["zustand/persist", T]]>,
	name: string
): StoreWithDevtools<T> => {
	const store =
		process.env.NODE_ENV === "development"
			? createWithEqualityFn(devtools(fn, { name }))
			: createWithEqualityFn(fn)
	const originalSetState = store.setState

	store.setState = (partial, replace = false, actionName) => {
		if (process.env.NODE_ENV === "development" && actionName) {
			originalSetState(partial, replace, actionName)
		} else {
			originalSetState(partial, replace)
		}
	}

	return store as StoreWithDevtools<T>
}
