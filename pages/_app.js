import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import theme from "../theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en",
          url: "https://carbonless.vercel.app/",
          site_name: "Carbonless",
          title: "Carbonless",
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
