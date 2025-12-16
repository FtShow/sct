import { types } from 'mobx-state-tree';
import type { Instance } from 'mobx-state-tree';

export const MeterModel = types.model('Meter', {
  id: types.identifier,
  _type: types.string,
  is_automatic: types.maybe(types.boolean),
  installation_date: types.string,
  initial_values: types.array(types.number),
  area: types.string,
  description: types.maybeNull(types.string),
});

export type MeterInstance = Instance<typeof MeterModel>;
