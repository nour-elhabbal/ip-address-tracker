import { Flex, Text } from "@chakra-ui/react";

interface InfoBlockProps {
  blockName: string;
  data: string;
  error?: boolean;
}

const InfoBlock = ({ blockName, data, error }: InfoBlockProps) => (
  <Flex
    direction="column"
    align={{ base: "center", smallScreen: "unset" }}
    textAlign="center"
  >
    <Text textColor="grey.dark" fontSize="11px" fontWeight="700">
      {blockName}
    </Text>
    <Text fontSize={{ base: "15px ", pc: "20px" }} fontWeight="700">
      {error ? "Unknown" : data}
    </Text>
  </Flex>
);

export default InfoBlock;
