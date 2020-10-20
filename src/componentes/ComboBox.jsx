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

                <Form>
                  <Form.Control name="Scenario" onChange={onChange} as="select" custom>
                    <option value="Sustainaible">Sustainaible</option>
                    <option value="Current_trend">Current trend</option>
                  </Form.Control>
                </Form>


                {/*<select  name="Scenario" onChange={onChange}>
                    <option value="Sustainaible">Sustainaible</option>
                    <option value="Current_trend">Current trend</option>
                   </select>*/}
                <br></br>
                <Form>
                  <Form.Control name="Iteration" onChange={onChange} as="select" custom>
                    <option value="iteration_4">iteration:4</option>
                    <option value="iteration_3">iteration:3</option>
                  </Form.Control>
                </Form>
                {/*<select  name="Iteration" onChange={onChange}>
                    <option value="iteration_4">iteration:4</option>
                    <option value="iteration_3">iteration:3</option>
                  </select>*/}
                <br></br>
                <Form>
                  <Form.Control name="GraficaType" onChange={onChange} as="select" custom>
                    <option value="regions">ALL ROW regions</option>
                    <option value="countries">ALL FABLE countries</option>
                  </Form.Control>
                </Form>

                 {/*<select  name="GraficaType" onChange={onChange}>
                    <option value="group">Group</option>
                    <option value="regions">ALL ROW regions</option>
                    <option value="countries">ALL FABLE countries</option>
                </select>*/}
                <br></br>
            </div>
    </Styles>


        )
    
}
export default ComboBox;

