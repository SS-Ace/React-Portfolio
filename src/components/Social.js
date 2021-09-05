import { IconButton } from '@chakra-ui/button';
import { HStack } from '@chakra-ui/layout';
import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

function Social() {
    return (
        <HStack spacing="24">
            <IconButton as={FaGithub} boxSize="50" onClick={() => window.open("https://github.com/SS-Ace")} />
            <IconButton as={FaLinkedin} boxSize="50" onClick={() => window.open("https://www.linkedin.com/in/ss-ace")} />
        </HStack>
    );
}

export default Social