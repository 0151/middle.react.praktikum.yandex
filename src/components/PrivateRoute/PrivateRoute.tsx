import { Route, RouteProps, Redirect } from 'react-router-dom'
import React from 'react'

interface PrivateRouteProps {
    isAuthenticated: boolean
}

export const PrivateRoute:React.FC<PrivateRouteProps & RouteProps> = ({isAuthenticated, ...props}) => {
    return (
        isAuthenticated
            ? <Route {...props} />
            : <Redirect to='/auth' />
    )
}