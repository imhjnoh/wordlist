import React from "react";
import styled from "styled-components";
import AbcIcon from "@mui/icons-material/Abc";

const Spinner = (props) => {
  return (
    <Outter>
      <SpinIcon />
    </Outter>
  );
};

const Outter = styled.div`
  /* background-color: ${(props) => props.theme.main}; */
  width: 100%;
  height: 80vh;
  z-index: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    animation: spin 1.5s infinite ease;
  }
  @keyframes spin {
    0%  {-webkit-transform: rotate(0deg);}
    100% {-webkit-transform: rotate(360deg);}   
    }
`;

const SpinIcon = styled(AbcIcon)`
    color: ${props => props.theme.main};
    font-size: 200px !important;
`

export default Spinner;
