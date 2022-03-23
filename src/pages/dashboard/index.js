import {useState}from'react'
import {Grid,Box,Heading,Text,Button,GridItem,HStack
  } from "@chakra-ui/react";

// custom componets
import {CmRequest_listView}from "../../components/CmRequests"
import {HeaderDash,SideMenu} from "../../components/Dashboard"

 function Dashboard (props){
   const {name}= props
    const [cmRequest, updateRequest] = useState( ()=> props.projectData);

    return(
        <Grid  
        templateRows='150px, 1fr'
        templateColumns='min-content 1fr'
        >

        <GridItem colSpan={2}>
         <HeaderDash name={name}/>
        </GridItem>
        <GridItem >
           <SideMenu/>
        </GridItem>

          <GridItem>  

            <CmRequest_listView cmRequest={cmRequest}/>
   
          </GridItem>

        </Grid>

    )
}

export async function getServerSideProps() {
    const name= "James"
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
    if (!name) {
        return {
          redirect: {
            destination: '/Signup',
            permanent: false,
          },
        }
      }
    return{
        props:{name,projectData}
    }
}

export default Dashboard