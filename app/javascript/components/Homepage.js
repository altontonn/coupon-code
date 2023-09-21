import React from "react";
import { fetchCodeData } from "../Redux/Code/code";
import { useDispatch, useSelector } from "react-redux";
const Homepage = () => {
  const dispatch = useDispatch();
  const codes = useSelector((state) => state.codes)
  useEffect(() => {
    dispatch(fetchCodeData())
  }, [codes, dispatch])
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};
export default Homepage;
