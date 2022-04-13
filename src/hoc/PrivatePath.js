import { Navigate, Outlet } from "react-router-dom";

const PrivatePath = () => {

    const auth = true

    if(!auth) {
        return <Navigate to='/memory-card/login' />  
    }

    return <Outlet />
}

export default PrivatePath