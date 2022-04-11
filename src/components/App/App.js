import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from '../Header/Header';
import Auth from '../Auth/Auth';
import Main from '../Main/Main';
import Settings from '../Settings/Settings';
import Leaderboard from '../Leaderboard/Leaderboard';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/memory-card' element={<Header />}>
          <Route path='main' element={<Main />}/>
          <Route path='login' element={<Auth />}/>
          <Route path='leaderboard' element={<Leaderboard />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
