import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { getIsLoggedIn, getIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(getIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <p>Refreshing user...</p>
    ) : (
        <Router>
            <Toaster position="top-right" reverseOrder={false} />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="/register"
                        element={
                            <RestrictedRoute
                                redirectTo="/contacts"
                                component={<RegistrationPage />}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <RestrictedRoute
                                redirectTo="/contacts"
                                component={<LoginPage />}
                            />
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute
                                redirectTo="/login"
                                component={<ContactsPage />}
                            />
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { getIsLoggedIn, getIsRefreshing } from "./redux/auth/selectors";
// import { refreshUser } from "./redux/auth/operations";
// import Layout from "./components/Layout";
// import HomePage from "./pages/HomePage/HomePage";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import PrivateRoute from "./components/PrivateRoute";
// import RestrictedRoute from "./components/RestrictedRoute";

// function App() {
//     const dispatch = useDispatch();
//     const isRefreshing = useSelector(getIsRefreshing);

//     useEffect(() => {
//         dispatch(refreshUser());
//     }, [dispatch]);

//     return isRefreshing ? (
//         <p>Refreshing user...</p>
//     ) : (
//         <Router>
//             <Toaster position="top-right" reverseOrder={false} />
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<HomePage />} />
//                     <Route
//                         path="/register"
//                         element={
//                             <RestrictedRoute
//                                 redirectTo="/contacts"
//                                 component={<RegistrationPage />}
//                             />
//                         }
//                     />
//                     <Route
//                         path="/login"
//                         element={
//                             <RestrictedRoute
//                                 redirectTo="/contacts"
//                                 component={<LoginPage />}
//                             />
//                         }
//                     />
//                     <Route
//                         path="/contacts"
//                         element={
//                             <PrivateRoute
//                                 redirectTo="/login"
//                                 component={<ContactsPage />}
//                             />
//                         }
//                     />
//                 </Route>
//             </Routes>
//         </Router>
//     );
// }

// export default App;
