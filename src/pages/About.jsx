import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Us</Heading>
      <Text fontSize="lg" mb={6}>
        Our mission is to connect donors with vetted causes that need funding, ensuring transparency and impact from each donation.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Maximize the impact of each dollar donated</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Ensure transparency and accountability</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Foster long-term relationships between donors and causes</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;