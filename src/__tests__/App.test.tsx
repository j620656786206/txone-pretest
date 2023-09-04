import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />)

    expect(baseElement).toBeTruthy()
  })

  it('should match snapshot', () => {
    const { baseElement} = render(<App />)

    expect(baseElement).toMatchSnapshot()
  })

  it('click button, should match snapshot', async () => {
    const user = userEvent.setup()
    const { baseElement } = render(<App />)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      const button = screen.getByRole('button')
      await user.click(button)
    })

    expect(baseElement).toMatchSnapshot()
  })

  it('click button, list items shoud be truthy', async () => {
    const user = userEvent.setup()
    render(<App />)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      const button = screen.getByRole('button')
      await user.click(button)
    })
    const settingsItem = screen.getByText('Settings')
    const accountsItem = screen.getByText('Accounts')
    const privacyControlItem = screen.getByText('Privacy control')

    expect(settingsItem).toBeTruthy()
    expect(accountsItem).toBeTruthy()
    expect(privacyControlItem).toBeTruthy()
  })
})
