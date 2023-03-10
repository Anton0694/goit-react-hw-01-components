import css from 'components/FriendList/FriendList.module.css'
import PropTypes from 'prop-types';
import {Status} from './FriendList.styled'

export const FriendList = ({friends}) => {
    
    return (<ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            
            <li key={id} className={css.item}>
                <Status isOnline={isOnline} >{isOnline}</Status>
  <img className={css.avatar} src={avatar} alt="User avatar" width="70" />
                <p className={css.name}>{name}</p>
 </li>
    
))}
    
    </ul>)

}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};