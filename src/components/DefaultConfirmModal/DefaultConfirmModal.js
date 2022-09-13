import { useState } from "react";
import DefaultButton from "../DefaultButton";

export default function DefaultConfirmModal ({ showModal, setShowModal, handleConfirm }) {
    return (
      <>
        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">Do you want to delete this item?</h3>
                  </div>
                  <div className="flex items-center justify-start p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-12 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      No
                    </button>
                    <DefaultButton text="Yes" onClick={() => handleConfirm()}/>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
};
