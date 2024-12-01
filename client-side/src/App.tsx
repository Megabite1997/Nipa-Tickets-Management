import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import ErrorPage from "./pages/Error";
import ContactUs from "./pages/ContactUs";
// import Cart from "./pages/Cart";
import PrivateRoute from "./components/PrivateRoute";
import CreateTicket from "./pages/Tickets/CreateTicket";
import UpdateTickets from "./pages/Tickets/UpdateTickets";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about_us", element: <AboutUsPage /> },
      { path: "contact_us", element: <ContactUs /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegistrationPage /> },
      {
        path: "create_tickets",
        element: (
          // <PrivateRoute>
          <CreateTicket />
          // </PrivateRoute>
        ),
      },
      {
        path: "update_tickets",
        element: (
          // <PrivateRoute>
          <UpdateTickets />
          // </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
