import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { myProfileData as startingInfo } from '../Data'
import { ProfileInfo } from '../components/ProfileInfo'
import styles from './UserProfilePage.module.css'
import { PersonInfoForm } from '../components/PersonInfoForm'
import { updateProfile } from '../actions/profile'

import {getProfileInfo} from '../selectors/profile'

const UserProfilePage = () => {
    console.log("UserProfilePage rendering")
    //const existingInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [isEditing, setIsEditing] = useState(false)
    //const userInfo = useSelector(state => state.profile)

    const userInfo = useSelector(getProfileInfo)

    const dispatch = useDispatch()
    //const [userInfo, setUserInfo] = useState(existingInfo || startingInfo)
    const updateUserInfo = updatedInfo => {
        //setUserInfo(updatedInfo)
        //localStorage.setItem('userInfo', JSON.stringify(updatedInfo))
        dispatch(updateProfile(updatedInfo))
        setIsEditing(false)
    }

    const actions = [{
        actionName: 'Edit My Info',
        handler: () => setIsEditing(true)
    }]

    return (
        <>
            <h2 className={styles.contentHeading}>My Profile</h2>
            {isEditing ? 
                <PersonInfoForm person={userInfo} onSubmit={updateUserInfo} buttonText="Save Changes" /> 
                : <ProfileInfo person={userInfo} actions={actions} />}
        </>
    )
}

export { UserProfilePage }