import React from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import { regionState, specState, zoneState } from "./appState";
import { RegionSelect } from "./RegionSelect";
import { SpecSelect } from "./SpecSelect";
import { ZoneSelect } from "./ZoneSelect";

function App() {
  const region = useRecoilValue(regionState);
  const zone = useRecoilValue(zoneState);
  const spec = useRecoilValue(specState);
  console.log("region", region.id);
  return (
    <div className="App">
      <p>region:{region.id}</p>
      <p>zone:{zone.id}</p>
      <p>mem:{spec.mem}G</p>
      <RegionSelect />
      <ZoneSelect />
      <SpecSelect />
    </div>
  );
}

export default App;
