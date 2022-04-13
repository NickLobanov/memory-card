import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from '../Header/Header';
import Auth from '../Auth/Auth';
import Main from '../Main/Main';
import Settings from '../Settings/Settings';
import Leaderboard from '../Leaderboard/Leaderboard';
import { getCards } from '../../actions';
import {useDispatch} from 'react-redux'
import PrivatePath from '../../hoc/PrivatePath';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCards())
  }, [dispatch])

  return (
      <Routes>
        <Route path='/memory-card' element={<Header />}>
          <Route element={<PrivatePath />}>
            <Route index element={<Main/>}/>
            <Route path='leaderboard' element={<Leaderboard />} />
            <Route path='settings' element={<Settings />} />
          </Route>
          <Route path='login' element={<Auth />}/>
        </Route>
      </Routes>
    
  );
}

export default App;
