import {useEffect, useState}from'react'
import {Grid,Box,Heading,Text,Button,GridItem,HStack
  } from "@chakra-ui/react";

// custom componets
import {CmRequest_listView,NoFoundRequests}from "../../components/CmRequests"
import {HeaderDash,SideMenu} from "../../components/Dashboard"





// CM model request controler

const ProjectRequestDataControler = (props)=>{
  const {status,cmRequest} = props

  switch(status){
    case "idle":
      return <p>Select your project</p>
    case "loading":
      return <p>Compiling the Project Request</p>;
    case "rejected":
      return<p>An Error, try again later, or something</p>
    case "resolved":
      return <CmRequest_listView cmRequest={cmRequest}/>


  default:
    throw new Error(`Type of Status error ${status}`)
  }

}

 function UserDash (props){
   const {username,data}= props
   const {activeAssignedProjects,currentActiveProject}= data


   const [statusRequest, setStatusRequest]=useState('idle');
    const [cmRequest, updateRequest] = useState([]);
    const [projectsList, setProjectsList] = useState(()=>activeAssignedProjects)
    const [activeViewProject, setActiveViewProject] = useState(()=>currentActiveProject)


    function ViewProjectData (project){
      setStatusRequest("loading")
      fetch(`/project/${project.projectId}`)
          .then((res)=>res.json())
          .then((data)=>{
            setStatusRequest("resolved")
            updateRequest(data)
          })
          .catch((e)=>setStatusRequest("rejected"))
       setActiveViewProject(project)
    }

 

    return(
      <Grid  
      templateRows='150px, 1fr'
      templateColumns='175px 1fr'
      >

        <GridItem colSpan={2}>
         <HeaderDash username={username}/>
        </GridItem>

        <GridItem >
           <SideMenu username={username} projectsList={projectsList} ViewProjectData={ViewProjectData}/>
        </GridItem>

          <GridItem  bg="gray.100">  

          {
          activeViewProject ?
            <Heading m="2" w="full" textAlign="center">{activeViewProject.projectCode} {activeViewProject.partType}</Heading>
            : null
          
          }
            <ProjectRequestDataControler status={statusRequest} cmRequest={cmRequest}/>
          </GridItem>

        </Grid>

    )
}


export async function getServerSideProps() {
  // when the user has been authorized to access account,
  //  


  const res = await fetch('http://assignProjects')
  const data = await res.json()
  const username="james"


    return{
        props:{username,data}
    }
}

export default UserDash