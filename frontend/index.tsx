
import React from 'react'
import ReactDOM from  "react-dom/client"
import { Application } from './pages/App'

const root = ReactDOM.createRoot(document.querySelector('#application') as HTMLElement)

root.render(
    <Application/>
)