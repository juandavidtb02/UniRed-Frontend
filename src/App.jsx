
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Forms from './auth/Forms'
import Index from './components/pages/Index';
import Discussion from './components/pages/Discussion';
import Profile from './components/pages/user/Profile';
import SettingsUser from './components/pages/user/SettingsUser';
import MyDiscussions from './components/pages/user/MyDiscussions';
import Error404 from './components/pages/Error404';

import { UserProvider } from '../context/UserContext';

function App() {
  
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='*' element={<Error404/>}/>
          <Route exact path='/login' element={<Forms/>}/>
          <Route exact path='/' element={<Index/>}/>
          <Route path="/discussion/:id" element={<Discussion/>}/>
          <Route exact path='/settings' element={<SettingsUser/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route exact path='/mydiscussions' element={<MyDiscussions/>}/>
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
