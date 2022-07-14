import React, { useEffect } from "react";
import { WordContainer, NewButton } from "./Styles";
import WordCard from "./WordCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = (props) => {
  const navigate = useNavigate();
  const wordlist = useSelector((state) => state.wordlist);
  console.log(wordlist);

  useEffect(() => {
  }, [wordlist]);

  return (
    <WordContainer>
      <NewButton onClick={() => navigate(`/new`)}>
        <span className="material-symbols-rounded">add</span>
      </NewButton>
      {wordlist ? [...wordlist].map(([key, val]) => {
        console.log(key, val);
        return <WordCard key={key} word_id={key} data={val} />;
      }) : "데이터가 없습니다"}
    </WordContainer>
  );
};

export default Home;
