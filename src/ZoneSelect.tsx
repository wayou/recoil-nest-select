import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { zonesState, zoneState } from "./appState";

export function ZoneSelect() {
  const zones = useRecoilValue(zonesState);
  const [zone, setZone] = useRecoilState(zoneState);

  console.log("zone:", zone.name);

  return (
    <label htmlFor="zoneId">
      可用区：
      <select
        name="zoneId"
        id="zoneId"
        value={zone.id}
        onChange={(event) => {
          const zoneId = event.target.value;
          const zone = zones.find((zone) => zone.id === zoneId);
          setZone(zone!);
        }}
      >
        {zones.map((zone) => (
          <option key={zone.id} value={zone.id}>
            {zone.name}
          </option>
        ))}
      </select>
    </label>
  );
}
