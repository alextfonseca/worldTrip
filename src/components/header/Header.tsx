import { Flex, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex maxWidth={1440} m="auto" py="6">
      <Image src="/images/logo.svg" alt="logo" justify="center" />
    </Flex>
  );
};
