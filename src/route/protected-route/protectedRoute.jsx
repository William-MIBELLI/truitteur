import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ user, redirectPath = '/login' }) => {

    const isCOnnected = user.user !== undefined

    if(!isCOnnected){
        return <Navigate to={redirectPath} replace/>
    }

    return <Outlet/>
}

export default ProtectedRoute