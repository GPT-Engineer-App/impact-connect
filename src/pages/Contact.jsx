import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <Heading mb={4} textAlign="center">Contact Us</Heading>
    <Text fontSize="lg" mb={6} textAlign="center">
      We'd love to hear from you! Please fill out the form below to get in touch.
    </Text>
    <VStack spacing={4} maxW="md" mx="auto">
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea />
      </FormControl>
      <Button colorScheme="teal" size="lg">Submit</Button>
    </VStack>
  </Box>
);

export default Contact;