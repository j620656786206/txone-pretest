import { render } from '@testing-library/react'
import { TonicProvider } from '@tonic-ui/react'

import CustomMenuItem from '../'

describe('CustomMenuItem Test', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TonicProvider
        colorMode={{
          defaultValue: 'dark', // One of: 'dark', 'light'
        }}
        useCSSBaseline={true} // If `true`, apply CSS reset and base styles
      >
        <CustomMenuItem />
      </TonicProvider>
    )

    expect(baseElement).toBeTruthy()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(
      <TonicProvider
        colorMode={{
          defaultValue: 'dark', // One of: 'dark', 'light'
        }}
        useCSSBaseline={true} // If `true`, apply CSS reset and base styles
      >
        <CustomMenuItem />
      </TonicProvider>
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('with icon props, should match snapshot', () => {
    const { baseElement } = render(
      <TonicProvider
        colorMode={{
          defaultValue: 'dark', // One of: 'dark', 'light'
        }}
        useCSSBaseline={true} // If `true`, apply CSS reset and base styles
      >
        <CustomMenuItem icon='user-team' />
      </TonicProvider>
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('with text props, should match snapshot', () => {
    const { baseElement } = render(
      <TonicProvider
        colorMode={{
          defaultValue: 'dark', // One of: 'dark', 'light'
        }}
        useCSSBaseline={true} // If `true`, apply CSS reset and base styles
      >
        <CustomMenuItem text='test' />
      </TonicProvider>
    )

    expect(baseElement).toMatchSnapshot()
  })
})
