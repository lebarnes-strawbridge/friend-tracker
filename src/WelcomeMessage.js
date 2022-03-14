import { useState } from 'react'
import styles from './WelcomeMessage.module.css'
import PropTypes from 'prop-types'

const WelcomeMessage = ({name}) => {
    const hasBeenHidden = sessionStorage.getItem('welcomeMessageHidden')

    const [isVisible, setIsVisible] = useState(!hasBeenHidden)

    const hide = () => {
        setIsVisible(false)
        localStorage.setItem('welcomeMessageHidden', true)
    }

    return isVisible ? (
        <div className={styles.welcomeMessage}>
            <h2>Welcome to the Friend Tracker App, {name}</h2>
            <button onClick={hide}>Hide</button>
        </div>
    ) : null
}

WelcomeMessage.propTypes = {
    name: PropTypes.string.isRequired
}

export { WelcomeMessage }