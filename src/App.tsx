import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import AuthProvider from "./contexts/AuthContext"
import CompanyProvider from "./contexts/CompanyContext"

function App() {
  return (
    <AuthProvider>
      <CompanyProvider>
        <RouterProvider router={router} />
      </CompanyProvider>
    </AuthProvider>
  )
}

export default App
