import {
  Box,
  Flex,
  Image,
  Text,
  TextProps,
  useBreakpointValue,
} from "@chakra-ui/react";

interface TypesProps extends TextProps {
  srcImage: string;
  altImage: string;
  text: string;
}

export const Types = ({ srcImage, altImage, text, ...rest }: TypesProps) => {
  const isWideVersion = useBreakpointValue({ base: false, xl: true });

  return (
    <>
      {isWideVersion && (
        <Box width="100%" height="100%">
          <Image
            width="100px"
            height="100px"
            src={srcImage}
            alt={altImage}
            m="auto"
          />
          <Text
            as="p"
            {...rest}
            textAlign="center"
            mt="4"
            fontSize="22px"
            fontWeight="medium"
            color="gray.600"
          >
            {text}
          </Text>
        </Box>
      )}

      {!isWideVersion && (
        <Flex m="auto">
          <Image
            width="8px"
            height="8px"
            src="/images/ellipse.svg"
            alt="Ícone de uma bolinha laranja"
            my="auto"
            mr="4"
          />
          <Text
            as="p"
            {...rest}
            width="100%"
            my="auto"
            fontSize="18px"
            fontWeight="medium"
            color="gray.600"
          >
            {text}
          </Text>
        </Flex>
      )}
    </>
  );
};
