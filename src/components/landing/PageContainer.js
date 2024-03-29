import { Flex, useColorMode, Container,Box} from '@chakra-ui/react'

export const PageContainer = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }

  return (
    <Box
      direction="column"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
