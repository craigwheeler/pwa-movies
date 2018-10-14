import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ToTopContainer = styled.div`
  position: fixed;
  bottom: 1em;
  right: 1em;
`;
export default class ToTop extends React.Component {
    toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render() {
        <ToTopContainer>
            <button onClick={this.toTop} inverted circular icon='arrow up'/>
        </ToTopContainer>
    }
}

