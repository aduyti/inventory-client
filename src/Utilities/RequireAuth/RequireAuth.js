import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import auth from '../Firebase/firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Spinner />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user?.emailVerified || !user.providerData[0]?.providerId) {
        return <Navigate to="/verify" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;