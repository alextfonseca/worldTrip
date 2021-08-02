import Head from "next/head";
import { Box, Divider, Flex, Text, Link, Button } from "@chakra-ui/react";
import { Banner } from "../components/banner/Banner";
import { Header } from "../components/header/Header";
import { TravelTypes } from "../components/travelTypes/TravelTypes";

import { GetStaticProps } from "next";
import { api } from "../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { SliderContent } from "../components/slider/SliderContent";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface dataContinentProps {
  id: string;
  bannerUrl: string;
  name: string;
  aboutName: string;
}

interface continentData {
  dataContinent: [dataContinentProps];
}

export default function Home({ dataContinent }: continentData) {
  return (
    <div id="topo">
      <Head>
        <title>WorldTrip | Home</title>
      </Head>
      <main>
        <Flex m="auto" direction="column" width="100%">
          <Header />
          <Banner />
          <TravelTypes />
          <Divider width="100px" mx="auto" mt="80px" borderColor="gray.800" />
          <Text
            as="h2"
            textAlign="center"
            my="52px"
            fontSize={["20px", "26px", "36px"]}
            fontWeight="600"
            color="gray.700"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>

          <Box mb="50" height={600} width={["100%", "100%", "90%"]} m="auto">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              className="swiper"
            >
              {dataContinent.map((continent) => {
                return (
                  <SwiperSlide key={continent.id}>
                    <SliderContent
                      image={continent.bannerUrl}
                      imageAlt={continent.name}
                      hrefLink={`/continents/${continent.id}`}
                      title={continent.name}
                      subtitle={continent.aboutName}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Link href="#topo" my="8">
            <Button float="right" bg="blue.100">
              Voltar ao topo
            </Button>
          </Link>
        </Flex>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("continent?");

  const dataContinent = data.map((data) => {
    return {
      id: data.id,
      bannerUrl: data.bannerUrl,
      name: data.name,
      aboutName: data.aboutName,
    };
  });

  return {
    props: { dataContinent },
  };
};
