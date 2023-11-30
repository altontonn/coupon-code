import React, { useEffect } from "react";
import { fetchCodeData } from "../Redux/Code/code";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
const Researcher = () => {
  const dispatch = useDispatch();
  const codes = useSelector((state) => state.codes.codes);

  useEffect(() => {
    dispatch(fetchCodeData())
  }, [dispatch]);

  return (
    <div className="grid gap-x-8 grid-cols-3">
      <div>
        <Form />
      </div>
      <div>
        <h1 className="text-3xl font-bold underline">Your Data Codes</h1>
        <ul className="divide-y divide-gray-200">
          {codes && codes.length > 0 ? (
            codes.map((code) => (
              <li className="py-4 flex" key={code.id}>
                {code.passcode}
              </li>
            ))
          ) : (
            <p>No codes available</p>
          )}
        </ul>
      </div>
      <div>
        <h1 className="text-3xl font-bold underline">Redeemed codes</h1>
      </div>
    </div>
  );
};
export default Researcher;
