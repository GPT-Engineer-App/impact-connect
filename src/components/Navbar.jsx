import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            Home
          </Link>
        </Box>
        <Flex alignItems={"center"}>
          <Link as={RouterLink} to="/about" color="white" mx={2}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" color="white" mx={2}>
            Contact
          </Link>
          <Link as={RouterLink} to="/communication" color="white" mx={2}>
            Communication
          </Link>
          <Link as={RouterLink} to="/collaboration" color="white" mx={2}>
            Collaboration
          </Link>
          <Link as={RouterLink} to="/user-profile" color="white" mx={2}>
            User Profile
          </Link>
          <Link as={RouterLink} to="/file-upload" color="white" mx={2}>
            File Upload
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;