const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-success"
          style={{ marginRight: "100px" }}
        >
          Cart Items :
        </button>
        <button
          type="button"
          className="btn btn-success"
        >
          Total Price :
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
