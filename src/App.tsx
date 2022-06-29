import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import { DetailPage } from './pages/DetailPage';
import { HomePage } from './pages/Home/HomePage';
import { NotFound } from './pages/NotFound';
import { DataContext } from './utils/DataContext';
import { useFetchData } from './utils/useFetchData';

function App() {
  const [data, updateData] = useFetchData();

  const value = useMemo(
    () => ({
      data,
      updateData,
    }),
    [data, updateData]
  );

  return (
    <DataContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
