import React, { useEffect, useState } from 'react';
import ExperiencedSingle from './ExperiencedSingle';

const ExperiencedJobs = () => {

    const [experienced, setExperienced] = useState([]);
    // console.log(fresher);
    useEffect(() => {
        fetch('http://localhost:5000/experienced')
            .then(res => res.json())
            .then(data => setExperienced(data))
    }, [])

    return (
        <div className='my-9'>
            <h1 className='text-4xl text-center text-purple-500 font-bold'>Experienced Jobs</h1>

            <div className="my-9 grid grid-rows-6 lg:grid-rows-2 grid-flow-col gap-4">

                {
                    experienced.map((experience, i) => <ExperiencedSingle
                        key={i}
                        experience={experience}
                    ></ExperiencedSingle>)
                }
            </div>
        </div>
    );
};

export default ExperiencedJobs;