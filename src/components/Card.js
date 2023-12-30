import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <VStack bg={'white'} color={'black'} borderRadius={'5px'} alignItems={'flex-start'}>
        <Image src={imageSrc} borderRadius={'5px'}/>
          <Heading as='h4' size={'x1'} color={'black'} alignSelf={'flex-start'} ml={2}>{title}</Heading>
          <Text color={'grey'} m={2}>{description}</Text>
          <HStack ml={2}>
              <p>See more</p>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
      </VStack>
  );
};

export default Card;
