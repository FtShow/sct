import { PaginationWrapper, PageButton } from './Pagination.styles';
import { getPaginationPages } from '../../utils/getPaginationPages.ts';


type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
                             currentPage,
                             totalPages,
                             onPageChange,
                           }: Props) => {
  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <PaginationWrapper>
      {pages.map((p, idx) => {
        const isNumber = typeof p === 'number';
        const isActive = p === currentPage;

        return (
          <PageButton
            key={idx}
            $active={isActive}
            disabled={!isNumber}
            onClick={() => isNumber && onPageChange(p)}
          >
            {p}
          </PageButton>
        );
      })}
    </PaginationWrapper>
  );
};
