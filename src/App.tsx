import { Routes, Route } from 'react-router-dom';

import { DetailPage } from './pages/DetailPage';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { useFetchData } from './utils/useFetchData';

function App() {
  const [data] = useFetchData();

  return (
    <Routes>
      <Route path="/" element={<HomePage data={data} />} />
      <Route path="/detail/:id" element={<DetailPage data={data} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
