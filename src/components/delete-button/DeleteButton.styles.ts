import styled from 'styled-components';

export const Button = styled.button<{ disabled?: boolean }>`
  background: #fee3e3;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ disabled }) => (disabled ? '#A0AEC0' : '#C53030')};

  &:hover {
    background: ${({ disabled }) => (disabled ? '#FEE3E3' : '#FDC2C2')};
    color: ${({ disabled }) => (disabled ? '#A0AEC0' : '#E53E3E')};
  }

  &:active {
    background: ${({ disabled }) => (disabled ? '#FEE3E3' : '#FBB1B1')};
    color: ${({ disabled }) => (disabled ? '#A0AEC0' : '#9B2C2C')};
  }

  &:disabled {
    cursor: not-allowed;
      background: none;
  }
`;
