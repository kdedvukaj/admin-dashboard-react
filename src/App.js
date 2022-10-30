import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { useState } from "react";

function App() {
  const [closeSidebar, setCloseSidebar] = useState(true);

  function toggleSidebar() {
    setCloseSidebar((prevClose) => !prevClose);
  }
  return (
    <div className="container">
      <Routes>
        <Route path="/">
          <Route
            index
            element={<Home closeSdb={closeSidebar} toggleSdb={toggleSidebar} />}
          />
          <Route path="login" element={<Login />} />
          <Route path="librarians">
            <Route index element={<List />} />
            <Route path=":librarianId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="students">
            <Route index element={<List />} />
            <Route path=":studentId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="books">
            <Route index element={<List />} />
            <Route path=":bookId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
