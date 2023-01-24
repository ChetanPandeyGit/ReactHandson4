import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Student from './Components/Student';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div id='container'>
      <div id='header'>
            <Link className='link' to={'/'}>Home</Link>
            <Link className='link' to={'/student'}>Student</Link>
            <Link className='link' to={'/contact-us'}>Contact Us</Link>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/student' element={<Student />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
