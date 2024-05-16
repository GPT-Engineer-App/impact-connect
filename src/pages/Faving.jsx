import { useState } from "react";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button } from "@chakra-ui/react";

const Faving = () => {
  const [favingScore, setFavingScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle faving score submission
    console.log("Faving Score:", favingScore);
  };

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">Faving Evaluation</Heading>
      <Text fontSize="lg" mb={6} textAlign="center">
        Use the slider below to rate the file.
      </Text>
      <VStack spacing={4} maxW="md" mx="auto" as="form" onSubmit={handleSubmit}>
        <FormControl id="faving-score">
          <FormLabel>Faving Score</FormLabel>
          <Slider defaultValue={0} min={0} max={100} step={1} onChange={(val) => setFavingScore(val)}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </FormControl>
        <Button colorScheme="teal" size="lg" type="submit">Submit</Button>
      </VStack>
    </Box>
  );
};

export default Faving;