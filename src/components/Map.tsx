import { useContext, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { Box } from "@chakra-ui/react";
import { Icon, type Map as LeafletMap } from "leaflet";

import "leaflet/dist/leaflet.css";

import { marker } from "../assets";

import { ipInfoContext } from "../contexts/ipInfoContext";

const Map = () => {
  const { info } = useContext(ipInfoContext);
  const mapRef = useRef<LeafletMap | null>(null);

  const markerIcon = new Icon({
    iconUrl: marker,
    iconSize: [34, 40],
  });

  useEffect(() => {
    if (mapRef)
      mapRef.current?.flyTo([info.latitude, info.longitude], 16, {
        animate: true,
        duration: 1.5,
      });
  }, [info]);

  return (
    <Box width="100%" height={{ base: "70vh", smallScreen: "65vh" }}>
      <Box
        as={MapContainer}
        ref={mapRef}
        center={[info.latitude, info.longitude]}
        zoom={14}
        scrollWheelZoom
        zoomControl={false}
        h="full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[info.latitude, info.longitude]} icon={markerIcon} />
      </Box>
    </Box>
  );
};

export default Map;
