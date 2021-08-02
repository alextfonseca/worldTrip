import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CardCitiesProps {
  image: string;
  city: string;
  country: string;
  flag: string;
}

export const CardCities = ({ image, city, country, flag }: CardCitiesProps) => {
  return (
    <Box width="100%">
      <Image
        width="500px"
        height="300px"
        borderRadius="sm"
        src={image}
        alt={`foto da cidade de ${city} em ${country}`}
      />
      <Flex
        maxWidth="500px"
        bg="whiteAlpha.100"
        borderColor="yellow.200"
        borderTop="none"
        borderWidth="1px"
        borderRadius="sm"
        align="center"
        justify="space-between"
        p="6"
      >
        <Box>
          <Text as="p" fontSize="20px" fontWeight="medium" color="gray.700">
            {city}
          </Text>
          <Text as="span" fontSize="16px" fontWeight="medium" color="gray.500">
            {country}
          </Text>
        </Box>
        <Box>
          <Image
            width="30px"
            height="30px"
            borderRadius="100%"
            src={flag}
            alt={`foto da bandeira da ${city}`}
          />
        </Box>
      </Flex>
    </Box>
  );
};
