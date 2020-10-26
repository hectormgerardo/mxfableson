import React from 'react';
import styled from 'styled-components';

const Styles= styled.div`

.about-container{
overflow:hidden;
background-color:transparent;
padding: 0 3%;
align-items:center;
margin:0;

justify-content:space-between;
margin-bottom:30px;
width:100%;

.about-title{
    text-align:left;
    color:#306973;
    font-size:35px;
    font-weight: bold;
   
    margin-right:20px;
}

.about-content{
    color:#4E4E4E;
    text-align:left;
    font-size:20px;
   
    padding:10px;
}
}

`;

const About1=()=>{
return(
<Styles>
<div className="about-container">
<div className="about-title">Food, Agriculture, Biodiversity, Land and Energy Consortium</div>
<div className="about-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla et eros eu eleifend. Ut sit amet tristique libero. Suspendisse purus nulla, pharetra non aliquam quis, sollicitudin vitae nisl. Sed nisl ipsum, dignissim sit amet lorem non, porttitor tincidunt arcu. Donec nec lectus a nisi suscipit rhoncus at sit amet quam. Praesent bibendum augue odio. Maecenas et arcu mauris. Aenean ipsum mauris, malesuada a pellentesque in, fringilla ac nulla. Donec aliquet ornare velit ut efficitur. Curabitur ac ex lorem. Vestibulum lectus ligula, posuere ac pulvinar ut, porta at dui. Integer a auctor elit, eleifend aliquam ligula. Vivamus tempus elit ac erat rhoncus fermentum in et odio.
Nunc volutpat ultrices volutpat. Nullam id arcu enim. Nam dictum nibh scelerisque quam pulvinar ultrices nec vitae sem. Maecenas rhoncus, neque vel ullamcorper vehicula, quam quam vestibulum odio, vel volutpat augue lectus vel dui. Duis sit amet efficitur magna. Maecenas eu rhoncus lorem. Aliquam erat volutpat. Nullam at pretium felis. Suspendisse ultricies turpis eget elit vestibulum, in lacinia turpis porttitor. Vivamus commodo volutpat nulla eu viverra. Maecenas non dignissim justo. Fusce imperdiet varius enim, sed lacinia diam sagittis gravida. Sed at convallis dui, eget commodo orci. Nullam blandit molestie mauris, ut euismod ligula maximus eu. Donec sed enim et odio facilisis eleifend at at purus. Vestibulum condimentum, felis faucibus tempor porta, ante odio sollicitudin metus, vel mollis odio eros eget ipsum.
</div>

</div>


</Styles>


)
};
export default About1;