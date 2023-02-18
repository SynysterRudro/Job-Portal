import React, { useState } from 'react';
import ExperiencedJobs from '../ExperiencedJobs/ExperiencedJobs';
import FresherJob from '../FresherJob/FresherJob';
import TopIts from '../TopITs/TopIts';

const Home = () => {
    const [status, setStatus] = useState(false);

    return (
        <div className='my-8'>
            <div className="hero ">
                <div className="hero-content text-center">
                    <div className="max-w-md">

                        {
                            status ?
                                <>
                                    <h1 className="text-5xl font-bold">Job Portal Seeker</h1>
                                    <p className="py-6">Here anyone can find their job easily</p>
                                    <button onClick={() => setStatus(false)} className='btn btn-primary'>Job Poster</button>
                                </>
                                :
                                <>
                                    <h1 className="text-5xl font-bold">Job Poster</h1>
                                    <p className="py-6">Here anyone can find their job easily</p>

                                    <button onClick={() => setStatus(true)} className='btn btn-primary'>Job Seeker</button>
                                </>
                        }
                    </div>
                </div>
            </div>


            <FresherJob className='my-4'></FresherJob>
            <ExperiencedJobs className='my-4'></ExperiencedJobs>
            <TopIts className='my-4'></TopIts>



        </div>
    );
};

export default Home;