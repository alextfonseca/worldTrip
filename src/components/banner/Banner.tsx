import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Banner = () => {
  const isWideVersion = useBreakpointValue({ base: false, xl: true });
  return (
    <Box
      width="100%"
      height="335px"
      m="auto"
      backgroundImage="/images/background.png"
      backgroundSize="cover"
    >
      <Flex flexDirection={["column", "row"]}>
        <Box
          width="100%"
          height="100%"
          m="auto"
          mt={["120px", "80px"]}
          px={["20px", "40px", "150px"]}
        >
          <Text
            as="h1"
            fontSize={["20px", "24px", "36px"]}
            fontWeight="medium"
            color="whiteAlpha.50"
            lineHeight={["25px", "54px"]}
          >
            5 continentes, <br /> infinitas possibilidades
          </Text>
          <Text
            as="p"
            fontSize={["14px", "20px"]}
            color="whiteAlpha.600"
            mt="4"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        {isWideVersion && (
          <Box width="100%" height="100%" mt="20">
            <Image
              width="450px"
              height="100%"
              src="/images/airplane.svg"
              alt="imagem de um avião amarelo"
            />
          </Box>
        )}
      </Flex>
    </Box>
  );
};
