import { useState } from "react";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, Flex } from "@chakra-ui/react";
import { Line } from 'react-chartjs-2';

const Faving = () => {
  const [favingScore, setFavingScore] = useState(0);
  const [scores, setScores] = useState([0, 20, 40, 60, 80, 100]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle faving score submission
    console.log("Faving Score:", favingScore);
    setScores([...scores, favingScore]);
  };

  const data = {
    labels: scores.map((_, index) => `Score ${index + 1}`),
    datasets: [
      {
        label: 'Faving Score',
        data: scores,
        fill: false,
        backgroundColor: 'teal',
        borderColor: 'teal',
      },
    ],
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
      <Box mt={10}>
        <Heading size="md" textAlign="center">Faving Score Trend</Heading>
        <Flex justifyContent="center">
          <Box width="80%">
            <Line data={data} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Faving;