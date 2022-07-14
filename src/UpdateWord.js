import React, { useRef } from "react";
import { WordWriteForm } from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import { updateWordFB } from "./redux/wordlist";
import { useParams, useNavigate } from "react-router-dom";

const UpdateWord = (props) => {
  const wid = useParams().word_id;
  const navigate = useNavigate()
  console.log(wid);
  const worddata = useSelector((state) => state.wordlist.get(wid));
  console.log("🔴", worddata);
  const wordRef = useRef();
  const proRef = useRef();
  const descRef = useRef();
  const ex1Ref = useRef();
  const ex2Ref = useRef();
  const dispatch = useDispatch();

  const updateWordOnClick = () => {
    dispatch(updateWordFB(wid, {
        word: wordRef.current.value,
        pronounce: proRef.current.value,
        desc: descRef.current.value,
        ex1: ex1Ref.current.value,
        ex2: ex2Ref.current.value,
        done: false
    }))
    navigate(-1)
  }
  return (
    <WordWriteForm>
      {worddata ? (
        <>
          <h1>단어 수정하기</h1>
          <div>단어</div>
          <input
            type="text"
            ref={wordRef}
            onChange={() => console.log(wordRef.current.value)}
            defaultValue={worddata["word"]}
          ></input>
          <div>발음</div>
          <input
            type="text"
            ref={proRef}
            onChange={() => console.log(wordRef.current.value)}
            defaultValue={worddata["pronounce"]}
            ></input>
          <div>설명</div>
          <input
            type="text"
            ref={descRef}
            onChange={() => console.log(wordRef.current.value)}
            defaultValue={worddata["desc"]}
            ></input>
          <div>예시</div>
          <input
            type="text"
            ref={ex1Ref}
            onChange={() => console.log(wordRef.current.value)}
            defaultValue={worddata["ex1"]}
            ></input>
          <div>예시해석</div>
          <input
            type="text"
            ref={ex2Ref}
            onChange={() => console.log(wordRef.current.value)}
            defaultValue={worddata["ex2"]}
            ></input>
          <div onClick={updateWordOnClick} className="button">수정하기</div>
        </>
      ) : (
        <h1>업성</h1>
      )}
    </WordWriteForm>
  );
};

export default UpdateWord;
