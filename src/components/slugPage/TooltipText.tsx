import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";

interface TooltipTextProps {
  dataContinent: string;
  title: string;
  tooltipText: string;
}

export function TooltipText({
  dataContinent,
  title,
  tooltipText,
}: TooltipTextProps) {
  return (
    <Box p="4">
      <Text
        fontSize={["24px", "36px", "48px"]}
        fontWeight="medium"
        color="yellow.200"
        textAlign="center"
      >
        {dataContinent}
      </Text>
      <Flex>
        <Text
          mr={["0", "2"]}
          textAlign="center"
          fontWeight="medium"
          fontSize={["18px", "24px"]}
          color="gray.600"
        >
          {title}
        </Text>
        <Tooltip label={tooltipText} aria-label="A tooltip">
          <Image
            src="/images/infoCities.svg"
            alt="logo de um ponto de exclamação"
          />
        </Tooltip>
      </Flex>
    </Box>
  );
}
