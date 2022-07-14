import React from "react";
import { Card, ToolBox } from "./Styles";
import { deleteWordFB, updateWordFB } from "./redux/wordlist";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"


const WordCard = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const deleteOnClick = () => {
    // confirm("??")
    const res = window.confirm("진짜 지움?")
    if(res){
        console.log(props.word_id);
        dispatch(deleteWordFB(props.word_id))
    }
  }
  const doneOnClick = () => {
    dispatch(updateWordFB(props.word_id, {done: !props.data.done}))
  }
  return (
    <Card key={props.data.id} done={props.data.done}>
      <ToolBox>
        {!props.data.done ? (
          <span onClick={doneOnClick} className="material-symbols-rounded">done_outline</span>
        ) : (
          <span onClick={doneOnClick} className="material-symbols-rounded">done</span>
        )}
        <span onClick={() => navigate('/update/'+props.word_id)}className="material-symbols-rounded">edit_square</span>
        <span onClick={deleteOnClick} className="material-symbols-rounded">close</span>
      </ToolBox>
      <div className="word">{props.data.word}</div>
      <div className="pronounce">{props.data.pronounce}</div>
      <div className="desc">
        {props.data.desc}
      </div>
      <div className="ex1">{props.data.ex1}</div>
      <div className="ex2">{props.data.ex2}</div>
    </Card>
  );
};

export default WordCard;
