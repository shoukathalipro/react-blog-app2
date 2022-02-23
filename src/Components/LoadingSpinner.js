import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
    return (
        <div>
            <ClipLoader color={"#F37A24"} size={150} />
        </div>
    )
}

export default LoadingSpinner;