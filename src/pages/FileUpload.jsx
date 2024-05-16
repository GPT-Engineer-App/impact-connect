import { useState } from "react";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button, Select } from "@chakra-ui/react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle file upload and categorization
    console.log("File:", file);
    console.log("Category:", category);
  };

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">Upload and Categorize Files</Heading>
      <Text fontSize="lg" mb={6} textAlign="center">
        Upload your files and categorize them into shared containers.
      </Text>
      <VStack spacing={4} maxW="md" mx="auto" as="form" onSubmit={handleSubmit}>
        <FormControl id="file">
          <FormLabel>File</FormLabel>
          <Input type="file" onChange={handleFileChange} />
        </FormControl>
        <FormControl id="category">
          <FormLabel>Category</FormLabel>
          <Select placeholder="Select category" onChange={handleCategoryChange}>
            <option value="documents">Documents</option>
            <option value="images">Images</option>
            <option value="videos">Videos</option>
            <option value="others">Others</option>
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" type="submit">Upload</Button>
      </VStack>
    </Box>
  );
};

export default FileUpload;