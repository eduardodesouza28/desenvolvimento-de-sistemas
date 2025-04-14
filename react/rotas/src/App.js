
import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import { Layout } from './components/Layout/Layout';
import { AdminLayout } from './components/AdminLayout/AdminLayout';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<h1>404</h1>} />
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='/admin/users' element={<Users />} />
            <Route path='*' element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
