import { Flex, useColorMode, Container} from '@chakra-ui/react'

export const PageContainer = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }

  return (
    <Container
      direction="column"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
