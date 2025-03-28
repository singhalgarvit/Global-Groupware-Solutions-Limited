import {createRoot} from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import CustomRoutesComponent from "./Routes.jsx";
import {AuthContextProvider} from "./context/authContext.jsx";
import {LoadingContext, LoadingContextProvider} from "./context/loadingContext.jsx";
import 'react-responsive-modal/styles.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoadingContextProvider>
      <AuthContextProvider>
        <CustomRoutesComponent />
      </AuthContextProvider>
    </LoadingContextProvider>
  </BrowserRouter>
);
