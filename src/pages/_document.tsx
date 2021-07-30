import Document, { Head, Html, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta
            name="description"
            content="World Trip é um site de viagens pelo mundo, onde você pode escolher o continente e as cidades mais visitadas  para conhecer"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
