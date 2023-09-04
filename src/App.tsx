import {
  TonicProvider,
  PortalManager, // allows you to create and manage portals in the application
  // ToastManager, // allows you to create and manage toasts in the application
} from '@tonic-ui/react'
import Layout from './layouts/Layout'
import MenuIcon from './components/MenuIcon'

import './App.css'
import styles from './styles.module.scss'

function App() {
  return (
    <TonicProvider
      colorMode={{
        defaultValue: 'dark', // One of: 'dark', 'light'
      }}
      useCSSBaseline={true} // If `true`, apply CSS reset and base styles
    >
      <PortalManager>
        <Layout>
          <div className={styles.body}>
            <MenuIcon />
          </div>
        </Layout>
      </PortalManager>
    </TonicProvider>
  )
}

export default App
