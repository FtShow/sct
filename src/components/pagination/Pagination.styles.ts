import styled, { css } from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-top: 24px;
`;

type ButtonProps = {
  $active?: boolean;
};

export const PageButton = styled.button<ButtonProps>`
    min-width: 36px;
    height: 36px;
    padding: 0 10px;

    border-radius: 6px;
    border: 1px solid #d0d7de;
    background: #fff;

    font-size: 14px;
    font-weight: 500;

    cursor: pointer;
    transition: all 0.15s ease;

    &:hover:not(:disabled) {
        background: #f6f8fa;
    }


    ${({ $active }) =>
            $active &&
            css`
                background: #f2f5f8;
                border-color: #ced5de;
                color: #24292f;
                cursor: default;
            `}
`;
