import { RootLayout } from "./components";
import DonorLists from "./pages/Donors";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import SearchDonor from "./pages/SearchDonor";
import "./styles/main.scss";

function App() {
  return (
    <>
      <RootLayout classes="App">
        {/* <SearchDonor title="Search Donor" /> */}
        <DonorLists title="Donor List" />
      </RootLayout>

      {/* <Login />
      <Registration />
      <ForgotPassword /> */}
    </>
  );
}

export default App;
