import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthProtected from './protectedroutes';

import { authProtectedRoutes, publicRoutes } from './allroutes';

const Index = () => {
    return (
        <Routes>
            <Route>
                {publicRoutes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={route.component}
                        key={idx}
                    />
                ))}
            </Route>

            <Route>
                {authProtectedRoutes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={
                            <AuthProtected roles={route.roles}>
                                {route.component}
                            </AuthProtected>
                        }
                        key={idx}
                    />
                ))}
            </Route>
        </Routes>
    );
};

export default Index;
