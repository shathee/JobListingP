import React from "react";
import Typography from '@material-ui/core/Typography';
import './css/Job.css'

export default function Job (props) {
    return (
        <div className="job">
            {props.job.title}
            {props.job.company}
        </div>
    )
}