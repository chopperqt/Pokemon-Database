import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import  Search from 'src/components/search/Search'

const TEST_VALUE = 'Pokemon'

const server = setupServer(
	rest.get('/greeting',  ( req, rest, ctx ) => {
		return rest(
			ctx.delay(2000),
			ctx.status(200, 'Mocked status'),
			ctx.json({ greetings: 'hello there' })
			)
	})
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Testing <Search> component' , () => {
	const component = () => {
		render(<Search />)

		const  input = screen.getByTestId('search-input')

		return {
			input,
		}
	}

	test("Change value:", () => {
		const { input } = component()
		
		expect(input).toBeInTheDocument()

		userEvent.type(input, "Pokemon")

		expect(input).toHaveValue("Pokemon")
	})

	test("Open popup", ( ) => {
		const { input } = component()

		expect(input).toBeInTheDocument()

		userEvent.type(input, "Pokemon")

		expect(screen.getByTestId('search-popup')).toBeInTheDocument() 
	})

	test('pokemon data loading, need show loader', async () => {
		const { input } = component()

		expect(input).toBeInTheDocument()

		userEvent.type(input, TEST_VALUE)

		const popup = screen.getByTestId('search-popup')

		expect(popup).toBeInTheDocument()

		const response = await fetch('/greeting')

		expect(screen.getByTestId('search-popup-no-item')).toBeInTheDocument()
	})

	test('pokemon data was load and dont have pokemon', () => {
		const { input } = component()

		expect(input).toBeInTheDocument()

		userEvent.type(input, TEST_VALUE)

		const popup = screen.getByTestId('search-popup')

		expect(popup).toBeInTheDocument()

		expect(screen.getByTestId('search-popup-no-item')).toBeInTheDocument()
	})


	test('pokemon data was load and has pokemon', () => {
		const { input } = component()

		expect(input).toBeInTheDocument()

		userEvent.type(input, "Pikachu")

		const popup = screen.getByTestId('search-popup') 

		expect(popup).toBeInTheDocument()

		const popupItem = screen.getByTestId('search-popup-item')

		expect(popupItem).toBeInTheDocument()
	})




	// test("Open <Search> popup", () => {
	// 	const { element } = searchComponent()

	// 	expect(element).toBeInTheDocument()

	// 	userEvent.type(element, "Some pokemon")

	// 	const popupElement = screen.getByTestId('search-popup')

	// 	expect(popupElement).toBeInTheDocument()
	// })

	// test("Close <Search> popup", () => {
	// 	const { element } = searchComponent()

	// 	expect(element).toBeInTheDocument()

	// 	userEvent.type(element, "Some pokemon name")
	// })
})