import './App.css';
import MainNavigation from "./components/layout/MainNavigation";
import {Routes, Route} from "react-router-dom";
import UsersTable from "./components/usersTable";
import Messages from "./pages/messages";


function App() {

  return (
      <>
        <MainNavigation />
          <Routes>
              <Route path="/" element={<UsersTable />}>

              </Route>
              <Route path="/messages" element={<Messages />}>
              </Route>
          </Routes>
      </>
  );
}

export default App;
