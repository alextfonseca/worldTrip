import { Button, Grid, Link, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Header } from "../../components/header/Header";
import { BannerContinent } from "../../components/slugPage/BannerContinent";
import { CardCities } from "../../components/slugPage/CardCities";
import { InfoContinent } from "../../components/slugPage/InfoContinent";
import { TooltipText } from "../../components/slugPage/TooltipText";
import { api } from "../../services/api";

const continents = ({ dataContinent }) => {
  return (
    <main>
      <head>
        <title>World Trip | {dataContinent.name}</title>
      </head>
      <Flex maxWidth={1440} m="auto" direction="column" id="topo">
        <Header isSlugPage={true} />

        <BannerContinent
          bannerUrl={dataContinent.bannerUrl}
          name={dataContinent.name}
        />

        <Flex gap={6} mt="80px" justify="space-between" alignItems="center">
          <Text fontSize="24px" color="gray.600" maxWidth="60%">
            {dataContinent.about}
          </Text>

          <Flex>
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
        <Text mt="80px" fontSize="36px" fontWeight="medium">
          Cidades +100
        </Text>

        <Grid mt="40px" gridTemplateColumns="repeat(4, 1fr)" gap="10">
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
          <Button float="right" bg="blue.100">
            Voltar ao topo
          </Button>
        </Link>
      </Flex>
    </main>
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
