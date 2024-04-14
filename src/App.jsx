import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registration from "./pages/Registration";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Registration />}></Route>)
);

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={501}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
