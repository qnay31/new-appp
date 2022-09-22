import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="add" element={<AddProduct />}></Route>
          <Route path="edit/:id" element={<UpdateProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
