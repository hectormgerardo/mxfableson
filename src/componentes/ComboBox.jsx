import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const Styles = styled.div`
.contenedor selects{
  background-color: #528D93;
}
.conetenedor-select {
  color:white;
  &: hover{
    color:#94B046;
  }
}
`;

function ComboBox (props) {

    
        const{onChange}=props
        return (
            <Styles>
            <div className="contenedor-selects">
                <br></br>
                <select  name="scenathon_id" onChange={onChange}>
                    <option value="6">Sustainaible</option>
                    <option value="5">Current trend</option>
                    
                </select>
                <br></br>
                <select  name="Iteration" onChange={onChange}>
                    <option value="after">after</option>
                    <option value="before">before</option>
                </select>
                <br></br>
               {/*
                <Form>
                  <Form.Control name="GraficaType" onChange={onChange} as="select" custom>
                  <option value="group">Group</option>
                    <option value="regions">ALL ROW regions</option>
                    <option value="countries">ALL FABLE countries</option>
                  </Form.Control>
                </Form>
*/}
                <select  name="GraficaType" onChange={onChange}>
                    <option value="group">Group</option>
                    <option value="regions">ALL ROW regions</option>
                    <option value="countries">ALL FABLE countries</option>
                </select>
                <br></br>
            </div>
    </Styles>


        )
    
}
export default ComboBox;

