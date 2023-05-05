import { useAuthContext } from "../../contexts/AuthContext";
import { MainLayout } from "../../layout/mainLayout";
import Navbar from "../../layout/navbar"
import Home from "../../modules/home"
import ProtectedRoute from "../../routes/protectedRoutes";

const HomePage = () => {
  const { user } = useAuthContext();
  return (
    <ProtectedRoute user={user}>
      <MainLayout>
        <Navbar />
        <Home />
      </MainLayout>
    </ProtectedRoute>
  )
}

export default HomePage
