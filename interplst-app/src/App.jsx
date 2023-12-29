import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, Login, NavBar, ProductList, ProtectedRoute, Proveedores } from "./components"
import { AuthContextProvider } from "./context/authContext"

export const App = () => {
  return (
    <AuthContextProvider>
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <div className="bg-secondary bg-gradient-to-b from-accent via-back to-back h-screen">
                <ProductList />
              </div>
            </ProtectedRoute>
          } />
          <Route path="/proveedores" element={
            <ProtectedRoute>
              <div className="bg-secondary bg-gradient-to-b from-accent via-back to-back h-screen">
                <Proveedores/>
              </div>
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
