import React, {useEffect} from 'react';

const FunctionComp = (props) => {
    console.log('FunctionComp Render');

    useEffect(() => {
        return () => {
            console.log("FunctionComp => REturn")
        };
    }, []);


    return (
        <div>
            <h2>FunctionComp</h2>
        </div>
    );
};

export default FunctionComp;
