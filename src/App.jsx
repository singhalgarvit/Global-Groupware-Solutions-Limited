import "./App.css";
import LoadingPage from "./pages/LoadingPage";
import UserData from "./pages/UserData";

function App() {
  return (
    <>
      <LoadingPage />
      <UserData />
      <p className="fixed bottom-10 left-28">
        <b>Note: </b>Deleted and Updated users will not reflect after refreshing the
        page because this is done using only frontend side and the backend does
        not allow it.
      </p>
    </>
  );
}

export default App;
