/* eslint-disable react/prop-types */
const Product = ({ id, title, desciption, price, rating, stock, brand,thumbnail }) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {id} 
          {title}
        </h5>
        <p className="card-text">{desciption}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price : ${price}</li>
        <li className="list-group-item">Rating : {rating}</li>
        <li className="list-group-item">In-stock : {stock}</li>
        <li className="list-group-item">Brand : {brand}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Add to Cart
        </a>
        <a href="#" className="card-link">
          Remove from Cart
        </a>
      </div>
    </div>
  );
};

export default Product;
