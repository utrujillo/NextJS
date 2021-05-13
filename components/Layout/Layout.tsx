import React from 'react'
import Navbar from '@components/Navbar/Navbar'

import styles from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />
        { children }
      <footer className={ styles.footer }>
        Este es el footer
      </footer>
    </div>
  )
}

export default Layout