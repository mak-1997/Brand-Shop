import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { HomePage } from "./HomePage";
import { AdminPage } from "./AdminPage";
import { PrivateRoute , PrivateUserRoute} from "./PrivateRoute";
import { NewArrivals } from "./NewArrivals";
import { Shoes } from "./Shoes";
import { Clothing } from "./Clothing";
import { Cart } from "./Cart";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/newArrivals"
          element={
            <PrivateUserRoute>
              <NewArrivals />
            </PrivateUserRoute>
          }
        />
        <Route
          path="/shoes"
          element={
            <PrivateUserRoute>
              <Shoes />
            </PrivateUserRoute>
          }
        />
        <Route
          path="/clothing"
          element={
            <PrivateUserRoute>
              <Clothing />
            </PrivateUserRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateUserRoute>
              <Cart />
            </PrivateUserRoute>
          }
        />
      </Routes>
    </div>
  );
};
