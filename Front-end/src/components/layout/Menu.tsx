import { AsideMenu } from './AsideMenu';
import NavMobile from './MobileNavBar';
import NavBar from './NavBar';

export const Menu = () => {
  return (
    <>
      <NavBar />
      <NavMobile />
      <AsideMenu />
    </>
  );
};
