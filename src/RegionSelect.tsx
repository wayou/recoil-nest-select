import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { regionsState, regionState } from "./appState";

export function RegionSelect() {
  const regions = useRecoilValue(regionsState);
  const [region, setRegion] = useRecoilState(regionState);

  return (
    <label htmlFor="regionId">
      Region:
      <select
        name="regionId"
        id="regionId"
        value={region.id}
        onChange={(event) => {
          const regionId = event.target.value;
          const region = regions.find((region) => region.id === regionId);
          setRegion(region!);
        }}
      >
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.id}
          </option>
        ))}
      </select>
    </label>
  );
}
