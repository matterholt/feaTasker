import {useEffect, useState}from 'react'
import { VStack,HStack, Box ,Heading,List,ListItem,Button,Text} from '@chakra-ui/react'
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
    const{ViewProjectData,projectsList}=props
    const [selectedProject, setSelectedProject]=useState("allClosed")


    function handleProjectView (project){
        setSelectedProject(project.projectCode)
        ViewProjectData(project)
    }

    return(
            <List spacing={3} >
                {projectsList.map(project=>{
                return(
                <ListItem bg="white" my="5" key={project.projectId}>
                    <Button onClick={()=>{handleProjectView(project)}}>
                    <SectionTitle title={project.projectCode}  isOpen={selectedProject}/>
                    </Button>
                </ListItem>)
                })

            }
                
            </List>
    )
}

export const SideMenu= (props)=>{
    const {ViewProjectData,projectsList,username="none"}=props
    return(
    <VStack h="100vh" borderRight='1px' >
        <Box><Heading>{username}</Heading></Box>
        <ProjectSection ViewProjectData={ViewProjectData} projectsList={projectsList}/>    
        <Box bg="red.100" border="1px" borderRadius={10} p="1">LOGOUT</Box>
    </VStack>

)}