import React from "react";
import {FadeLoader} from "react-spinners";

const Loading = () => {
    return (
        <>
            <div className='flex-center absolute inset-0 ' >
                <FadeLoader color="#36d7b7"/>
            </div>
        </>
    );
}

export default Loading;