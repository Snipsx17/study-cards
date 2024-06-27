type Props = {
  userName: string;
  avatar?: string;
};

const UserProfile = ({ userName, avatar }: Props) => {
  return (
    <div className="flex gap-5 justify-center items-center cursor-pointer">
      <span className="text-white uppercase text-xxl">{userName}</span>
      <span
        className="rounded-full w-14 h-14 bg-auto bg-white"
        style={{
          background: `#fff url(${
            avatar ? avatar : '../../assets/user-avatar.png'
          }) no-repeat center`,
          backgroundSize: '25px',
        }}
      ></span>
    </div>
  );
};

export default UserProfile;
