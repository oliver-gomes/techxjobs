import React from 'react';
import './SingleJob.css';

export default function SingleJob({ job }) {

    return (
        <div className="job">
            {job.title}
            {job.company}
        </div>
    )
}
