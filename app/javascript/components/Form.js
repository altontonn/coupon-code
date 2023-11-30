import React, { useState } from "react";
import { createCode } from "../Redux/Code/AddCode";
import { useDispatch } from "react-redux";
const Form = () => {
  const dispatch = useDispatch();
  const [passcode, setPasscode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode.trim()) {
      dispatch(
        createCode({
          "passcode": passcode,
        })
      );
      setPasscode("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Create new passcode
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Code
              </label>
              <div className="mt-2">
                <div>
                  <input
                    type="text"
                    value={passcode}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="pKJ02c"
                    onChange={(e) => setPasscode(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
