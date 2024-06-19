import { useContext } from "react";
import { ipInfoContext } from "../contexts/ipInfoContext";
import { Card, CardBody, Flex, Divider } from "@chakra-ui/react";
import InfoBlock from "./InfoBlock";
import { getUTCOffset } from "../utils/helpers";

const InfoCard = () => {
  const { info } = useContext(ipInfoContext);

  return (
    <Card
      width={{ base: "90%", smallScreen: "77%" }}
      borderRadius="15px"
      position="absolute"
      top="100%"
      zIndex="450"
      transform="translate(0,-50%)"
    >
      <CardBody>
        <Flex
          justify="space-around"
          align="center"
          gap={{ base: "10px", smallScreen: "20px" }}
          direction={{ base: "column", smallScreen: "row" }}
          h={{ base: "fit-content", smallScreen: "100px" }}
        >
          <InfoBlock blockName="IP ADDRESS" data={info.ip} />

          <Divider orientation="vertical" borderColor="grey.dark" />

          <InfoBlock
            blockName="LOCATION"
            data={`${info?.city}, ${info.country_name}`}
            error={info.error}
          />

          <Divider orientation="vertical" borderColor="grey.dark" />

          <InfoBlock
            blockName="TIME ZONE"
            data={
              info.utc_offset === "Loading..."
                ? "Loading..."
                : getUTCOffset(info.utc_offset)
            }
            error={info.error}
          />

          <Divider orientation="vertical" borderColor="grey.dark" />

          <InfoBlock blockName="ISP" data={info.org} error={info.error} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default InfoCard;
