import logo from '@/assets/user-avatar.png';

type Props = {
  userName: string;
};

const UserProfile = ({ userName }: Props) => {
  return (
    <div className="flex gap-5 justify-center items-center cursor-pointer">
      <span className="text-white uppercase text-xxl">{userName}</span>
      <span
        className="rounded-full w-14 h-14 bg-auto bg-white"
        style={{
          background: `#fff url(${logo}) no-repeat center`,
          backgroundSize: '25px',
        }}
      >
        <img src="" alt="" />
      </span>
    </div>
  );
};

export default UserProfile;
