import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const pageSizeNo = 20;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSizeNo}
                country={"us"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                keu="business"
                pageSize={pageSizeNo}
                country={"us"}
                category={"business"}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSizeNo}
                country={"us"}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSizeNo}
                country={"us"}
                category={"general"}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSizeNo}
                country={"us"}
                category={"health"}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSizeNo}
                country={"us"}
                category={"science"}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSizeNo}
                country={"us"}
                category={"sports"}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSizeNo}
                country={"us"}
                category={"technology"}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
