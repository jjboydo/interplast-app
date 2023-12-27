import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Login, ProtectedRoute } from "./components"
import { AuthContextProvider } from "./context/authContext"

export const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
