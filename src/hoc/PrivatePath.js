import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivatePath = () => {

    const {userName} = useSelector(state => ({
        userName: state.userReducer.userName
    }))

    if(!userName || !localStorage.getItem('userName')) {
        return <Navigate to='/memory-card/login' />  
    }

    return <Outlet />
}

export default PrivatePath