import { render } from '@testing-library/react'
import { TonicProvider, Menu } from '@tonic-ui/react'

import CustomMenuList from '../'

describe('CustomMenuList Test', () => {
  it('with dark mode, should render successfully', () => {
    const { baseElement } = render(
      <TonicProvider
        colorMode={{
          defaultValue: 'dark', // One of: 'dark', 'light'
        }}
        useCSSBaseline={true} // If `true`, apply CSS reset and base styles
      >
        <Menu>
          <CustomMenuList />
        </Menu>
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
        <Menu>
          <CustomMenuList />
        </Menu>
      </TonicProvider>
    )

    expect(baseElement).toMatchSnapshot()
  })
})
