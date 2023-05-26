import { Box, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Text>Suh</Text>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
