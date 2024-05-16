import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const handleSave = () => {
    // Logic to save user profile data
    console.log("User Profile Saved", { name, email, bio });
  };

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">User Profile</Heading>
      <VStack spacing={4} maxW="md" mx="auto">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="bio">
          <FormLabel>Bio</FormLabel>
          <Input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSave}>Save</Button>
      </VStack>
    </Box>
  );
};

export default UserProfile;