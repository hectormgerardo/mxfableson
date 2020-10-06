import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`
.contenedor-selects{
  background-color: #528D93 ;
}
.contenedor-selects-select {
  color:white;
  &: hover{
    color:#94B046;
  }
}
`;


function Dashboard (props) {

    
        const{metodo}=props
        return (
          
            <div className="contenedor-selects">
                <select  name="dashboard" onChange={metodo}>
                    <option value="gts">Global Target Summary </option>
                    <option value="ntch">Net Forest Cover Change(1)</option>
                    <option value="ntch2">Net Forest Cover Change(2)</option>
                    <option value="biodeversity">Biodeversity</option>
                    <option value="pabt">Protected areac by type </option>
                    <option value="lc">Land Cover</option>
                    <option value="fwu">Fresh water use (1)</option>
                    <option value="fwu2">Fresh water use (2)</option>
                    <option value="gge">GreenHouse Gas(GHG) Emissions(1)</option>
                    <option value="gge2">GreenHouse Gas(GHG) Emissions(2)</option>
                    <option value="feipc">Food energy intake per capita (1)</option>
                    <option value="feipc2">Food energy intake per capita (2)</option>
                    
                </select>
                
                
    
            </div>

        )
    
}
export default Dashboard;

