import { flow, types } from 'mobx-state-tree';
import { MeterModel } from './Meter.model';
import { AreaModel } from './Area.model';
import { deleteMeter, getMeters } from '../api/meters.api';
import { getAreasByIds } from '../api/areas.api';

export const RootStore = types
  .model('RootStore', {
    meters: types.array(MeterModel),
    areas: types.map(AreaModel),

    limit: types.optional(types.number, 20),
    currentPage: types.optional(types.number, 1),
    totalCount: types.optional(types.number, 0),
    offset: types.optional(types.number, 0),
    isLoading: types.optional(types.boolean, false),
  })
  .actions((self) => {
    const loadMeters = flow(function* (page: number = 1) {
      self.isLoading = true;
      try {
        self.currentPage = page;
        self.offset = (page - 1) * self.limit;

        const data = yield getMeters({
          limit: self.limit,
          offset: self.offset,
        });

        self.totalCount = data.count;

        const transformedMeters = data.results.map((m: any) => ({
          ...m,
          _type: Array.isArray(m._type) ? m._type[0] : m._type,
          is_automatic: m.is_automatic ?? false,
          area: typeof m.area === 'object' ? m.area.id : m.area,
        }));

        self.meters.replace(transformedMeters);

        const areaIds = transformedMeters
          .map((meter: any) => meter.area)
          .filter((id: string) => !self.areas.has(String(id)));

        if (areaIds.length > 0) {
          const response = yield getAreasByIds(areaIds);
          if (Array.isArray(response.results)) {
            response.results.forEach((area: any) => {
              self.areas.set(String(area.id), area);
            });
          }
        }
      } catch (error) {
        console.error('Error loading meters:', error);
      } finally {
        self.isLoading = false;
      }
    });

    const removeMeter = flow(function* (meterId: string) {
      try {
        yield deleteMeter(meterId);

        self.meters.replace(
          self.meters.filter((meter) => meter.id !== meterId)
        );

        const data = yield getMeters({
          limit: 1,
          offset: self.offset + self.limit - 1,
        });

        if (data.results.length) {
          const newMeter = data.results[0];

          const transformedMeter = {
            ...newMeter,
            _type: Array.isArray(newMeter._type)
              ? newMeter._type[0]
              : newMeter._type,
            is_automatic: newMeter.is_automatic ?? false,
            area:
              typeof newMeter.area === 'object'
                ? newMeter.area.id
                : newMeter.area,
          };

          self.meters.push(transformedMeter);

          const areaId = transformedMeter.area;
          if (!self.areas.has(String(areaId))) {
            const response = yield getAreasByIds([areaId]);
            if (response.results?.length) {
              self.areas.set(String(response.results[0].id), response.results[0]);
            }
          }
        }

        self.totalCount -= 1;

      } catch (error) {
        console.error('Error removing meter:', error);
      }
    });


    return { loadMeters, removeMeter };
  });
