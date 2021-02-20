import React from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import { regionState, zoneState } from "./appState";
import { RegionSelect } from "./RegionSelect";
import { ZoneSelect } from "./ZoneSelect";

function App() {
  const region = useRecoilValue(regionState);
  const zone = useRecoilValue(zoneState);
  return (
    <div className="App">
      <p>region:{region.name}</p>
      <p>zone:{zone.name}</p>
      <RegionSelect />
      <ZoneSelect />
    </div>
  );
}

export default App;
