import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CardCitiesProps {
  image: string;
  city: string;
  country: string;
  flag: string;
}

export const CardCities = ({ image, city, country, flag }: CardCitiesProps) => {
  return (
    <Box>
      <Image
        borderRadius="sm"
        height="300px"
        width="400px"
        src={image}
        alt={`foto da cidade de ${city} em ${country}`}
      />
      <Flex
        bg="whiteAlpha.100"
        borderColor="yellow.200"
        borderTop="none"
        borderWidth="1px"
        borderRadius="sm"
        align="center"
        justify="space-between"
        p="6"
      >
        <Box width="300px">
          <Text fontSize="20px" fontWeight="medium" color="gray.700">
            {city}
          </Text>
          <Text fontSize="16px" fontWeight="medium" color="gray.500">
            {country}
          </Text>
        </Box>
        <Box>
          <Image
            width="30px"
            height="27px"
            borderRadius="100%"
            src={flag}
            alt={`foto da bandeira da ${city}`}
          />
        </Box>
      </Flex>
    </Box>
  );
};
