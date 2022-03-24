
 const SubHeading = (props)=>{
    const {title}= props

     return(
        <Heading as='h3' size='md' textAlign="center" borderBottom="2px"  m={2}>{title}</Heading>
     )
 }

 const MenuText = (props)=>( <Text>{props.children}</Text>)

const EventSection = ()=>{
    return(
        <Box>
        <SubHeading title="Events" />
            <List spacing={3}>

                <ListItem>
                   
                        <MenuText>Kick off Meeting </MenuText>
                        <Text size="xs" textAlign="right" fontWeight="thin">09-12</Text >
               
                </ListItem>

                <ListItem>
                    <MenuText>Issue GO1 dwg</MenuText>
                    <Text size="xs" textAlign="right" fontWeight="thin">09-14</Text >

                     
                </ListItem>

                <ListItem>
                    <Text>full schedule -></Text>
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
            <ListItem >
                    <HStack><Text>Update layout</Text> <CircleIcon/>
                    </HStack>
                </ListItem>
                <ListItem>
                    <Text>
                  New Messages
                  </Text>
                </ListItem>
                <ListItem>
                    <Text>
                  Message board ->
                  </Text>
                </ListItem>
            </List>
        </Box>
    )
}