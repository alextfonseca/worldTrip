import { Flex, Image, Link } from "@chakra-ui/react";

interface HeaderProps {
  isSlugPage?: boolean;
}

export const Header = ({ isSlugPage = false }: HeaderProps) => {
  return (
    <Flex p={["6", "auto"]} align="center" m="auto" width="90%">
      {isSlugPage && (
        <Link href="/">
          <Image mr="50%" src="/images/backToPage.svg" alt="voltar para home" />
        </Link>
      )}
      <Link href="/" m="auto">
        <Image width="100%" height="100%" src="/images/logo.svg" alt="logo" />
      </Link>
    </Flex>
  );
};
