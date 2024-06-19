import { useContext, useEffect, useState } from "react";
import { Input, InputRightAddon, InputGroup } from "@chakra-ui/react";

import { ipInfoContext } from "../contexts/ipInfoContext";
import { getIpInfo } from "../apis";
import arrowIcon from "../assets/icon-arrow.svg";

const SearchBar = () => {
  const { info, setInfo } = useContext(ipInfoContext);
  const [term, setTerm] = useState("");
  const [error, setError] = useState(false);

  const ipRegex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  useEffect(() => {
    setTerm(info.ip);
  }, [info]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(false);

    if (!(term === info.ip) && ipRegex.test(term)) {
      setInfo(await getIpInfo(term as string));
    }

    if (!ipRegex.test(term)) setError(true);
  };

  const handleChange = (e: any) => {
    setTerm(e.target.value);
  };

  return (
    <InputGroup
      as="form"
      w="70%"
      minW="250px"
      maxW={"550px"}
      onSubmit={handleSubmit}
    >
      <Input
        fontSize="medium"
        placeholder="Search for any IP address"
        borderRadius="15px 0 0 15px"
        _placeholder={{ font: "15px !important" }}
        onChange={handleChange}
        value={term}
        isInvalid={error}
        errorBorderColor="crimson"
        textColor={`${error ? "red" : ""}`}
        border="none"
        bgColor="white"
        h="55px"
      />

      <InputRightAddon
        bg="black"
        borderRadius="0 15px 15px 0"
        cursor="pointer"
        onClick={handleSubmit}
        border="none"
        h="55px"
        w="55px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img src={arrowIcon} alt="" />
      </InputRightAddon>
    </InputGroup>
  );
};

export default SearchBar;
