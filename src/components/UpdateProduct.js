import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();

    settitle(data.title);
    setprice(data.price);
  };

  const editProduct = async (e) => {
    e.preventDefault();

    const product = { title, price };
    await fetch(`http://localhost:8080/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={editProduct}>
        <div className="field">
          <label className="label"> Produk </label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label"> Price </label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link"> Submit </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
