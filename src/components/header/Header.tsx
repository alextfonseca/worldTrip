import { Flex, Image, Link } from "@chakra-ui/react";

interface HeaderProps {
  isSlugPage?: boolean;
}

export const Header = ({ isSlugPage = false }: HeaderProps) => {
  return (
    <Flex maxWidth={1440} py="6" gap="80" align="center">
      {isSlugPage && (
        <Link href="/">
          <Image
            p="4"
            src="/images/backToPage.svg"
            alt="voltar para home"
            textAlign="left"
          />
        </Link>
      )}
      <Link href="/" m="auto">
        <Image width="100%" height="100%" src="/images/logo.svg" alt="logo" />
      </Link>
    </Flex>
  );
};
