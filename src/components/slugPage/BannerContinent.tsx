import { Box, Flex, Text } from "@chakra-ui/react";

interface BannerContinentProps {
  bannerUrl: string;
  name: string;
}

export const BannerContinent = ({ bannerUrl, name }: BannerContinentProps) => {
  return (
    <Flex
      as="div"
      flexDirection="column"
      backgroundImage={bannerUrl}
      width="100%"
      height="400px"
      backgroundSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      filter="brightness(.9)"
    >
      <Text
        as="h1"
        fontSize={["28px", "36px", "48px"]}
        fontWeight="medium"
        my={["auto", "300px"]}
        p="4"
        textAlign={["center", "left"]}
        color="whiteAlpha.900"
      >
        {name}
      </Text>
    </Flex>
  );
};
