import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <Box
      width="100%"
      height="335px"
      m="auto"
      backgroundImage="/images/background.png"
    >
      <Flex>
        <Box width="100%" height="100%" my="auto" px="150px">
          <Text
            as="h1"
            fontSize="36px"
            fontWeight="medium"
            color="whiteAlpha.50"
            lineHeight="54px"
          >
            5 continentes, <br /> infinitas possibilidades
          </Text>
          <Text as="p" fontSize="20px" color="whiteAlpha.600" mt="4">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Box width="100%" height="100%" mt="20">
          <Image src="/images/airplane.svg" alt="imagem de um avião amarelo" />
        </Box>
      </Flex>
    </Box>
  );
};
