import React, {useState} from "react";

function HOC (WrappedComponent) {
    function HOC() {
        const [count, setCount] = useState(0);
        const inc = () => {
          setCount(count + 1);
        };
        return (
            <>
                <WrappedComponent count= {count} inc ={inc} />
            </>
        );
    }

    return HOC
}

export default HOC;
