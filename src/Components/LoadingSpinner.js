import React from "react";
import styles from '../AppStyles.module.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const LoadingSpinner = () => {
    return (
        <div className={styles.loading_Spinner}>
            <ClimbingBoxLoader color={"#F37A24"} size={30} />
        </div>
    )
}

export default LoadingSpinner;