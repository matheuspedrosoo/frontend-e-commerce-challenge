'use client'
import { useState } from 'react'

export function useLocalStorage<T>(item: string) {
	const storedValue = localStorage.getItem(item)
	const parsedValue = storedValue ? JSON.parse(storedValue) : ''
	const [value, setValue] = useState(parsedValue)

	const updateLocalStorage = (newValue: T) => {
		setValue(newValue)
		localStorage.setItem(item, JSON.stringify(newValue))
	}

	return { value, updateLocalStorage }
}
