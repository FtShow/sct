import { types } from 'mobx-state-tree';
import type { Instance } from 'mobx-state-tree';

export const HouseModel = types.model('House', {
  id: types.identifier,
  address: types.string,
  fias_addrobjs: types.array(types.string),
});
export const AreaModel = types
  .model('Area', {
    id: types.identifier,
    number: types.number,
    str_number: types.string,
    str_number_full: types.string,
    house: HouseModel,
  })
  .views((self) => ({
    get fullAddress() {
      const flat =
        self.str_number_full ||
        self.str_number ||
        (self.number ? `кв. ${self.number}` : '');

      return flat
        ? `${self.house.address}, ${flat}`
        : self.house.address;
    },
  }));

export type AreaInstance = Instance<typeof AreaModel>;
