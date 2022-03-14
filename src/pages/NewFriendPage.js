//import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
//import { FriendsContext } from '../contexts/FriendsContext'
import { PersonInfoForm } from '../components/PersonInfoForm'
import { addFriend } from '../actions/friends'

const NewFriendPage = () => {
    console.log("NewFriendPage rendering")
    //const { addFriend } = useContext(FriendsContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onFormSubmit = friendInfo => {
        const newFriend = {
            ...friendInfo,
            id: uuid()
        }
        //addFriend(newFriend)
        dispatch(addFriend(newFriend))
        navigate('/')
    }

    return (
        <>
            <h1>Add A New Friend</h1>
            <PersonInfoForm onSubmit={onFormSubmit} buttonText="Create" />
        </>
    )
}

export { NewFriendPage }