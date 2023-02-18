import React, { useEffect, useState } from 'react';
import FresherSingleCard from './FresherSingleCard';

const FresherJob = () => {

    const [freshers, setFreshers] = useState([]);
    // console.log(fresher);
    useEffect(() => {
        fetch('http://localhost:5000/fresher')
            .then(res => res.json())
            .then(data => setFreshers(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl text-center text-purple-500 font-bold'>Fresher's Job</h1>

            <div className="my-6 grid grid-rows-6 lg:grid-rows-2 grid-flow-col gap-4">

                {
                    freshers.map((fresher, i) => <FresherSingleCard
                        key={i}
                        fresher={fresher}
                    ></FresherSingleCard>)
                }
            </div>
        </div>
    );
};

export default FresherJob;