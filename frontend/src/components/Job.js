import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './css/Job.css'

export default function Job (props) {
    return (
        <Paper onClick={props.onClick} className="job">
            <div>
            <Typography variant="h6" align="left">
                {props.job.title}
            </Typography>
            <Typography variant="h5" align="left">
                {props.job.company}
            </Typography>
            <Typography align="left">
                {props.job.location}
            </Typography>
            </div>
            <div>
            <Typography>
                {props.job.created_at.split(' ').slice(0, 3).join(' ')}
            </Typography>
            </div>
            
        </Paper>
    )
}