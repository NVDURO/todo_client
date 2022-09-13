import { useState } from "react";
import DefaultButton from "../DefaultButton";

export default function DefaultModal ({ showModal, setShowModal, handleSubmit, defaultText = "" }) {
    const [text, setText] = useState("");
    return (
      <>
        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">Update todo</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <label className="block text-black text-sm font-bold mb-1">
                        Text
                      </label>
                      <textarea defaultValue={defaultText} onChange={(e) => setText(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    </form>
                  </div>
                  <div className="flex items-center justify-start p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-12 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <DefaultButton text="Submit" onClick={() => handleSubmit(text)}/>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
};
