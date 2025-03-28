import React, {useContext} from "react";
import {LoadingContext} from "../context/loadingContext";
import loader from "../assets/loader.png";

function LoadingPage() {
  const {loading} = useContext(LoadingContext);
  return (
    loading && (
      <div className="w-screen h-screen fixed flex align-middle justify-center bg-black/21">
        <img
          id="loderId"
          src={loader}
          className="fixed top-1/2 left-1/2"
          alt="Loader"
          width="100"
          height="100"
        />
      </div>
    )
  );
}

export default LoadingPage;
