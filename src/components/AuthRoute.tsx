import { Navigate } from "react-router-dom"

export default function AuthRoute({ children }: { children: React.ReactNode }) {


    const token = localStorage.getItem('token')

    if (!token) return <Navigate to="/auth/login" replace />

    return (
    <>
        {children}
    </>
  )
}
