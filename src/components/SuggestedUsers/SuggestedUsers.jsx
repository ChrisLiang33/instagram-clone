import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>
      <SuggestedUser
        name="dan"
        follower={1399}
        avatar="http://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="ryan florence"
        follower={1399}
        avatar="http://bit.ly/ryan-florene"
      />
      <SuggestedUser
        name="christian nwamba"
        follower={222}
        avatar="http://bit.ly/code-beast"
      />
      <Box fontSize={12} color={"gray.500"} mt={5}>
        @2023 Build by{" "}
        <Link
          href="https://www.youtube.ccom"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          batman here
        </Link>
      </Box>
    </VStack>
  );
};
export default SuggestedUsers;
