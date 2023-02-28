
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css'
import Forms from './auth/Forms'
import Index from './components/pages/Index';
import Discussion from './components/pages/Discussion';
import { UserProvider } from '../context/UserContext';



function App() {
  

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Forms/>}/>
          <Route exact path='/' element={<Index/>}/>
          <Route path="/discussion/:id" element={<Discussion/>}/>
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
