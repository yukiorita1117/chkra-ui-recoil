import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import React from "react";
import MyModal from "../components/MyModal";
import SimpleDrawer from "../components/Drawer";
import UserItem from "../components/UserItem";

const Index = () => {
  const user = [
    {
      name: "折田幸夫",
      status: "一般",
      image: "../constants/sample.jpeg",
    },
    {
      name: "かわかみあきひろ",
      status: "一般",
      image: "../constants/sample.jpeg",
    },
  ];

  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{" "}
          <Code>typescript</Code>.
        </Text>

        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="#" flexGrow={1} mr={2}>
              Chakra UI <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="#" flexGrow={1} mr={2}>
              Next.js <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List>
        <MyModal isOpen={true} onClose={() => {}} />
        <SimpleDrawer />
        {user.map((u) => (
          <UserItem user={u} />
        ))}
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      <CTA />
    </Container>
  );
};

export default Index;
