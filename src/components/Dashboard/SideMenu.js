import { VStack, Box ,Heading,List,ListItem,ListIcon} from '@chakra-ui/react'
import { MdCheckCircle,MdSettings} from '@chakra-ui/icons'

const SectionTitle=(props)=>{
    const {title}= props
    return(
        <Heading as='h2' size='lg'>{title}</Heading>
    )
}
const EventSection = ()=>{
    return(
        <Box>
        <SectionTitle title="Events" />
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

const ProjectSection= ()=>{
    return(
        <Box bg="blue.200">
            <SectionTitle title="Projects" />

            <List spacing={3}>
                <ListItem bg="white">
                   XYZ Rear Product
                </ListItem>
                <ListItem>
                    AAB Front Product
                </ListItem>
            </List>
        </Box>
    )
}

const MessagesSection = ()=>{
    return (
        <Box>
            <SectionTitle title="Messages" />
            <List spacing={3}>
                <ListItem>
                   Querry for XYZ
                </ListItem>
                <ListItem>
                    New Request
                </ListItem>
            </List>
        </Box>
    )
}


export const SideMenu= ()=>{
    return(
    <VStack h="100vh" bg="blue.400">
        <ProjectSection isDisplayed={true}/>
        <MessagesSection/>
        <EventSection/>
    </VStack>

)}