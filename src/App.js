import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { useState } from "react";

import { librariansData } from "./components/data/data";

function App() {
  const [closeSidebar, setCloseSidebar] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openProf, setOpenProf] = useState(false);

  function toggleSidebar() {
    setCloseSidebar((prevClose) => !prevClose);
  }

  function toggleDropdown() {
    setOpenDropdown((prevOpen) => !prevOpen);
  }

  function toggleProf() {
    setOpenProf((prevOpen) => !prevOpen);
  }
  return (
    <>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home
                closeSdb={closeSidebar}
                toggleSdb={toggleSidebar}
                openDrp={openDropdown}
                toggleDrp={toggleDropdown}
                openProf={openProf}
                toggleProf={toggleProf}
              />
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="librarians">
            <Route
              index
              element={
                <List
                  closeSdb={closeSidebar}
                  toggleSdb={toggleSidebar}
                  openDrp={openDropdown}
                  toggleDrp={toggleDropdown}
                  openProf={openProf}
                  toggleProf={toggleProf}
                  pageName="Bibliotekari"
                  data={librariansData}
                />
              }
            />
            <Route path=":librarianId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="students">
            <Route
              index
              element={
                <List
                  closeSdb={closeSidebar}
                  toggleSdb={toggleSidebar}
                  openDrp={openDropdown}
                  toggleDrp={toggleDropdown}
                  openProf={openProf}
                  toggleProf={toggleProf}
                  pageName="Ucenici"
                />
              }
            />
            <Route path=":studentId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="books">
            <Route
              index
              element={
                <List
                  closeSdb={closeSidebar}
                  toggleSdb={toggleSidebar}
                  openDrp={openDropdown}
                  toggleDrp={toggleDropdown}
                  openProf={openProf}
                  toggleProf={toggleProf}
                  pageName="Knjige"
                />
              }
            />
            <Route path=":bookId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
