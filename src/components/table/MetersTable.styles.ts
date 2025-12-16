import styled from 'styled-components';

export const TableContainer = styled.div<{ $disabled: boolean }>`
    width: 100%;
    background: #fff;
    max-height: 60vh;
    overflow-y: scroll;
    border: 1px solid #ddd;
    border-radius: 8px;
    opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
    pointer-events: ${({ $disabled }) =>
            $disabled ? 'none' : 'auto'};

    &::-webkit-scrollbar {
        width: 4px;
    }
    
    &::-webkit-scrollbar-track {
        background: #f1f3f5;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #c1c7cd;
        border-radius: 4px;
    }


    &::-webkit-scrollbar-thumb:hover {
        background: #9aa0a6;
    }
`;

export const StyledTable = styled.table`
  width: 100%;
  max-height: 60vh;
  table-layout: auto;
  border-collapse: collapse;
  font-size: 14px;
`;

export const Th = styled.th`
  padding: 10px;
  position: sticky;
  top: 0; 
  font-weight: 600;
  text-align: left;
  background: #f4f6f8;
  border-bottom: 1px solid #ddd;
  color: #333;

  white-space: nowrap; 
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
`;

