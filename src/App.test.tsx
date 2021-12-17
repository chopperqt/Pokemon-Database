import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { Search } from './components'

describe('Testing <Search> component' , () => {

	const searchComponent = () => {
		render(<Search />)

		const element = screen.getByTestId('search-input')

		return {
			element,
		}
	}

	test("Change <Search> value:", () => {
		const { element } = searchComponent()
	
		expect(element).toBeInTheDocument()

		userEvent.type(element, "Pokemon")

		expect(element).toHaveValue("Pokemon")
	})

	test("Open <Search> popup", () => {
		const { element } = searchComponent()

		expect(element).toBeInTheDocument()

		userEvent.type(element, "Some pokemon")

		const popupElement = screen.getByTestId('search-popup')

		expect(popupElement).toBeInTheDocument()
	})

	test("Close <Search> popup", () => {
		const { element } = searchComponent()

		expect(element).toBeInTheDocument()

		userEvent.type(element, "Some pokemon name")
	})
})