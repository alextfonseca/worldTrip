import { Button, Grid, Link, Text, Flex, Box } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../../components/header/Header";
import { BannerContinent } from "../../components/slugPage/BannerContinent";
import { CardCities } from "../../components/slugPage/CardCities";
import { InfoContinent } from "../../components/slugPage/InfoContinent";
import { TooltipText } from "../../components/slugPage/TooltipText";

import { api } from "../../services/api";
import { GetServerSideProps } from "next";

const continents = ({ dataContinent }) => {
  return (
    <>
      <Head>
        <title>World Trip | {dataContinent.name}</title>
      </Head>
      <main>
        <Flex m="auto" direction="column" id="topo">
          <Header isSlugPage={true} />

          <BannerContinent
            bannerUrl={dataContinent.bannerUrl}
            name={dataContinent.name}
          />

          <Box maxWidth="90%" m="auto">
            <Flex
              gap={6}
              mt="80px"
              justify="space-between"
              alignItems="center"
              flexDirection={["column", "column", "row"]}
            >
              <Text
                as="p"
                fontSize={["14px", "18px", "24px"]}
                color="gray.600"
                maxWidth={["90%", "90%", "60%"]}
              >
                {dataContinent.about}
              </Text>

              <Flex mt={["20px", "20px", "0"]} p="8px">
                <InfoContinent
                  dataContinent={dataContinent.countries}
                  title={"Países"}
                />
                <InfoContinent
                  dataContinent={dataContinent.languages}
                  title={"Linguas"}
                />
                <TooltipText
                  dataContinent={dataContinent.cities}
                  title={"Cidades +100"}
                  tooltipText={"As 100 cidades mais visitadas do continente"}
                />
              </Flex>
            </Flex>
            <Text
              as="h2"
              mt={["40px", "80px"]}
              mb={["20px", "40px"]}
              fontSize={["24px", "28px", "36px"]}
              fontWeight="medium"
              ml={["30px", "30px", "0"]}
            >
              Cidades +100
            </Text>

            <Grid
              gridTemplateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap="10"
              justify="center"
              m="auto"
              width={["80%", "90%"]}
            >
              {dataContinent.cities_100.map((city) => {
                return (
                  <CardCities
                    key={city.city}
                    image={city.photo}
                    city={city.city}
                    country={city.country}
                    flag={city.flag}
                  />
                );
              })}
            </Grid>
            <Link href="#topo" my="8">
              <Button float="right" bg="blue.100" mt="10">
                Voltar ao topo
              </Button>
            </Link>
          </Box>
        </Flex>
      </main>
    </>
  );
};

export default continents;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const { data } = await api.get(`continent/${slug}`);

  const dataContinent = {
    id: data.id,
    bannerUrl: data.bannerUrl,
    name: data.name,
    about: data.about,
    countries: data.countries,
    languages: data.languages,
    cities: data.cities,
    cities_100: data.cities_100,
  };

  return {
    props: { dataContinent },
  };
};
