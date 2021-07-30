import { Box, Text } from "@chakra-ui/react";

interface InfoContinentProps {
  dataContinent: string;
  title: string;
}

export const InfoContinent = ({ dataContinent, title }: InfoContinentProps) => {
  return (
    <Box mr="10">
      <Text
        fontSize="48px"
        fontWeight="medium"
        color="yellow.200"
        textAlign="center"
      >
        {dataContinent}
      </Text>
      <Text
        textAlign="center"
        fontWeight="medium"
        fontSize="24px"
        color="gray.600"
      >
        {title}
      </Text>
    </Box>
  );
};
