import React from 'react';

const TopSingle = ({ top }) => {
    const { Position, Job_Location, Company_Name } = top;
    return (
        <div>
            <div className="card bg-purple-100  shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">{Position}</h2>
                    <p>{Job_Location}</p>
                    <p>{Company_Name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Apply now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSingle;