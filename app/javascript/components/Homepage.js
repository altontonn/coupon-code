import React, { useEffect } from 'react';
import { fetchCodeData } from "../Redux/Code/code";
import { useDispatch, useSelector } from "react-redux";
const Homepage = () => {
  const dispatch = useDispatch();
  const codes = useSelector((state) => state.codes.codes)

  useEffect(() => {
    console.log("Fetching data...");
    dispatch(fetchCodeData())
      .then((action) => {
        console.log("Fetched data:", action.payload);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  return (
    <div>
      <ul>
      {codes && codes.length > 0 ? (
        codes.map((code) => (
          <li key={code.id}>{code.code}</li>
        ))
      ) : (
        <p>No codes available</p>
      )}
      </ul>
    </div>
  );
};
export default Homepage;
