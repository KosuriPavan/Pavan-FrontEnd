const Container = ({ children }) => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <div className="card" style={{ width: "70%" }}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Container;
