import React, { useState, useEffect } from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Container centerContent>
      <VStack spacing={4} justifyContent="center" alignItems="center" height="100vh">
        <Heading as="h1" size="4xl">
          Timer
        </Heading>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl">
            {time.toLocaleTimeString()}
          </Heading>
          <Text mt={4}>{time.toDateString()}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
