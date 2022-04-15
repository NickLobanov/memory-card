import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivatePath = () => {

    const {userName} = useSelector(state => ({
        userName: state.userReducer.userName
    }))
    console.log(localStorage.getItem('userName'))

    if(!userName && localStorage.getItem('userName') == null) {
        return <Navigate to='/memory-card/login' />  
    }

    return <Outlet />
}

export default PrivatePath