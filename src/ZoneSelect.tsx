import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { zonesState, zoneState } from "./appState";

export function ZoneSelect() {
  const zones = useRecoilValue(zonesState);
  const [zone, setZone] = useRecoilState(zoneState);
  const resetZone = useResetRecoilState(zoneState);

  useEffect(() => {
    resetZone();
  }, [resetZone, zones]);

  useEffect(() => {
    // do sth with zone
    console.log("zone", zone.id);
  }, [zone]);

  return (
    <label htmlFor="zoneId">
      Zone:
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
            {zone.id}
          </option>
        ))}
      </select>
    </label>
  );
}
