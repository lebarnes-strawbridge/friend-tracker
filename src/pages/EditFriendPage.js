//import { useContext } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
//import { FriendsContext } from "../contexts/FriendsContext"
import { PersonInfoForm } from "../components/PersonInfoForm"
import { editFriend } from '../actions/friends'
//import { getFriends } from '../selectors/friends' 
import { getFriendById } from '../selectors/friends'

const EditFriendPage = () => {
    console.log("EditFriendPage rendering")
    const { friendId } = useParams()
    //const { friends, updateFriend } = useContext(FriendsContext)
    //const friends = useSelector(state => state.friends)
    //const friends = useSelector(getFriends) 
    const selectedFriend = useSelector(getFriendById(friendId)) 
    //const selectedFriend = friends.find(f => f.id === friendId)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const saveUpdatedInformation = (updatedInfo) => {
        dispatch(editFriend(friendId, updatedInfo))
        navigate('/')
        /*updateFriend({
            ...updatedInfo,
            id: friendId
        })
        navigate('/')*/
    }

    return (
        <>
            <h1>Edit Info</h1>
            <PersonInfoForm person={selectedFriend} onSubmit={saveUpdatedInformation} buttonText="Save Changes" />
        </>
    )
}

export {EditFriendPage}