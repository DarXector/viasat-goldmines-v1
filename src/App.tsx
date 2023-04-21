import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import {Layout} from "./routes/Layout";
import {StartPage} from "./routes/StartPage";
import {LoginPage} from "./routes/LoginPage";
import {RequireAuth} from "./routes/RequireAuth";
import {QuestionPage} from "./routes/QuestionPage";
import {AboutPage} from "./routes/AboutPage";
import {HowToPage} from "./routes/HowToPage";
import {RankingPage} from "./routes/RankingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/howto" element={<HowToPage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route
              path="/quiz"
              element={
                <RequireAuth>
                  <QuestionPage />
                </RequireAuth>
              }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
