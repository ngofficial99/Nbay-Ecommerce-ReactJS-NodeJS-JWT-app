import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditUser from "./components/Edituser";
import ProductManagement from "./components/ProductManagement";
function App() {
  // const [userId, setUserId] = useState(1);

  // const handleUserChange = (id: number) => {
  //   setUserId(id);
  // };

  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" Component={ProductList} />
          <Route path="/userlist" Component={UserList} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/signup" Component={Signup} />
          <Route path="/productmanagement" Component={ProductManagement} />
        </Routes>
      </Router>
      {/* // <button onClick={() => handleUserChange(1)}>User 1</button>
    // <button onClick={() => handleUserChange(2)}>User 2</button>
    // <button onClick={() => handleUserChange(4)}>User 3</button> */}
      {/* <div>
        <button onClick={increment}>Increment </button>
        <button onClick={decrement}>Decrement</button>
      </div> */}
      {/* <Counter count={count}></Counter> */}
      {/* <TaxCalculator></TaxCalculator>
      <UserList></UserList> */}
      {/* <ProductList></ProductList> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
