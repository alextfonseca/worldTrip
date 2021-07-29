import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Banner } from "../components/banner/Banner";
import { Header } from "../components/header/Header";
import Slider from "../components/slider/Slider";
import { TravelTypes } from "../components/travelTypes/TravelTypes";

export default function Home() {
  return (
    <div>
      <Flex maxWidth={1440} m="auto" direction="column">
        <Header />
        <Banner />
        <TravelTypes />
        <Divider width="100px" mx="auto" mt="80px" borderColor="gray.800" />
        <Text
          as="h2"
          textAlign="center"
          my="52px"
          fontSize="36px"
          fontWeight="600"
          color="gray.700"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Slider />
      </Flex>
    </div>
  );
}
