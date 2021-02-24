import { atom, selector } from "recoil";
import { mockRegionData } from "./mock";

interface ISpec {
  mem: number;
}

interface IZone {
  id: string;
  name: string;
  spec: ISpec[];
}

interface IRegion {
  id: string;
  name: string;
  zones: IZone[];
}

export const regionsState = selector({
  key: "regionsState",
  get: ({ get }) => {
    return Promise.resolve<IRegion[]>(mockRegionData);
  },
});

export const regionState = atom({
  key: "regionState",
  default: selector({
    key: "regionState/Default",
    get: ({ get }) => {
      const regions = get(regionsState);
      return regions[0];
    },
  }),
});

export const zonesState = selector({
  key: "zonesState",
  get: ({ get }) => {
    const region = get(regionState);
    return region.zones;
  },
});

export const zoneState = atom({
  key: "zoneState",
  default: selector({
    key: "zoneState/default",
    get: ({ get }) => {
      return get(zonesState)[0];
    },
  }),
});

export const specsState = selector({
  key: "specsState",
  get: ({ get }) => {
    const zone = get(zoneState);
    return zone.spec;
  },
});

export const specState = atom({
  key: "specState",
  default: selector({
    key: "specState/default",
    get: ({ get }) => {
      return get(specsState)[0];
    },
  }),
});
