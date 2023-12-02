import React, { useContext, useEffect, useState } from "react";
import { fetchCodeData } from "../Redux/Code/code";
import { useDispatch, useSelector } from "react-redux";
import { CodeContext } from "./CodeContext";

const Candidate = () => {
  const dispatch = useDispatch();
  const [redeemCodes, setRedeemedCode] = useState([]);
  const codes = useSelector((state) => state.codes.codes);
  useEffect(() => {
    dispatch(fetchCodeData());
  }, [dispatch]);

  const { addRedeemedCode } = useContext(CodeContext);
  const redeemCode = (id) => {
    setRedeemedCode([...redeemCodes, id]);
    const codeToRedeem = codes.find((code) => code.id === id);
    if (codeToRedeem) {
      const redeemedCode = {
        id: id,
        passcode: codeToRedeem.passcode, // Access passcode from the 'codeToRedeem' object
        redeemedAt: new Date().toISOString(),
      };

      addRedeemedCode(redeemedCode);
    }
  };
  const isRedeemed = (id) => {
    return redeemCodes.includes(id);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Redeem Codes</h1>
      <ul className="divide-y flex flex-col jusify-center items-center">
        {codes && codes.length > 0 ? (
          codes.map((code) => (
            <li
              className="py-4 flex items-center justify-between"
              key={code.id}
            >
              <span className="flex-grow">{code.passcode}</span>
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6 ${
                  isRedeemed(code.id) ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={() => redeemCode(code.id)}
              >
                Redeem
              </button>
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
