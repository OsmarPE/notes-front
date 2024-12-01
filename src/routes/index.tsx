import App from "@/App";
import Auth from "@/components/Auth";
import AuthRoute from "@/components/AuthRoute";
import Login from "@/components/Login";
import Register from "@/components/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
export default function RoutesIndex() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <AuthRoute>
                        <App />
                    </AuthRoute>
                } />
                <Route path="/auth" element={<Auth />}>
                    <Route path="" element={<Navigate to={'login'} replace />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}