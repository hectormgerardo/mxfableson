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
              arrowColor: "gray",
              backgroundColor: "white",
              // page overlay color
              overlayColor: "rgba(0.7, 0.7, 0.7, 0.4)",
              //button color
              primaryColor: "green",
          
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