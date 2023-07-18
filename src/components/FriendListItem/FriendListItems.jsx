import PropTypes from 'prop-types';
import css from './FriendListItems.module.css';
const FriendListItems = ({ avatar, name, isOnline }) => {
  const className = [css.status, isOnline ? css.green : css.red];
  return (
    <>
      {' '}
      <li className={css.item}>
        <span className={className.join(' ')} span/>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};
FriendListItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItems;