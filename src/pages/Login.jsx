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
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let register_data = JSON.parse(localStorage.getItem("registerData")) || [];

  const handleLogin = (e) => {
    e.preventDefault();

    let exists =
      register_data.length &&
      JSON.parse(localStorage.getItem("registerData")).some(
        (data) => data.email == email && data.password === password
      );

    if (exists) {
      alert("login Successfull");
      let user = JSON.parse(localStorage.getItem("registerData")).filter(
        (ele) => {
          if (ele.email == email) {
            return ele;
          }
        }
      );

      localStorage.setItem("user", JSON.stringify(user));
      navigate("/welcome");
    } else {
      alert("login with correct credentials");
    }
  };

  return (
    <>
      <Flex justifyContent={"center"}>
        <VStack>
          <Heading>Login</Heading>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FormLabel>Set Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FormLabel></FormLabel>
            <Input type="submit" value="Login" onClick={handleLogin} />
            <FormHelperText>
              Don't have an account?{" "}
              <Link as={ReachLink} to="/">
                Register
              </Link>
            </FormHelperText>
          </FormControl>
        </VStack>
      </Flex>
    </>
  );
};

export default Login;
