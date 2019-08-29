import React, {useEffect, useState} from 'react';


const FunctionComp = (props) => {
    const [trigger, setTrigger] = useState(0);

    console.log('FunctionComp Render');
    const newData = useCustomEffect(trigger);
    console.log('FunctionComp Render  Data == ', newData);

    const onClick = e => {
        setTrigger( state=> state + 1);
    };

    return (
        <div>
            <h2>FunctionComp</h2>
            <h3>{newData}</h3>
            <br/>
            <h3>{trigger}</h3>
            <button onClick={ onClick }>Triggered</button>

        </div>
    );
};

export default FunctionComp;




function useCustomEffect (trigger) {
    const [data, setData] = useState(0);
    console.log('useCustomEffect Return', data);

    useEffect( ()=>{
        if (data < 5) {
            console.log('useCustomEffect => Effect', data);

            const set = () => setData( (state)=> {
                console.log('useCustomEffect => setData', state);

                return state + 1
            });
            setTimeout( set, 1500);

           // set();
        }
    }, [trigger]);

    return data;
}