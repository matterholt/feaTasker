import { VStack,HStack, Box ,Heading,List,ListItem,ListIcon,Icon} from '@chakra-ui/react'
import { MdCheckCircle,MdSettings,ViewIcon,ChevronUpIcon,BellIcon} from '@chakra-ui/icons'
const CircleIcon = (props) => (
    <Icon viewBox='0 0 200 200' {...props}>
      <path
        fill='red'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  )
const SectionTitle=(props)=>{
    const {title,isOpen}= props
    return(
        <HStack justify="space-between" bg="yellow.300" p={2}>

        <Heading as='h2' size='lg'>{title}</Heading>
        {isOpen ? <ViewIcon/> : <ChevronUpIcon/>}
        </HStack>
    )
}
 const SubHeading = (props)=>{
    const {title}= props

     return(
        <Heading as='h3' size='md' textAlign="center" p={2}>{title}</Heading>
     )
 }
const EventSection = ()=>{
    return(
        <Box>
        <SubHeading title="Events" />
            <List spacing={3}>
                <ListItem>
                    Kick off Meeting 09-12
                </ListItem>
                <ListItem>
                    Issue GO1 dwg 09-14
                </ListItem>
            </List>
        </Box>
    )
}

const MessagesSection = ()=>{
    return (
        <Box >
            <SubHeading title="Messages" />
            <List spacing={3}>
                <ListItem>
                  New Messages
                </ListItem>
                <ListItem >
                    <HStack>New Messages <CircleIcon/>
                    </HStack>
                </ListItem>
            </List>
        </Box>
    )
}

const ProjectSection= ()=>{
    return(
            <List spacing={3} >
                <ListItem bg="white">
                    <SectionTitle title="XYZ"  isOpen={true}/>
                    <Box bg="gray.100"  p="5">
                        <MessagesSection/>
                        <EventSection/>
                    </Box>
                </ListItem>

                <ListItem p="5">
                <SectionTitle title="AAB"  isOpen={false}/>
                    
                </ListItem>
            </List>
    )
}

export const SideMenu= ()=>{
    return(
    <VStack h="100vh" borderRight='1px' >
        <ProjectSection isDisplayed={true}/>    
    </VStack>

)}