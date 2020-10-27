import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.contenedor selects{
  background-color: #528D93 ;
}
.conetenedor-select {
  color:white;
  &: hover{
    color:#94B046;
  }
}
`;

function ComboBoxTradeReportersImporters (props) {

    
        const{onChange}=props
        return (
            <Styles>

            <div className="contenedor-selects">
                <br></br>
                <select  name="Product" onChange={props.metodo}>
                    <option value="abaca">abaca</option>
                    <option value="apple">apple</option>
                    <option value="banana">banana</option>
                    <option value="barley">barley</option>
                    <option value="beans">beans</option>
                    <option value="beef">beef</option>
                    <option value="cassava">cassava</option>
                    <option value="cattle">cattle</option>
                    <option value="cattle">cattle</option>
                    <option value="cereal_other">cereal_other</option>
                    <option value="chicken">chicken</option>
                    <option value="chickens">chickens</option>
                    <option value="chickens">chickens</option>
                    <option value="chips_and__particles">chips and particles</option>
                    <option value="cirus_other">cirus other</option>
                    <option value="clove">clove</option>
                    <option value="cocoa">cocoa</option>
                    <option value="coconut">coconut</option>
                    <option value="cocooil">cocooil</option>
                    <option value="coffe">coffe</option>
                    <option value="corn">corn</option>
                    <option value="cottcake">cottcake</option>
                    <option value="cottlint">cottlint</option>
                    <option value="cottoil">cottoil</option>
                    <option value="cotton">cotton</option>
                    <option value="date">date</option>
                    <option value="eggs">eggs</option>
                    <option value="fiber_hard_other">fiber hard other</option>
                    <option value="fruit_soft_other">fruit soft other</option>
                    <option value="fruit_other">fruit other</option>
                    <option value="grape">grape</option>
                    <option value="grapefruit">grapefruit</option>
                    <option value="groundnut">groundnut</option>
                    <option value="groundnutcake">groundnutcake</option>
                    <option value="groundnutoil">groundnutoil</option>
                    <option value="honey">honey</option>
                    <option value="jute">jute</option>
                    <option value="lemon">lemon</option>
                    <option value="meat_other">meat other</option>
                    <option value="mech_pulp">mech pulp</option>
                    <option value="milk">milk</option>
                    <option value="millet">millet</option>
                    <option value="mutton_goat">mutton_goat</option>
                    <option value="nuts">nuts</option>
                    <option value="oats">oats</option>
                    <option value="oilpalmfruit">oilpalmfruit</option>
                    <option value="oilseed_other">oilseed other</option>
                    <option value="olive">olive</option>
                    <option value="oliveoil">oliveoil</option>
                    <option value="onion">onion</option>
                    <option value="orange">orange</option>
                    <option value="other_oil">other oil</option>
                    <option value="other_olscake">other olscake</option>
                    <option value="palm_oil">palm oil</option>
                    <option value="palmkernelcake">palmkernelcake</option>
                    <option value="palmkerneloil">palmkerneloil</option>
                    <option value="peas">peas</option>
                    <option value="pepper">pepper</option>
                    <option value="pigs">pigs</option>
                    <option value="pigs">pigs</option>
                    <option value="piment">piment</option>
                    <option value="pinapple">pinapple</option>
                    <option value="plantain">plantain</option>
                    <option value="pork">pork</option>
                    <option value="potato">potato</option>
                    <option value="pulses_other">pulses other</option>
                    <option value="repecake">repecake</option>
                    <option value="rapeoil">rapeoil</option>
                    <option value="rapeseed">rapeseed</option>
                    <option value="rice">rice</option>
                    <option value="rubber">rubber</option>
                    <option value="rye">rye</option>
                    <option value="sesame">sesame</option>
                    <option value="sesamoil">sesamoil</option>
                    <option value="sheep_goats">sheep goats</option>
                    <option value="sheep_goats">sheep_goats</option>
                    <option value="sisal">sisal</option>
                    <option value="sorghum">sorghum</option>
                    <option value="soyabean">soyabean</option>
                    <option value="soycake">soycake</option>
                    <option value="soyoil">soyoil</option>
                    <option value="spices_other">spices other</option>
                    <option value="sugarbeet">sugarbeet</option>
                    <option value="sugarcarne">sugarcarne</option>
                    <option value="sugarraw">sugarraw</option>
                    <option value="sunflcake">sunflcake</option>
                    <option value="sunfloil">sunfloil</option>
                    <option value="sunflower">sunflower</option>
                    <option value="sweet_potato">sweet_potato</option>
                    <option value="tea">tea</option>
                    <option value="tabacco">tabacco</option>
                    <option value="tomato">tomato</option>
                    <option value="tuber_other">tuber other</option>
                    <option value="vegetable_other">vegetable other</option>
                    <option value="wheat">wheat</option>
                    <option value="yams">yams</option>



                    
                </select>
                <br></br>
                <select  name="iteration" onChange={props.metodo}>
                    <option value="after">after</option>
                    <option value="before">before</option>
                </select>
              
            </div>
    </Styles>


        )
    
}
export default ComboBoxTradeReportersImporters;

