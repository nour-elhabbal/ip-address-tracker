import { useContext, useEffect } from "react";
import Header from "./components/Header.tsx";
import { ipInfoContext } from "./contexts/ipInfoContext.tsx";
import { getIpInfo } from "./apis/index.ts";
import Map from "./components/Map.tsx";

export const App = () => {
  const { setInfo } = useContext(ipInfoContext);
  const onIpRequest = async () => setInfo(await getIpInfo(""));

  useEffect(() => {
    onIpRequest();
  }, []);

  return (
    <>
      <Header />
      <Map />
    </>
  );
};

export default App;
