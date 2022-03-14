import '../index.css'
import styles from './ProfileInfo.module.css'
import PropTypes from 'prop-types'
import { Tag } from '../Tag'

const ProfileInfo = ({
    person: {profilePicUrl, name, age, bio, birthday, interests},
    actions = []
}) => {

    return (
        <> 
            <div className={styles.profilePicContainer}>
                <img
                    src={profilePicUrl}
                    className={styles.profilePic}
                    alt={`${name}'s Profile Pic`}
                    title={`${name}'s Profile Pic`}
                />
            </div>
            <h3 className={styles.detailHeading}>Name</h3>
            <p>{name}</p>
            <h3 className={styles.detailHeading}>Age</h3>
            <p>{age}</p>
            <h3 className={styles.detailHeading}>Bio</h3>
            <p>{bio}</p>
            <h3 className={styles.detailHeading}>Birthday</h3>
            <p>{birthday}</p>
            <h3 className={styles.detailHeading}>Interests</h3>
            {interests.map(interest => <Tag key={interest} text={interest} />)}
            {actions.map(action => (
                <button 
                    key={action.actionName} 
                    className={styles.actionButton} 
                    onClick={action.handler}>
                    {action.actionName}
                </button>
            ))}
        </>
    )
}

ProfileInfo.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profilePicUrl: PropTypes.string,
        age: PropTypes.number,
        bio: PropTypes.string,
        birthday: PropTypes.string,
        interests: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            actionName: PropTypes.string.isRequired,
            //onAction: PropTypes.func.isRequired
        })
    )
}

export { ProfileInfo }
