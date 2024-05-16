import { Box, Heading, Text, VStack, Flex, Button } from "@chakra-ui/react";
import { FaVideo, FaSmile, FaEnvelope, FaChartBar } from "react-icons/fa";

const Communication = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>Communication Tools</Heading>
      <Text fontSize="lg" mb={6}>
        Enhance your project communication with our integrated tools.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <FaVideo size="24px" />
          <Text ml={2}>Verbal Communication: Integration with video conferencing tools.</Text>
        </Flex>
        <Flex align="center">
          <FaSmile size="24px" />
          <Text ml={2}>Non-verbal Communication: Support for emojis and reactions in chat.</Text>
        </Flex>
        <Flex align="center">
          <FaEnvelope size="24px" />
          <Text ml={2}>Written Communication: In-app messaging and email notifications.</Text>
        </Flex>
        <Flex align="center">
          <FaChartBar size="24px" />
          <Text ml={2}>Visual Communication: Support for charts and graphs in project updates.</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default Communication;