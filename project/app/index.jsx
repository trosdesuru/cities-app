import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './view/App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Router><App /></Router>)