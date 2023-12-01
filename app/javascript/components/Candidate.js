import React, { useEffect } from "react";
import { fetchCodeData } from "../Redux/Code/code";
import { useDispatch, useSelector } from "react-redux";

const Candidate = () => {
  const dispatch = useDispatch();
  const codes = useSelector((state) => state.codes.codes);
  useEffect(() => {
    dispatch(fetchCodeData())
  }, [dispatch])
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Redeem Codes</h1>
      <ul className="divide-y">
        {codes && codes.length > 0 ? (
          codes.map((code) => (
            <li className="py-4 flex" key={code.id}>
              {code.passcode}
              <button onClick={() => redeemCode(code.id)}>Redeem</button>
            </li>
          ))
        ) : (
          <p>No codes available</p>
        )}
      </ul>
    </div>
  );
};
export default Candidate;
