import styled from 'styled-components';
import { ActionsWrapper } from '../table/MetersTable.styles.ts';

export const Row = styled.tr`
  background: #fff;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #f7f8fa;
      cursor: pointer;
  }

  &:hover ${ActionsWrapper} {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
  text-align: left;
  vertical-align: middle;
  color: #333;
  white-space: nowrap;
`;