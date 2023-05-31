import { Route, Routes } from 'react-router-dom';
import Home from './Todo/Home';
import Create from './Todo/Create';
import View from './Todo/View';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/view" element={<View></View>}></Route>
      </Routes>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default App;
