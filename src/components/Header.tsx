import { Flex, Heading } from "@chakra-ui/react";

import SearchBar from "./SearchBar";
import InfoCard from "./InfoCard";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      direction="column"
      bgImage="url('src/assets/pattern-bg-desktop.png')"
      backgroundRepeat="no-repeat"
      minH={{ base: "300px", smallScreen: "275px" }}
      height={{ base: "40vh", smallScreen: "35vh" }}
      bgSize="cover"
      position="relative"
    >
      <Heading textColor="white" fontWeight="500" size="xl" m="20px">
        IP Address Tracker
      </Heading>
      <SearchBar />
      <InfoCard />
    </Flex>
  );
};

export default Header;
