import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to Our Donation Platform
      </Heading>
      <Text fontSize="xl" mb={6}>
        Connecting donors with causes that matter.
      </Text>
      <Flex justifyContent="center">
        <Button as={RouterLink} to="/about" colorScheme="teal" size="lg" mx={2}>
          Learn More
        </Button>
        <Button as={RouterLink} to="/contact" colorScheme="teal" size="lg" mx={2}>
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;