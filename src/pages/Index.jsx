import { Box, Heading, Text, Button, Flex, Input, Avatar, Menu, MenuButton, MenuList, MenuItem, IconButton, VStack, HStack, Divider, Badge } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaSearch, FaBell, FaCog, FaSignOutAlt, FaChevronDown } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" bg="teal.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <Heading as="h1" size="lg">Faving</Heading>
          <Input placeholder="Search projects..." variant="filled" bg="white" color="black" maxW="300px" />
          <IconButton icon={<FaSearch />} aria-label="Search" />
        </HStack>
        <HStack spacing={4}>
          <IconButton icon={<FaBell />} aria-label="Notifications" />
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
              <Avatar size="sm" name="User Name" />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<FaCog />}>Settings</MenuItem>
              <MenuItem icon={<FaSignOutAlt />}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box textAlign="center" py={10} px={6} bg="gray.100">
        <Heading as="h2" size="2xl" mb={4}>
          Welcome to Faving
        </Heading>
        <Text fontSize="xl" mb={6}>
          Discover and contribute to projects that matter.
        </Text>
        <Flex justifyContent="center">
          <Button as={RouterLink} to="/projects" colorScheme="teal" size="lg" mx={2}>
            Discover Projects
          </Button>
          <Button as={RouterLink} to="/start-project" colorScheme="teal" size="lg" mx={2}>
            Start a Project
          </Button>
        </Flex>
        <HStack spacing={8} mt={8} justifyContent="center">
          <VStack>
            <Heading as="h3" size="lg">120</Heading>
            <Text>Active Projects</Text>
          </VStack>
          <VStack>
            <Heading as="h3" size="lg">$500K</Heading>
            <Text>Total Contributions</Text>
          </VStack>
          <VStack>
            <Heading as="h3" size="lg">300</Heading>
            <Text>Community Members</Text>
          </VStack>
        </HStack>
      </Box>

      {/* Urgent Projects Section */}
      <Box py={10} px={6}>
        <Heading as="h3" size="xl" mb={6} textAlign="center">
          Urgent Projects Needing Attention
        </Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={4}>
          {/* Example Project Card */}
          <Box bg="white" p={4} m={2} borderRadius="md" boxShadow="md" maxW="sm">
            <Heading as="h4" size="md" mb={2}>Project Title</Heading>
            <Text mb={2}>Brief description of the project goals and needs.</Text>
            <Badge colorScheme="red" mb={2}>Urgent</Badge>
            <Text mb={2}>Faving Score: 85</Text>
            <Flex justifyContent="space-between">
              <Button size="sm" colorScheme="teal">View Details</Button>
              <Button size="sm" colorScheme="teal">Contribute</Button>
              <Button size="sm" colorScheme="teal">Share</Button>
            </Flex>
          </Box>
          {/* Add more project cards as needed */}
        </Flex>
      </Box>

      {/* Top Faved Projects Section */}
      <Box py={10} px={6} bg="gray.100">
        <Heading as="h3" size="xl" mb={6} textAlign="center">
          Top Faved Projects
        </Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={4}>
          {/* Example Project Card */}
          <Box bg="white" p={4} m={2} borderRadius="md" boxShadow="md" maxW="sm">
            <Heading as="h4" size="md" mb={2}>Project Title</Heading>
            <Text mb={2}>Brief description of the project goals and needs.</Text>
            <Text mb={2}>Faving Score: 95</Text>
            <Flex justifyContent="space-between">
              <Button size="sm" colorScheme="teal">View Details</Button>
              <Button size="sm" colorScheme="teal">Contribute</Button>
            </Flex>
          </Box>
          {/* Add more project cards as needed */}
        </Flex>
      </Box>

      {/* Categories Section */}
      <Box py={10} px={6}>
        <Heading as="h3" size="xl" mb={6} textAlign="center">
          Explore by Categories
        </Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={4}>
          {/* Example Category Card */}
          <Box bg="white" p={4} m={2} borderRadius="md" boxShadow="md" maxW="sm">
            <Heading as="h4" size="md" mb={2}>Education</Heading>
            <Button size="sm" colorScheme="teal">Explore</Button>
          </Box>
          {/* Add more category cards as needed */}
        </Flex>
      </Box>

      {/* Personalized Recommendations Section */}
      <Box py={10} px={6} bg="gray.100">
        <Heading as="h3" size="xl" mb={6} textAlign="center">
          Projects Recommended for You
        </Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={4}>
          {/* Example Project Card */}
          <Box bg="white" p={4} m={2} borderRadius="md" boxShadow="md" maxW="sm">
            <Heading as="h4" size="md" mb={2}>Project Title</Heading>
            <Text mb={2}>Brief description of the project goals and needs.</Text>
            <Text mb={2}>Faving Score: 90</Text>
            <Flex justifyContent="space-between">
              <Button size="sm" colorScheme="teal">View Details</Button>
              <Button size="sm" colorScheme="teal">Contribute</Button>
            </Flex>
          </Box>
          {/* Add more project cards as needed */}
        </Flex>
      </Box>

      {/* Community and Collaboration Section */}
      <Box py={10} px={6}>
        <Heading as="h3" size="xl" mb={6} textAlign="center">
          Join the Community
        </Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={4}>
          <Box bg="white" p={4} m={2} borderRadius="md" boxShadow="md" maxW="sm">
            <Heading as="h4" size="md" mb={2}>Join Discussions</Heading>
            <Button size="sm" colorScheme="teal">Join</Button>
          </Box>
          <Box bg="white" p={4} m={2} borderRadius="md" boxShadow="md" maxW="sm">
            <Heading as="h4" size="md" mb={2}>Find Collaborators</Heading>
            <Button size="sm" colorScheme="teal">Find</Button>
          </Box>
          <Box bg="white" p={4} m={2} borderRadius="md" boxShadow="md" maxW="sm">
            <Heading as="h4" size="md" mb={2}>Volunteer</Heading>
            <Button size="sm" colorScheme="teal">Volunteer</Button>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={4} textAlign="center">
        <HStack justifyContent="center" spacing={8}>
          <RouterLink to="/about">About Us</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/privacy">Privacy Policy</RouterLink>
          <RouterLink to="/terms">Terms of Service</RouterLink>
        </HStack>
        <Divider my={4} />
        <HStack justifyContent="center" spacing={4}>
          <Text>Follow us on:</Text>
          <RouterLink to="/facebook">Facebook</RouterLink>
          <RouterLink to="/twitter">Twitter</RouterLink>
          <RouterLink to="/instagram">Instagram</RouterLink>
        </HStack>
        <Divider my={4} />
        <Text>Subscribe to our newsletter:</Text>
        <Input placeholder="Enter your email" variant="filled" bg="white" color="black" maxW="300px" mx="auto" />
        <Button colorScheme="teal" mt={2}>Subscribe</Button>
      </Box>
    </Box>
  );
};

export default Index;