import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../models/StoreContext.ts';
import { Pagination } from '../components/pagination/Pagination.tsx';
import { MetersTable } from '../components/table/Table.tsx';
import { MetersPageWrapper, PaginationContainer } from './MetersPage.styles.ts';

export const MetersPage = observer(() => {
  const store = useStore();

  useEffect(() => {
    store.loadMeters(1);
  }, []);

  const totalPages = Math.ceil(store.totalCount / store.limit);

  if (store.isLoading && store.meters.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <MetersPageWrapper>
      <h1>Список счетчиков</h1>
      <MetersTable
        meters={store.meters}
        onDelete={store.removeMeter}
        isLoading={store.isLoading}
        areas={store.areas}
      />
      <PaginationContainer>
        <Pagination
          currentPage={store.currentPage}
          totalPages={totalPages}
          onPageChange={store.loadMeters}
        />
      </PaginationContainer>
    </MetersPageWrapper>
  );
});
