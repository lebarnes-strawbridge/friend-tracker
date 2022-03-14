//import { useContext } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams, useNavigate } from 'react-router-dom'
//import { FavoritesContext } from '../contexts/FavoritesContext'
//import { FriendsContext } from '../contexts/FriendsContext'
import { ProfileInfo } from "../components/ProfileInfo"
import { addFavorite, removeFavorite } from "../actions/favorites"

import {getIsFavorite} from '../selectors/favorites'
import {getFriendById} from '../selectors/friends'

const FriendDetailPage = () => {
    console.log("FriendDetailPage rendering")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //const { favoriteIds, toggleFavorite } = useContext(FavoritesContext)
    //const { friends } = useContext(FriendsContext)
    const { friendId } = useParams()

    //const selectedFriend = useSelector(state => state.friends.find(friend => friend.id === friendId))
    //const isFavorite = useSelector(state => state.favorites.includes(friendId))
    //const selectedFriend = useSelector(state => getFriendById(friendId, state))

    const selectedFriend = useSelector(getFriendById(friendId))
    const isFavorite = useSelector(state => getIsFavorite(friendId, state))

    //const selectedFriend = friends.find(friend => friend.id === friendId)
    //const isFavorite = favoriteIds.includes(friendId)

    const toggleFavorite = friendId => {
        if(isFavorite) {
            dispatch(removeFavorite(friendId))
        } else {
            dispatch(addFavorite(friendId))
        }
    }

    const pageActions = [{
        actionName: isFavorite ? 'Remove from Favorites' : 'Add to Favorites',
        handler: () => toggleFavorite(friendId),
    }, {
        actionName: 'Edit Info',
        handler: () => navigate(`/edit/${friendId}`)
    }]

    return selectedFriend ? (
        <ProfileInfo
            person={selectedFriend}
            actions={pageActions}
        />
    ) : (
        <>
            <p>Oops! Couldn't find that friend.</p>
            <Link to="/"><button>Back to Home</button></Link>
        </>
    )
}

export { FriendDetailPage }