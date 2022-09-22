import React, { useState } from "react";
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Link,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import { Link as ReachLink } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let register_data = JSON.parse(localStorage.getItem("registerData")) || [];

  const handleRegister = (e) => {
    e.preventDefault();

    let registerInputs = {
      name: name,
      email: email,
      password: password,
    };

    let exists =
      register_data.length &&
      JSON.parse(localStorage.getItem("registerData")).some(
        (data) =>
          data.name === registerInputs.name &&
          data.email === registerInputs.email
      );

    if (!exists) {
      register_data.push(registerInputs);
      localStorage.setItem("registerData", JSON.stringify(register_data));
      alert("registered successfully");
      setName("");
      setEmail("");
      setPassword("");
    } else {
      alert("user already exists");
    }
  };

  return (
    <>
      <Flex justifyContent={"center"}>
        <VStack>
          <Heading>Register</Heading>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel>Set Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel></FormLabel>
            <Input type="submit" value="Register" onClick={handleRegister} />
            <FormHelperText>
              Already Registered?{" "}
              <Link as={ReachLink} to="/login">
                login
              </Link>
            </FormHelperText>
          </FormControl>
        </VStack>
      </Flex>
    </>
  );
};

export default Register;
