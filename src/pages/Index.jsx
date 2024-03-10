import React from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Stack, Text, Divider, Image, Center } from "@chakra-ui/react";
import { FaGoogle, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="400px" margin="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Center>
        <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3MTAwNjY1NzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" width="150px" mb={8} />
      </Center>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Login
      </Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Enter your email" />
      </FormControl>
      <FormControl id="password" mb={6}>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
      </FormControl>
      <Button colorScheme="blue" size="lg" width="full" mb={6}>
        Login with Email
      </Button>
      <Text textAlign="center" mb={4}>
        or continue with
      </Text>
      <Stack direction="row" spacing={4} mb={8}>
        <Button leftIcon={<FaGoogle />} colorScheme="red" size="lg" width="50%">
          Google
        </Button>
        <Button leftIcon={<FaApple />} colorScheme="black" size="lg" width="50%">
          Apple
        </Button>
      </Stack>
      <Divider mb={4} />
      <Text fontSize="sm" textAlign="center">
        Don't have an account?{" "}
        <Button variant="link" colorScheme="blue" size="sm">
          Sign up
        </Button>
      </Text>
    </Box>
  );
};

export default Index;
