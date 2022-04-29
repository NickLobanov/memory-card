import { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Header from '../Header/Header';
import Auth from '../Auth/Auth';
import Main from '../Main/Main';
import Settings from '../Settings/Settings';
import Leaderboard from '../Leaderboard/Leaderboard';
import { getCards, getBgImages } from '../../actions';
import {useDispatch} from 'react-redux'
import PrivatePath from '../../hoc/PrivatePath';
import { createUser } from '../../actions/user';
import {updateLeaderboard} from "../../actions/gameState";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCards(12))
    if(localStorage.getItem('userName')) {
      dispatch(createUser(localStorage.getItem('userName')))
    }
    dispatch(getBgImages())
    dispatch(updateLeaderboard(JSON.parse(localStorage.getItem('leaderBoard'))))
  }, [])

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
        <Route path='*' element={<Navigate to={'/memory-card'} />}/>
      </Routes>
    
  );
}

export default App;
