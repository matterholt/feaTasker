import {useEffect, useState}from 'react'
import { VStack,HStack, Box ,Heading,List,ListItem,Button} from '@chakra-ui/react'
import { ViewIcon,ChevronUpIcon} from '@chakra-ui/icons'

const SectionTitle=(props)=>{
    const {title,isOpen}= props

    const viewProject = title === isOpen
    return(
        <HStack justify="space-between" bg={viewProject ?"yellow.300" : "white"} p={2} >
        <Heading as='h2' size='lg'>{title}</Heading>
        {viewProject ? <ViewIcon/> : <ChevronUpIcon/>}
        </HStack>
    )
}



const ProjectSection= (props)=>{
    const{ViewProjectData}=props
    const [selectedProject, setSelectedProject]=useState("allClosed")

    useEffect(()=>{
        ViewProjectData(selectedProject)
    },[selectedProject])

    return(
            <List spacing={3} >

                <ListItem bg="white" my="5">
                    <Button onClick={()=>{setSelectedProject("XYZ")}}>
                    <SectionTitle title="XYZ"  isOpen={selectedProject}/>
                    </Button>
                </ListItem>
        
                <ListItem >
                    <Button onClick={()=>{setSelectedProject("AAB")}}>
                    <SectionTitle title="AAB"  isOpen={selectedProject}/>
                    </Button>
                </ListItem>

                <ListItem >
                    <Button onClick={()=>{setSelectedProject("Archive")}}>
                    <SectionTitle title="Archive"  isOpen={selectedProject}/>
                    </Button>
                </ListItem>
                
            </List>
    )
}

export const SideMenu= (props)=>{
    const {ViewProjectData}=props
    return(
    <VStack h="100vh" borderRight='1px' >
        <ProjectSection ViewProjectData={ViewProjectData}/>    
    </VStack>

)}