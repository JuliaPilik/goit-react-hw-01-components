import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';


export const FriendList = ({ friends }) => {
    return (
        <div className={css.container}>
        <ul className={css.friendList}>
                {friends.map(friend => (
                    <FriendListItem id={friend.id} name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />
                ))}
   
            </ul>
            </div>

    )
}

FriendList.propTypes= {
    friends: PropTypes.array.isRequired,
};