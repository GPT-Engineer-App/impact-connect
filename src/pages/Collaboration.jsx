import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { FaUsers, FaHandshake, FaVoteYea, FaTasks } from "react-icons/fa";

const Collaboration = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>Collaboration Tools</Heading>
      <Text fontSize="lg" mb={6}>
        Improve team collaboration with our comprehensive tools.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <FaUsers size="24px" />
          <Text ml={2}>Team Dynamics: Role assignment and team structure visualization.</Text>
        </Flex>
        <Flex align="center">
          <FaHandshake size="24px" />
          <Text ml={2}>Conflict Resolution: Mediation and problem-solving tools.</Text>
        </Flex>
        <Flex align="center">
          <FaVoteYea size="24px" />
          <Text ml={2}>Decision-Making: Voting and consensus-building features.</Text>
        </Flex>
        <Flex align="center">
          <FaTasks size="24px" />
          <Text ml={2}>Task Management: Task assignment, progress tracking, and feedback loops.</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default Collaboration;