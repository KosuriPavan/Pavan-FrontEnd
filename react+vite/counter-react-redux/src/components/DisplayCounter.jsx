import { useSelector } from "react-redux";

const DisplayCounter = () => {

  const counter = useSelector(store => store.counter)
  return (
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Counter Current Value:{counter}</p>
    </div>
  );
};

export default DisplayCounter;
