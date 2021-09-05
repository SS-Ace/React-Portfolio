import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Text } from '@chakra-ui/layout';


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Developed projects</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="gray.100" h="30vh" w="30vh" justify="flex-end" 
                    _hover={{ bg: "teal.400", }} onClick={() => window.open("https://www.linkedin.com/posts/ss-ace_uiux-designing-first-assignmentproject-activity-6795340262299222016-DH5T")} >
                        
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            UI/UX designing project(Shoe-Store)
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "red.400", }} onClick={() => window.open("https://github.com/SS-Ace/React-Calculator")}>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            React Calculator
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "purple.400", }} onClick={() => window.open("https://github.com/SS-Ace/React-Counter")}>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            React Counter
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    );
}

export default Profile