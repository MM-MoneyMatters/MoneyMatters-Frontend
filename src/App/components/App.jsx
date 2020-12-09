import React from 'react'
import '../styles/App.scss'

export const App = ({children}) => {
  return(
    <div className={"app"}>
      {children}
    </div>
  )
}