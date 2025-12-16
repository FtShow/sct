import {
  StyledTable,
  TableContainer,
  Th,
} from './MetersTable.styles.ts';
import { DataRow } from '../data-row/DataRow.tsx';
import type { MeterInstance } from '../../models/Meter.model.ts';
import { AreaModel } from '../../models/Area.model.ts';
import type { IMSTMap } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';

export type AreasMapType = IMSTMap<typeof AreaModel>;

type Props = {
  meters: MeterInstance[];
  areas: AreasMapType;
  isLoading: boolean;
  onDelete: (id: string) => Promise<void>;
};
export const MetersTable = observer(({ meters, areas, isLoading, onDelete }: Props) => {
  return (
      <TableContainer $disabled={isLoading}>
        <StyledTable>
          <thead>
          <tr>
            <Th>#</Th>
            <Th>Тип</Th>
            <Th>Дата установки</Th>
            <Th>Авто</Th>
            <Th>Значение</Th>
            <Th>Адрес</Th>
            <Th>Примечание</Th>
            <Th />
          </tr>
          </thead>
          <tbody>
          {meters.map((meter, index) => {
            const area = areas.get(String(meter.area));

            return (
              <DataRow
                area={area}
                key={meter.id}
                meter={meter}
                index={index}
                isLoading={isLoading}
                onDelete={onDelete}
              />
            );
          })}
          </tbody>
        </StyledTable>
      </TableContainer>
  );
});
