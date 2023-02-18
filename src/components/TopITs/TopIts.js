import React, { useEffect, useState } from 'react';
import TopSingle from './TopSingle';

const TopIts = () => {

    const [tops, setTop] = useState([]);
    // console.log(fresher);
    useEffect(() => {
        fetch('http://localhost:5000/experienced')
            .then(res => res.json())
            .then(data => setTop(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl text-center text-purple-500 font-bold'>Top IT Companies</h1>

            <div className="my-9 grid grid-rows-6 lg:grid-rows-2 grid-flow-col gap-4">

                {
                    tops.map((top, i) => <TopSingle
                        key={i}
                        top={top}
                    ></TopSingle>)
                }
            </div>

        </div>
    );
};

export default TopIts;