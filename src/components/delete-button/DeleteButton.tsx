import { TrashIcon } from '../../assets/icons/TrashIcon.tsx';
import { Button } from './DeleteButton.styles.ts';

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export const DeleteButton = ({ onClick, disabled = false }: Props) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <TrashIcon variant={disabled ? 'DISABLED' : 'ACTIVE'} />
    </Button>
  );
};
