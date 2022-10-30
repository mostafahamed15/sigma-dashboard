import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://smartec-systems.com/" target="_blank" rel="noopener noreferrer">
          Smartec
        </a>
        <span className="ms-1">&copy; 2022 .</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://smartec-systems.com/" target="_blank" rel="noopener noreferrer">
          Smartec Admin &amp; Dashboard Template
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
