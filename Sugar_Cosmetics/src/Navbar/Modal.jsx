import React from "react";
import Signin from "./Signin";

const Modal = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        
      >
        Login/Registration
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{
          width: "135%",
          justifyContent: "end",
          marginLeft: "6%",
          marginTop: "-1.8%",
          // zIndex: "-1",
          // position: "absolute",
        }}
      >
        <div class="modal-dialog">
          <Signin />
        </div>
      </div>
    </div>
  );
};

export default Modal;
