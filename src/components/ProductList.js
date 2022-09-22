import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();

    setproducts(data);
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:8080/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchData();
  };
  return (
    <div>
      <Link to={"add/"} className="button is-success">
        Tambah
      </Link>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Menu</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <th> {index + 1} </th>
              <th> {product.title} </th>
              <th> {product.price} </th>
              <th>
                <Link to={`edit/${product.id}`} className="button is-info">
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="button is-danger"
                >
                  Hapus
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
