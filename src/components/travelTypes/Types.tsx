import { Box, Image, Text, TextProps } from "@chakra-ui/react";

interface TypesProps extends TextProps {
  srcImage: string;
  altImage: string;
  text: string;
}

export const Types = ({ srcImage, altImage, text, ...rest }: TypesProps) => {
  return (
    <Box>
      <Image src={srcImage} alt={altImage} m="auto" />
      <Text
        {...rest}
        textAlign="center"
        mt="4"
        fontSize="22px"
        fontWeight="medium"
        color="gray.600"
      >
        vida noturna
      </Text>
    </Box>
  );
};
