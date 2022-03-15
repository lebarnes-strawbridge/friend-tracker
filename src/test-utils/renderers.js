import { render } from "@testing-library/react";
import { FavoritesContext } from '../contexts/FavoritesContext'
import { FriendsContext } from '../contexts/FriendsContext'
import { FavoritesProvider, FriendsProvider } from '../components/FavoritesProvider'
import { FriendsProvider } from '../components/FavoritesProvider'

export const renderWithResources = (elements, friendsOptions, favoritesOptions, options) => {
    return render(
        <FriendsContext.Provider value={friendsOptions}>
            <FavoritesContext.Provider value={favoritesOptions}>
                {elements}
            </FavoritesContext.Provider>
        </FriendsContext.Provider>,
        options
    )
}

export const renderInApp = (elements, options) => {
    return render(
        <FavoritesProvider>
            <FriendsProvider>
                {elements}
            </FriendsProvider>
        </FavoritesProvider>,
        options
    )
}