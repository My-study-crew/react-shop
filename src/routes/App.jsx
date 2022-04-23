import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Login from "../containers/Login";
import Password_recovery from "../containers/PasswordRecovery";
import NotFound from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/password_recovery"
                        element={<Password_recovery />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
