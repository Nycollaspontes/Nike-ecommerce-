import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CartCount = ({ onCartToggle, totalQTY, onClearCartItems }) => {
  return (
    <>
      <div className="bg-white h-11 flex itemx-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3 ">
          <div className="grid items-center cursor-pointer ">
            <ChevronDoubleLeftIcon
              className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]"
              onClick={onCartToggle}
            />
          </div>
          <div className="grid items-center">
            <h1 className="text-base font-medium text-slate-900">
              My cart
              <span className="bg-theme-cart ml-2 rounded px-1 py-0.5 text-slate-100 font-normal text-xs ">
                {`${totalQTY}`}
                (items)
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center ">
          <button
            className="rounded bg-theme-cart active:scale-90 p-0.5 text-white stroke-[2]"
            type="button"
            onClick={onCartToggle}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
