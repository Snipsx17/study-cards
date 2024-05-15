import PropTypes from 'prop-types';
import UserAvatar from '../../assets/user-avatar.png';

const UserProfile = ({ userName, avatar }) => {
  return (
    <div className="flex gap-5 justify-center items-center cursor-pointer">
      <span className="text-white uppercase text-xxl">{userName}</span>
      <span
        className="rounded-full w-14 h-14 bg-auto bg-white"
        style={{
          background: `#fff url(${
            avatar ? avatar : UserAvatar
          }) no-repeat center`,
          'background-size': '25px',
        }}
      ></span>
    </div>
  );
};

UserProfile.propTypes = {
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default UserProfile;
