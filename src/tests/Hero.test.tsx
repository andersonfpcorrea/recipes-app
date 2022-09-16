import { describe, expect, it } from 'vitest'
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('Tests for the Hero page', () => {
  it('checks if the correct the "Start Cooking" button renders on the page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const btn = screen.getByRole('button', { name: /Start Cooking/ })

    expect(btn).toBeDefined()
  })
})
