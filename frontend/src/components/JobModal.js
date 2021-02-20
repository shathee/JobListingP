import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Typography } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function JobModal(props) {

    if(!props.job.title){
        return <div />
    }

    console.log(props.job)
    return (
        <div>
            
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    
                    <div class="job-company-logo">
                        <img src={props.job.company_logo} />
                        <span class="job-company-name">{props.job.company}</span>
                    </div>
                    <div class="job-company-title-info">
                        {props.job.title}
                        
                    </div>
                    
                </DialogTitle>
                <DialogContent>
                
                   {props.job.description}
                  
                
                </DialogContent>
                <DialogActions>
                <Button onClick={props.handleClose}>Disagree</Button>
                <Button onClick={props.handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}