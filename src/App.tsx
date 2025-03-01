import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Test from './page/Test';
import TestResultContainer from './page/TestResult';

export const baseUrl = 'http://localhost:5174';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:testParam" element={<Test />} />
        <Route path="/:testParam/result/:resultParam" element={<TestResultContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
