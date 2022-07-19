import styled from "styled-components";

export const theme = {
  main: "#A27B5C",
  primary: "#3F4E4F",
  secondary: "#A27B5C",
  dark: "#2C3639",
  light: "#DCD7C9",
};

export const Container = styled.div`
  background-color: ${(props) => props.theme.light};
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Header = styled.header`
  color: ${(props) => props.theme.dark};
  /* background-color: ${(props) => props.theme.light}; */
  height: 4rem;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  border-top: 5px double ${(props) => props.theme.main};
  border-bottom: 5px double ${(props) => props.theme.primary};
  font-weight: 600;
  width: 100%;
  text-shadow: 3px 3px 0px white;
`;

export const NewButton = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 15px;
  right: 15px;
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.theme.main};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 5rem;
  transform: rotate(0turn);
  cursor: pointer;
  box-shadow: 0px 0px 5px ${(props) => props.theme.dark};
  border: 5px solid ${(props) => props.theme.light};
  span {
    font-size: 2.5rem;
    font-weight: 700;
    transition: 0.5s all ease;
    &:hover {
      transform: rotate(0.5turn);
    }
  }
`;

export const WordContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1500px;
  padding: 1em;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 15px;
`;

export const Card = styled.div`
  padding: 1.5em;
  border: 1px dashed ${(props) => props.theme.primary};
  border-radius: 10px;
  position: relative;
  height: fit-content;
  transition: 0.2s all ease-in;
  background-color: ${(props) =>
    props.done ? props.theme.primary : "transparent"};
  * {
    margin-bottom: 2px;
    color: ${(props) => (props.done ? "white" : "auto")} !important;
  }
  &:hover {
    box-shadow: 0 0 10px #aaa;
    border-style: solid;
  }
  .word {
    font-size: 2em;
    color: ${(props) => props.theme.dark};
  }
  .pronounce {
    color: ${(props) => props.theme.secondary};
  }
  .desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .ex1 {
    color: dodgerblue;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ex2 {
    color: dodgerblue;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ToolBox = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  span {
    margin: 0;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      color: ${(props) => props.theme.main};
    }
  }
  span:nth-child(2) {
    margin-top: -4px;
  }
`;

export const WordWriteForm = styled.div`
  padding: 15px;
  color: ${(props) => props.theme.primary};

  input {
    margin-bottom: 30px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.main};
    height: 2rem;
    font-size: 1rem;
    margin-left: 0;
    padding-left: 10px;
    border-radius: 10px;
  }
  .button {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.light};
    width: fit-content;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
  }
`;
