import React from 'react';

const ExperiencedSingle = ({ experience }) => {
    const { Position, Job_Location, Company_Name, img } = experience;
    return (
        <div>
            <div className="card shadow-xl">
                <figure><img src={img} alt='Images' /></figure>
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

export default ExperiencedSingle;