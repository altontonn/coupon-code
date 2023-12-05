import React, { useEffect } from "react";
import { fetchCodeData, addRedeemedCode } from "../Redux/Code/code";
import { useDispatch, useSelector } from "react-redux";

const Candidate = () => {
  const dispatch = useDispatch();
  const redeemedCodes = useSelector((state) => state.codes.redeemedCodes)
  const codes = useSelector((state) => state.codes.codes);
  useEffect(() => {
    dispatch(fetchCodeData());
  }, [dispatch]);

  const redeemCode = (id) => {
    const codeToRedeem = codes.find((code) => code.id === id);
    if (codeToRedeem && !redeemedCodes.some((code) => code.id === id)) {
      const redeemedCode = {
        id: id,
        passcode: codeToRedeem.passcode, // Access passcode from the 'codeToRedeem' object
        redeemedAt: new Date().toISOString(),
      };

      dispatch(addRedeemedCode(redeemedCode));
    }
  };
  const isRedeemed = (id) => {
    return redeemedCodes.some((code) => code.id === id);
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
