import React from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { regionsState, regionState, zoneState } from "./appState";

export function RegionSelect() {
  const regions = useRecoilValue(regionsState);
  const [region, setRegion] = useRecoilState(regionState);
  const resetZone = useResetRecoilState(zoneState);
  return (
    <label htmlFor="regionId">
      地域：
      <select
        name="regionId"
        id="regionId"
        value={region.id}
        onChange={(event) => {
          const regionId = event.target.value;
          const region = regions.find((region) => region.id === regionId);
          resetZone();
          setRegion(region!);
        }}
      >
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        ))}
      </select>
    </label>
  );
}
