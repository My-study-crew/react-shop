import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/CreateAccount";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import Password_recovery from "../pages/PasswordRecovery";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/sign_up" element={<SignUp />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/account" element={<MyAccount />} />
                    <Route
                        exact
                        path="/password_recovery"
                        element={<Password_recovery />}
                    />
                    <Route exact path="/send_email" element={<SendEmail />} />
                    <Route
                        exact
                        path="/new_password"
                        element={<NewPassword />}
                    />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
