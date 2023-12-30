import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {

  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response?.type, response?.message);
    }
    return () => {
      if (response?.type === 'success') {
        formik.resetForm(formik?.initialValues);
      }
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName:'',
      email:'',
      type:'',
      comment:''
    },
    onSubmit: (values) => {
      submit('', values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      email: Yup.string().email().required(),
      comment: Yup.string().required(),
    }),
  });

  const handleSubmit = e => {
    e.preventDefault();
    formik.handleSubmit(e);
  }

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.values.firstName===''}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" value={formik.getFieldProps('firstName')?.value} onChange={formik.getFieldProps('firstName')?.onChange}/>
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.values.email===''}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={formik.getFieldProps('email')?.value}
                  onChange={formik.getFieldProps('email')?.onChange}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" value={formik.getFieldProps('type')?.value} onChange={formik.getFieldProps('type')?.onChange}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.values.comment===''}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  height={250}
                  value={formik.getFieldProps('comment')?.value}
                  onChange={formik.getFieldProps('comment')?.onChange}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button isLoading={isLoading} type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
