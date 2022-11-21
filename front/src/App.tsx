import GlobalStyles from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from './styles/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/mainpage/Main';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NeckSurvey from './pages/necksurvey/NeckSurvey';
import SurveyResult from './pages/surveyresult/SurveyResult';
import AboutNeck from './pages/aboutneck/AboutNeck';
function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/necksurvey' element={<NeckSurvey/>}/>
          <Route path='/surveyresult' element={<SurveyResult/>}/>
          <Route path='/aboutneck' element={<AboutNeck/>}/>

        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
