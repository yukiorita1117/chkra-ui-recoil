import { Box } from "@chakra-ui/react";
import React from "react";
type Props = {
  user: {
    name: string;
    status: string;
    image: string;
  };
};

// TODO component style
const UserItem: React.VFC<Props> = ({ user }) => {
  return (
    <>
      <Box bg="#EDF2F7" w="100%" p={4} color="white">
        {user.name}
      </Box>
    </>
  );
};

export default UserItem;
