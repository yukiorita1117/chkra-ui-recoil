import { Box, propNames } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

type Props = {
  user: {
    name: string;
    status: string;
    image: string;
  };
};

const Wrapper = styled.div`
  display: flex;
`;

// TODO component style
const UserItem: React.VFC<Props> = ({ user }) => {
  return (
    <>
      <Box bg="#EDF2F7" color="black" fontWeight="bold" w="100%" p={4}>
        <Wrapper>
          <img src={user.image}></img>
          <p>{user.name}</p>
        </Wrapper>
      </Box>
    </>
  );
};

export default UserItem;
