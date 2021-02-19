import React from "react";
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Job from './Job';



export default function Jobs (props) {
    const numJobs = props.jobs.length;
    const pageNum = Math.ceil(numJobs / 15);
    
    
    const [activeStep, setActiveStep] = React.useState(0);
    
    const jobsOnPage = props.jobs.slice(activeStep * 15, (activeStep * 15) + 15);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="jobs">
            <Typography varient="h2" component="h1">
                Entry Level Software Jobs
            </Typography>
            <Typography varient="h4" component="h4">
                Total {numJobs} jobs found
            </Typography>
            {
                jobsOnPage.map( job=> <Job job={job} /> )
            }
            <div>
                Page {activeStep + 1} of {pageNum}
            </div>
            <MobileStepper
                variant="progress"
                steps={pageNum}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === pageNum-1}>
                    Next
                    
                        <KeyboardArrowRight />
                   
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    
                        <KeyboardArrowLeft />
                    
                    Back
                    </Button>
                }
                />


        </div>
        
    )
}