import { Box, Image, Link, Text } from "@chakra-ui/react";

interface SliderContentProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  hrefLink: string;
}

export const SliderContent = ({
  image,
  imageAlt,
  title,
  subtitle,
  hrefLink,
}: SliderContentProps) => {
  return (
    <>
      <Image src={image} alt={imageAlt} filter="brightness(.4)" />
      <Box
        position="absolute"
        transition=".3s"
        _hover={{
          color: "yellow",
        }}
      >
        <Link href={hrefLink}>
          <Text
            as="p"
            fontSize={["24px", "36px", "48px"]}
            fontWeight="bold"
            color="whiteAlpha.100"
          >
            {title}
          </Text>
          <Text
            as="span"
            fontSize={["14px", "22px", "24px"]}
            fontWeight="bold"
            color="whiteAlpha.200"
          >
            {subtitle}
          </Text>
        </Link>
      </Box>
    </>
  );
};
