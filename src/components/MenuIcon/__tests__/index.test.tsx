import { render, screen } from '@testing-library/react'
import { TonicProvider } from '@tonic-ui/react'

import MenuIcon from '../'
import userEvent from '@testing-library/user-event'

describe('MenuIcon Test', () => {
  it('with dark mode, should render successfully', () => {
    const { baseElement } = render(
      <TonicProvider
        colorMode={{
          defaultValue: 'dark', // One of: 'dark', 'light'
        }}
        useCSSBaseline={true} // If `true`, apply CSS reset and base styles
      >
        <MenuIcon />
      </TonicProvider>
    )

    expect(baseElement).toBeTruthy()
  })

  it('with dark mode, should match snapshot', () => {
    const { baseElement } = render(
      <TonicProvider
        colorMode={{
          defaultValue: 'dark', // One of: 'dark', 'light'
        }}
        useCSSBaseline={true} // If `true`, apply CSS reset and base styles
      >
        <MenuIcon />
      </TonicProvider>
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('with light mode, should render successfully', () => {
    const { baseElement } = render(
      <TonicProvider
        colorMode={{
          defaultValue: 'light', // One of: 'dark', 'light'
        }}
        useCSSBaseline={true} // If `true`, apply CSS reset and base styles
      >
        <MenuIcon />
      </TonicProvider>
    )

    expect(baseElement).toBeTruthy()
  })

  it('with light mode, should match snapshot', () => {
    const { baseElement } = render(
      <TonicProvider
        colorMode={{
          defaultValue: 'light', // One of: 'dark', 'light'
        }}
        useCSSBaseline={true} // If `true`, apply CSS reset and base styles
      >
        <MenuIcon />
      </TonicProvider>
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('with hover, should match snapshot', () => {
    const user = userEvent.setup()
    const { baseElement } = render(
      <TonicProvider
        colorMode={{
          defaultValue: 'dark', // One of: 'dark', 'light'
        }}
        useCSSBaseline={true} // If `true`, apply CSS reset and base styles
      >
        <MenuIcon />
      </TonicProvider>
    )

    const button = screen.getByRole('button')
    user.hover(button)

    expect(baseElement).toMatchSnapshot()
  })
})
