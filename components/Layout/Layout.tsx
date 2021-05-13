import React from 'react'
import Navbar from '@components/Navbar/Navbar'

import styles from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />
        { children }
      <footer className={ styles.footer }>
        <h1 className='title'>Clase JSX</h1>
      </footer>

      <style jsx>{`
        .title{ 
          text-align: center;
          text-decoration: underline;
         }
      `}
      </style>
    </div>
  )
}

export default Layout