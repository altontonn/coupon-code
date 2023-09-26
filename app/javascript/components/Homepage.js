import React, { useEffect } from 'react';
import { fetchCodeData } from "../Redux/Code/code";
import { useDispatch, useSelector } from "react-redux";
const Homepage = () => {
  const dispatch = useDispatch();
  const codes = useSelector((state) => state.codes)

  useEffect(() => {
    dispatch(fetchCodeData());
  }, [dispatch])

  return (
    <div>
      <ul>
      {codes && codes.length > 0 ? (
        codes.map((code, index) => (
          <li key={index}>{code.code}</li>
        ))
      ) : (
        <p>No codes available</p>
      )}
      </ul>
    </div>
  );
};
export default Homepage;
