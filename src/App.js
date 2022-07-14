import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { theme, Header, Container } from "./Styles";
import NewWord from "./NewWord";
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import { loadWordFB } from "./redux/wordlist";
import UpdateWord from "./UpdateWord";

function App() {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadWordFB())
  })
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <div>영어 단어장</div>
        </Header>

        <Router>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/new" element={<NewWord />}></Route>
            <Route path="/update/:word_id" element={<UpdateWord />}></Route>
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
