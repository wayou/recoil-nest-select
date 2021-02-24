import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { specsState, specState } from "./appState";

export function SpecSelect() {
  const spcs = useRecoilValue(specsState);
  const [spec, setSpec] = useRecoilState(specState);

  return (
    <label htmlFor="mem">
      内存大小：
      <select
        name="mem"
        id="mem"
        value={spec.mem}
        onChange={(event) => {
          const mem = Number(event.target.value);
          const spec = spcs.find((spec) => spec.mem === mem);
          setSpec(spec!);
        }}
      >
        {spcs.map((spec) => (
          <option key={spec.mem} value={spec.mem}>
            {spec.mem}
          </option>
        ))}
      </select>
      G
    </label>
  );
}
