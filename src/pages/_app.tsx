import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  const bg = useColorModeValue("#ffffff", "#020202");
  const color = useColorModeValue("020202", "#ffffff");
  return(
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp;
