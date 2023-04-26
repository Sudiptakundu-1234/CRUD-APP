import "./App.css";
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import AddUser from "./Component/AddUser";
import Userlist from "./Component/Userlist";
import Update from "./Component/Update";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path="/user-list" element={<Userlist/>}/>
        <Route path="/Update-user/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
