import React from "react";
import { fetchCodeData } from "../Redux/Code/code";
import { useDispatch } from "react-redux";
const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCodeData())
  }, [dispatch])
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};
export default Homepage;
