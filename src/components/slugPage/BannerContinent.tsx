import { Box, Text } from "@chakra-ui/react";

interface BannerContinentProps {
  bannerUrl: string;
  name: string;
}

export const BannerContinent = ({ bannerUrl, name }: BannerContinentProps) => {
  return (
    <Box
      backgroundImage={bannerUrl}
      width="1440px"
      height="400px"
      backgroundSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      filter="brightness(.9)"
    >
      <Text
        fontSize="48px"
        fontWeight="medium"
        color="whiteAlpha.900"
        mt="20%"
        ml="20"
      >
        {name}
      </Text>
    </Box>
  );
};
