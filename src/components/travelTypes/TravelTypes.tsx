import { Grid } from "@chakra-ui/react";
import { Types } from "./Types";

export const TravelTypes = () => {
  return (
    <Grid
      gridTemplateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(5, 1fr)",
      ]}
      px={["20px", "30px", "200px"]}
      mt="80px"
      width="100%"
      gap="8"
      justify="center"
    >
      <Types
        srcImage="/images/cocktail.svg"
        altImage="imagem de um cocktail amarelo"
        text="vida noturna"
      />

      <Types
        srcImage="/images/surf.svg"
        altImage="imagem de uma prancha de surf com um sol amarelo"
        text="praia"
      />

      <Types
        srcImage="/images/building.svg"
        altImage="imagem de uma construção amarela"
        text="moderno"
      />

      <Types
        srcImage="/images/museum.svg"
        altImage="imagem de um museum amarelo"
        text="clássico"
      />

      <Types
        srcImage="/images/earth.svg"
        altImage="imagem do planeta terra amarelo"
        text="e mais..."
      />
    </Grid>
  );
};
