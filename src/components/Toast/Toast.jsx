import { useContext, useState } from "react";
import productsContext from "../../Contexts/Productscontext";

const Toast = () => {
  const contextData = useContext(productsContext);

  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
      <div
        className={`toast align-items-center text-white bg-primary ${
          contextData.isShowToast ? "show" : ""
        }`}
      >
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-close btn-close-wsite ms-3"
            onClick={() => contextData.setIsShowToast(false)}
          ></button>
          <div className="toast-body">
            The product is successfully added to your favorite items.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
