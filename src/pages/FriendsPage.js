//import { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addFavorite, removeFavorite } from '../actions/favorites'
import { WelcomeMessage } from '../WelcomeMessage'
import { myProfileData } from '../Data'
import { PeopleList } from '../components/PeopleList'
//import { FavoritesContext } from '../contexts/FavoritesContext'
//import { FriendsContext } from '../contexts/FriendsContext'
import styles from './FriendsPage.module.css'

import {getFavorites, getNonFavorites} from '../selectors/favorites'

const FriendsPage = () => {
  console.log("FriendsPage rendering")
  //const { favoriteIds, toggleFavorite } = useContext(FavoritesContext)
  //const { friends } = useContext(FriendsContext)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  //const favorites = useSelector(state => state.favorites.map(id => state.friends.find(friend => friend.id === id)))
  //const nonFavorites = useSelector(state => state.friends.filter(friend => !state.favorites.find(id => friend.id === id)))
  
  const favorites = useSelector(getFavorites)
  const nonFavorites = useSelector(getNonFavorites)
  
  //const favorites = favoriteIds.map(id => friends.find(friend => friend.id === id))
  //const nonFavorites = friends.filter(friend => !favoriteIds.find(id => friend.id === id))

  const goToPersonDetail = personId => {
      navigate(`/friends/${personId}`)
  }

  return (
    <>
      <h1>Friend Tracker</h1>
        <WelcomeMessage name={myProfileData.name} />
        <p>You have {favorites.length} {favorites.length === 1 ? 'favorite' : 'favorites'}.</p>
        <h2 className={styles.contentHeading}>Favorites</h2>
        <PeopleList
          people={favorites} 
          onClickPerson={goToPersonDetail} 
          personActionName="Remove from Favorites"
          onPersonAction={(id) => dispatch(removeFavorite(id))}
        />
        <h2 className={styles.contentHeading}>My Friends</h2>
        <PeopleList
          people={nonFavorites} 
          onClickPerson={goToPersonDetail} 
          personActionName="Add to Favorites"
          onPersonAction={(id) => dispatch(addFavorite(id))}
          allowAdditions
        />
    </>   
  );
}

export { FriendsPage }