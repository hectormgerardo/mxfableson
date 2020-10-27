import React from "react";

export default[
    {
        target: ".graphs",
        content: "Se habla acerca de Fable",
        title: "You can have a title here!",
          styles: {
            //this styles override the styles in the props
            options: {
              textColor: "black"
            }
          },
          locale: { 
            next: <span>Next</span>,
          },
          placement: "top"
    },
    {
        target: ".About1",
        content: "Se habla acerca de Fable",
        title: "You can have a title here!",
          styles: {
            //this styles override the styles in the props
            options: {
              textColor: "black"
            }
          },
          locale: { 
            next: <span>End Tour</span>,
            back: <span>Back</span>
          },
          placement: "top"

    }
]