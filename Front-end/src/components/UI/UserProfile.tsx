import logo from '@/assets/user-avatar.png';
import { useAsideMenuContext } from '@/providers/asideMenu/useContextAsideMenu';

type Props = {
  userName: string;
};

const UserProfile = ({ userName }: Props) => {
  const { showAsideMenu } = useAsideMenuContext() ?? {};
  return (
    <div
      onClick={showAsideMenu}
      className="flex gap-5 justify-center items-center cursor-pointer"
    >
      <span className="text-white uppercase text-xxl">{userName}</span>
      <span
        className="rounded-full w-14 h-14 bg-auto bg-white"
        style={{
          background: `#fff url(${logo}) no-repeat center`,
          backgroundSize: '25px',
        }}
      ></span>
    </div>
  );
};

export default UserProfile;
