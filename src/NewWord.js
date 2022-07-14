import React, {useRef} from "react"
import { WordWriteForm } from "./Styles"
import { useDispatch } from "react-redux"
import { createWordFB } from "./redux/wordlist"
import { useNavigate } from "react-router-dom"

const NewWord = (props) => {
    // const [wordRef,  proRef, descRef, ex1Ref, ex2Ref] = Array(5).fill(useRef())
    const wordRef = useRef()
    const proRef = useRef()
    const descRef = useRef()
    const ex1Ref = useRef()
    const ex2Ref = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const newWord = () => {
        dispatch(createWordFB({
            word: wordRef.current.value,
            pronounce: proRef.current.value,
            desc: descRef.current.value,
            ex1: ex1Ref.current.value,
            ex2: ex2Ref.current.value,
            done: false
        }))
        navigate(-1)
    }
    return(
        <>
        <WordWriteForm>
            <h1>단어 추가하기</h1>
            <div>단어</div>
            <input type="text" ref={wordRef} onChange={() => console.log(wordRef.current.value)}></input>
            <div>발음</div>
            <input type="text" ref={proRef} onChange={() => console.log(wordRef.current.value)}></input>
            <div>설명</div>
            <input type="text" ref={descRef} onChange={() => console.log(wordRef.current.value)}></input>
            <div>예시</div>
            <input type="text" ref={ex1Ref} onChange={() => console.log(wordRef.current.value)}></input>
            <div>예시해석</div>
            <input type="text" ref={ex2Ref} onChange={() => console.log(wordRef.current.value)}></input>
            <div className="button" onClick={newWord}>추가하기</div>
        </WordWriteForm>
        </>
    )
}
export default NewWord