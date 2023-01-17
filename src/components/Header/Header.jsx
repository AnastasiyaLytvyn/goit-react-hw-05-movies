import { HeaderContainer, NavItem } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </nav>
    </HeaderContainer>
  );
};
