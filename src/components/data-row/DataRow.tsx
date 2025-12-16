import { ActionsWrapper } from '../table/MetersTable.styles.ts';
import { DeleteButton } from '../delete-button/DeleteButton.tsx';
import { formatDate } from '../../utils/formatDate.ts';
import { type JSX, useState } from 'react';
import { HvlIcon } from '../../assets/icons/HVLIcon.tsx';
import { GvsIcon } from '../../assets/icons/GVSIcon.tsx';
import { TplIcon } from '../../assets/icons/TPLIcon.tsx';
import { EldtIcon } from '../../assets/icons/ELDTIcon.tsx';
import type { AreaInstance } from '../../models/Area.model.ts';
import type { MeterInstance } from '../../models/Meter.model.ts';
import { observer } from 'mobx-react-lite';
import { Row, Td } from './DataRow.styles.ts';

type Props = {
  meter: MeterInstance;
  area?: AreaInstance;
  index: number;
  onDelete: (id: string) => Promise<void>;
  isLoading?: boolean;
};

const METER_TYPE: Record<string, { label: string; icon: JSX.Element }> = {
  ColdWaterAreaMeter: { label: 'ХВС', icon: <HvlIcon /> },
  HotWaterAreaMeter: { label: 'ГВС', icon: <GvsIcon /> },
  ElectricMeter: { label: 'ТПЛ', icon: <TplIcon /> },
  HeatMeter: { label: 'ЭЛДТ', icon: <EldtIcon /> },
};

export const DataRow = observer(({ area, meter, onDelete, index }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete(meter.id);
    } catch (error) {
      console.error(error);
      setIsDeleting(false);
    }
  };
  return (
    <Row key={meter.id}>
      <Td>{index + 1}</Td>

      <Td>
        <span style={{ marginRight: 8 }}>{METER_TYPE[meter._type]?.icon}</span>
        {METER_TYPE[meter._type]?.label ?? meter._type}
      </Td>

      <Td>{formatDate(meter.installation_date)}</Td>
      <Td>{meter.is_automatic ? 'Да' : 'Нет'}</Td>
      <Td>{meter.initial_values[0]}</Td>
      <Td>{area?.fullAddress ?? '—'}</Td>
      <Td>{meter.description ?? '—'}</Td>

      <Td>
        <ActionsWrapper>
          <DeleteButton
            onClick={handleDelete}
            disabled={isDeleting}
          />
        </ActionsWrapper>
      </Td>
    </Row>
  );
})
