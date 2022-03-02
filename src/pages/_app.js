import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import {Provider} from "next-auth/client"

import theme from '../theme'

  
// if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
//   require(");
// }

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
    </Provider>
  )
}

export default MyApp
