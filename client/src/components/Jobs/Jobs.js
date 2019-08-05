import React from 'react';
import Typography from '@material-ui/core/Typography';
import SingleJob from '../SingleJob/SingleJob';


export default function Jobs({ jobs }) {
    console.log(jobs)
    return (
        <div className="jobs">
            <Typography variant="h1">Entry Level Software Jobs</Typography>
            {jobs.map(
                (job, i) =>
                    <SingleJob key={i} job={job} />
            )}
        </div>
    )
}
