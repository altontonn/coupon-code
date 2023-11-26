import React, { useEffect } from "react";
import { fetchCodeData } from "../Redux/Code/code";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
const Homepage = () => {
  const dispatch = useDispatch();
  const codes = useSelector((state) => state.codes.codes);

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
    <div className="grid gap-x-8 gap-y-4 grid-cols-2">
      <div>
        <Form />
      </div>
      <div>
        <h1 className="text-3xl font-bold underline">Your Data Codes</h1>
        <ul className="divide-y divide-gray-200">
          {codes && codes.length > 0 ? (
            codes.map((code) => (
              <li className="py-4 flex" key={code.id}>
                {code.code}
              </li>
            ))
          ) : (
            <p>No codes available</p>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Homepage;
