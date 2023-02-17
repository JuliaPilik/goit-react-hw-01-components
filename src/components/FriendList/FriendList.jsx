import PropTypes from 'prop-types';
import css from './FriendList.module.css';


export const FriendList = ({ friends }) => {
    return (
        <div className={css.container}>
        <ul className={css.friendList}>
                {friends.map(friend => (
                    <li class={css.item} key={friend.id}>
                        <span class={ friend.isOnline ? css.status+ ' '+css.green : css.status+ ' '+css.red}></span>
                        <img class={css.avatar} src={ friend.avatar} alt="User avatar" width="48" />
                        <p class={css.name}>{ friend.name}</p>
                    </li>
                ))}
   
            </ul>
            </div>

    )
}

FriendList.propTypes= {
    friends: PropTypes.exact({
        isOnline: PropTypes.bool.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
};