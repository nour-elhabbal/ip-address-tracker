import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import type { IpInfo } from "../types";

const defaultStateValues: IpInfo = {
  ip: "Loading...",
  city: "Loading..",
  country_name: "",
  latitude: 0,
  longitude: 0,
  org: "Loading...",
  utc_offset: "Loading...",
};

interface ContextProps {
  info: IpInfo;
  setInfo: Dispatch<SetStateAction<IpInfo>>;
}

export const ipInfoContext = createContext<ContextProps>({
  info: defaultStateValues,
  setInfo: () => {},
});

const IpInfoContextProvider = ({ children }: { children: ReactNode }) => {
  const [info, setInfo] = useState<IpInfo>(defaultStateValues);

  return (
    <ipInfoContext.Provider value={{ info, setInfo }}>
      {children}
    </ipInfoContext.Provider>
  );
};

export default IpInfoContextProvider;
