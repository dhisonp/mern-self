import React from "react";
import {
  Stack,
  Box,
  Text,
  Heading,
  Flex,
  Spacer,
  Link,
  Center,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = (props) => {
  const link = (
    <Link as="b" href="">
      Click here to continue
    </Link>
  );
  const arrows = ">>";

  return (
    <Flex
      bg="pink"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      direction="column"
    >
      <Center flex={1}>
        <Stack minH={'100'}>
          <Heading as="h1" size="4xl">
            Hello, world!
          </Heading>
          <Spacer />
          <Text align={"center"} fontSize="xl">
            Welcome to my simple to do list.
            <br />
            {link} <Text as="b"> {arrows} </Text>
          </Text>
        </Stack>
      </Center>
      <Footer/>
    </Flex>
  );
};

export default Home;
