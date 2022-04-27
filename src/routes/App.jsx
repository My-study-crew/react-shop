import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout"; // Container
import Home from "@pages/Home"; // Page
import SignUp from "@pages/CreateAccount"; // Sign up page
import Login from "@pages/Login"; // Page
import MyAccount from "@pages/MyAccount"; // Page
import Password_recovery from "@pages/PasswordRecovery"; // Page
import SendEmail from "@pages/SendEmail"; // Page
import NewPassword from "@pages/NewPassword"; // Page
import Orders from "@pages/Orders"; // Page
import Checkout from "@pages/Checkout"; // Page
import NotFound from "@pages/NotFound"; // Page
import "@styles/global.css"; // Style

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
