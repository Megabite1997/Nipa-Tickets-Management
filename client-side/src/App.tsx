import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import ErrorPage from "./pages/Error";
import ContactUs from "./pages/ContactUs";
import CreateTicket from "./pages/Tickets/CreateTicket";
import UpdateTickets from "./pages/Tickets/UpdateTickets";
import Test from "./pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/test", element: <Test /> },
      { path: "about_us", element: <AboutUsPage /> },
      { path: "contact_us", element: <ContactUs /> },
      {
        path: "create_tickets",
        element: <CreateTicket />,
      },
      {
        path: "update_tickets",
        element: <UpdateTickets />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
