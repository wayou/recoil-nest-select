import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { specsState, specState } from "./appState";

export function SpecSelect() {
  const specs = useRecoilValue(specsState);
  const [spec, setSpec] = useRecoilState(specState);
  const resetSpec = useResetRecoilState(specState);

  useEffect(() => {
    resetSpec();
  }, [resetSpec, setSpec, specs]);

  useEffect(() => {
    // do sth with spec
    console.log("spec", spec.mem);
  }, [spec.mem]);

  return (
    <label htmlFor="mem">
      Mem:
      <select
        name="mem"
        id="mem"
        value={spec.mem}
        onChange={(event) => {
          const mem = Number(event.target.value);
          const spec = specs.find((spec) => spec.mem === mem);
          setSpec(spec!);
        }}
      >
        {specs.map((spec) => (
          <option key={spec.mem} value={spec.mem}>
            {spec.mem}
          </option>
        ))}
      </select>
      G
    </label>
  );
}
