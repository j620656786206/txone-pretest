import { Global, css } from '@emotion/react'
import { useColorMode, useTheme } from '@tonic-ui/react'

type TProps = {
  children: React.ReactNode
}

const Layout = ({ children }: TProps) => {
  const [colorMode] = useColorMode()
  const { fontSizes, lineHeights } = useTheme()

  return (
    <>
      <Global
        styles={css`
          :root,
          :host {
            color-scheme: ${colorMode};
          }
          :focus:not(:focus-visible) {
            outline: none;
          }
          body {
            font-size: ${fontSizes.sm};
            line-height: ${lineHeights.sm};
          }

          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
        `}
      />
      {children}
    </>
  )
}

export default Layout
