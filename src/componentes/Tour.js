import React from "react"
import ReactJoyride from 'react-joyride';
import steps from "./TOUR_STEPS"


const Tour = () => {
    return (
          <ReactJoyride
          steps={steps}
          continuous={true}
          showProgress
          showSkipButton
          styles={{
           options: {
              // modal arrow and background color
              arrowColor: "#012758",
              backgroundColor: "#fff",
              // page overlay color
              overlayColor: "rgba(0, 0, 0, 0.5)",
              //button color
              primaryColor: "#012758",
              //text color
              textColor: "#fff",
          
              //width of modal
              width: 500,
              //zindex of modal
              zIndex: 1000
          }
      }}
        />
    );
  };
  
export default Tour;