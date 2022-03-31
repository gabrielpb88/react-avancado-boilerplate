import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main', function () {
  it('should render the heading', function () {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
