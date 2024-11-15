import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import logic from '../logic'
import Login from './login'
import Register from './register'
import Home from './home'
import Alert from './common/Alert'

import { Context } from './context'

const App = () => {
    // console.debug('App -> call')

    const [theme, setTheme] = useState(localStorage.theme)
    const [alertMessage, setAlertMessage] = useState(null)

    const isUserLoggedIn = logic.isUserLoggedIn()

    const navigate = useNavigate()

    const trackClickEvent = (eventName) => {
        if (typeof wondow !== 'undefined' && window.analytics) {
            window.analytics.track(eventName)
            console.debug(`Tracked event: ${eventName}`)
        }
    }

    useEffect(() => {
        document.documentElement.className = theme
        localStorage.theme = theme
    }, [theme])

    const handleLogin = () => {
        // console.debug('App -> handleLogin')
        trackClickEvent('login clicked')
        navigate('/')
    }

    const handleRegisterClick = () => {
        // console.debug('App -> handleRegisterClick')
        trackClickEvent('register clicked')
        navigate('/register')
    }

    const handleRegister = () => {
        // console.debug('App -> handleRegister')
        trackClickEvent('registration completed')
        navigate('/login')
    }

    const handleLoginClick = () => {
        // console.debug('App -> handleLoginClick')
        trackClickEvent('login page opened')
        navigate('/login')
    }

    const handleLogout = () => {
        // console.debug('App -> handleLogout')
        trackClickEvent('logout clicked')
        navigate('/login')
    }

    const handleAlertAccept = () => setAlertMessage(null)

    return (
        <Context.Provider value={{ theme, setTheme, alert: setAlertMessage }}>
            <Routes>
                <Route path="/login" element={logic.isUserLoggedIn() ? (<Navigate to="/" />) : (<Login onLogin={handleLogin} onRegisterClick={handleRegisterClick} />)} />
                <Route path="/register" element={logic.isUserLoggedIn() ? (<Navigate to="/" />) : (<Register onRegister={handleRegister} onLoginClick={handleLoginClick} />)} />
                <Route path="/*" element={logic.isUserLoggedIn() ? <Home onLogout={handleLogout} setAlertMessage={setAlertMessage} /> : <Navigate to="/login" />} />
            </Routes>

            {alertMessage && <Alert message={alertMessage} onAccept={handleAlertAccept} />}
        </Context.Provider>
    )
}

export default App