
import './App.css'
import { Route, Routes } from 'react-router-dom';
import QuestionBlock__Page from './pages/questionBlock__Page/questionBlock__Page';
import LogIn from './pages/log_in__Page/LogIn';
import SignUp from './pages/sign_up__Page/SignUp';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/questionsblock" element={<QuestionBlock__Page />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
