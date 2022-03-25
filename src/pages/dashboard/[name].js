import {useEffect, useState}from'react'
import {Grid,Box,Heading,Text,Button,GridItem,HStack
  } from "@chakra-ui/react";

// custom componets
import {CmRequest_listView,NoFoundRequests}from "../../components/CmRequests"
import {HeaderDash,SideMenu} from "../../components/Dashboard"


/*
- from the data base have the current project that user is working on
- add switcht when no project are assigned
*/

 function UserDash (props){
   const {name,activeAssignedProjects,currentActiveProject}= props
    const [cmRequest, updateRequest] = useState([]);
    const [projectsList, setProjectsList] = useState(()=>activeAssignedProjects)
    const [activeViewProject, setActiveViewProject] = useState(()=>currentActiveProject)

    function ViewProjectData (project){
      const projectData = [
        {
          id: 1,
          modelName: 'V00R00',
          description: 'Make it better',
          modelBase: 'new model',
          status: 'completed',
          priority: 'low',
        },
        {
          id: 2,
          modelName: 'V01R00',
          description: 'improve the quaity and make it lower weight Make it better',
          modelBase: 'V00R00',
          status: 'inProgress',
          priority: 'medium',
        },
        {
          id: 3,
          modelName: 'V02R00',
          description: 'Make it better by adding a bead, increase thickness',
          modelBase: 'V01R00',
          status: 'pending',
          priority: 'high',
        },
        {
          id: 4,
          modelName: 'V03R00',
          description: 'Make it better by adding a bead, increase thickness',
          modelBase: 'V02R00',
          status: 'pending',
          priority: 'high',
        },
        {
          id: 5,
          modelName: 'V04R00',
          description: 'Make it better by adding a bead, increase thickness',
          modelBase: 'V02R00',
          status: 'pending',
          priority: 'low',
        },
      ]

      console.log(" when the selected project changes updates the a function from the parent",project)
      setActiveViewProject(project)
      
      if(project.projectCode === "AAB"){
        updateRequest(projectData)
      }else{
        setActiveViewProject(project)
        updateRequest("")
      }
    }


    return(
        <Grid  
        templateRows='150px, 1fr'
        templateColumns='175px 1fr'
        >

        <GridItem colSpan={2}>
         <HeaderDash name={name}/>
        </GridItem>

        <GridItem >
           <SideMenu projectsList={projectsList} ViewProjectData={ViewProjectData}/>
        </GridItem>

          <GridItem  overflowY="scroll" bg="gray.100">  

          {
          activeViewProject ?
            <Heading m="2" w="full" textAlign="center">{activeViewProject.projectCode} {activeViewProject.partType}</Heading>
            : null
          
          }

          {cmRequest ? <>
            <CmRequest_listView cmRequest={cmRequest}/>
          </> :
          <NoFoundRequests />

          }
          
          </GridItem>

        </Grid>

    )
}


export async function getServerSideProps() {
  const name= "James"
 const activeAssignedProjects =[
   {projectId:100,projectCode:"XYZ",partType:"Front Side"},
   {projectId:110,projectCode:"1x2y",partType:"Sus Side"},
   {projectId:120,projectCode:"AAB",partType:"Rear Side"},

 ]
 const currentActiveProject = "XYZ"




    if (!name) {
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        }
      }
    return{
        props:{name,activeAssignedProjects,currentActiveProject}
    }
}

export default UserDash