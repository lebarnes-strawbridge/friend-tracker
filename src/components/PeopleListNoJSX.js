import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PersonCard } from './PersonCard'
import styles from './PeopleList.module.css'
import { NewFriendCard } from './NewFriendCard'

const PeopleListNoJSX = ({
    people,
    onClickPerson = () => {},
    personActionName,
    onPersonAction,
    allowAdditions
}) => {
    const navigate = useNavigate()

    return React.createElement('div', {className: styles.peopleList}, [
        ...people.map(person => 
            React.createElement('div', {className: styles.peopleListItem}, [
                React.createElement(
                    PersonCard,
                    {key: person.id, person, onCardClicked: onClickPerson, actionName: personActionName, onAction: onPersonAction}
                )
            ])
        ),
        ...(allowAdditions ? [React.createElement('div', {className: styles.peopleListItem}, [
            React.createElement(NewFriendCard, {onClick: () => navigate('/new-friend')})
        ])] : [])
    ])
}

export { PeopleListNoJSX }