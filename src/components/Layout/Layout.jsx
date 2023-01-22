import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from './Layout.styled';

const Layout = () => {
  return (
    <Box>
      <Header></Header>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;