import React from "react";
import Typography from '@material-ui/core/Typography';
import Job from './Job';

export default function Jobs (props) {
    return (
        <div className="jobs">
            <Typography varient="h1">
                Entry Level Software Jobs
            </Typography>
            {
                props.jobs.map( job=> <Job job={job} />)
            }
        </div>
        
    )
}