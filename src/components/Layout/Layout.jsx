import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Box } from './Layout.styled';

export const Layout = () => {
  return (
    <Box>
      <Header></Header>
      <Outlet/>
    </Box>
  );
};
