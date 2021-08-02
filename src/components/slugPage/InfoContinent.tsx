import { Box, Text } from "@chakra-ui/react";

interface InfoContinentProps {
  dataContinent: string;
  title: string;
}

export const InfoContinent = ({ dataContinent, title }: InfoContinentProps) => {
  return (
    <Box p="4">
      <Text
        as="p"
        fontSize={["24px", "36px", "48px"]}
        fontWeight="medium"
        color="yellow.200"
        textAlign="center"
      >
        {dataContinent}
      </Text>
      <Text
        as="span"
        textAlign="center"
        fontWeight="medium"
        fontSize={["18px", "24px"]}
        color="gray.600"
      >
        {title}
      </Text>
    </Box>
  );
};
