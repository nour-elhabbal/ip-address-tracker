import type { IpInfo } from "../types";

export const getIpInfo = async (ip: string) =>
  await fetch(`https://ipapi.co/${ip}/json/`).then(async (res) => {
    let returnedResponse = (await res.json()) as IpInfo;

    // Error handler
    if (Object.keys(returnedResponse).some((ipKey) => ipKey === "error"))
      return {
        error: true,
        ip: ip,
        city: "....",
        country_name: "...",
        latitude: 0,
        longitude: 0,
        org: "....",
        utc_offset: "....",
      };

    return returnedResponse;
  });
