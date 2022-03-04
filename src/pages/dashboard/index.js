import {useState}from'react'
import {VStack,Box,Heading,Text
  } from "@chakra-ui/react";

// custom componets
import {CmRequest_listView}from "../../components/CmRequests"






 function Dashboard (props){
    const [cmRequest, updateRequest] = useState( ()=> props.projectData);

    return(
        <VStack>
            <Box><Heading>{props.name}</Heading></Box>
            <Box><Text> Project Heading</Text></Box>
            <Box>
                <Text>CM Request</Text>
                <p>
                {JSON.stringify(cmRequest)}
                </p>
            </Box>
            <CmRequest_listView cmRequest={cmRequest}/>

        </VStack>

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