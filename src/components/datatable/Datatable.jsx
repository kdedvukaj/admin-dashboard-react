import React from "react";
import { Link } from "react-router-dom";

function Datatable({ data }) {
  return (
    <table id="searchTable">
      <thead>
        <tr id="table-head">
          <th>
            <input
              id="main-check"
              type="checkbox"
              onClick="toggleCheck(this)"
            />
          </th>
          <th>Ime i prezime</th>
          <th>Email</th>
          <th>Tip korisnika</th>
          <th>Online</th>
          <th>Izmijeni</th>
          <th>Izbrisi</th>
        </tr>
        <tr id="delete-table" className="hide">
          <th>
            <input
              type="checkbox"
              onClick="toggleCheckRemove(this)"
              defaultChecked
            />
          </th>
          <th>
            <Link>Izbrisi sve</Link>
          </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr id="edit-table" className="hide">
          <th></th>
          <th>
            <Link>Resetuj sifru</Link>
          </th>
          <th>
            <Link>Izmijeni korisnika</Link>
          </th>
          <th>
            <Link>Izbrisi korisnika</Link>
          </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((info) => {
          return (
            <tr key={info.id}>
              <td>
                <input
                  type="checkbox"
                  name="check"
                  onclick="toggleCheckHide(this)"
                />
              </td>
              <td className="img-name">
                <div>
                  <img src={info.src} alt="" />
                  <span>
                    <Link>{info.name}</Link>
                  </span>
                </div>
              </td>
              <td>{info.email}</td>
              <td>{info.type}</td>
              <td>{info.online}</td>
              <td className="edit">
                <i className="bx bx-edit"></i>
              </td>
              <td className="delete">
                <i onclick="deleteRow(this)" className="bx bx-trash"></i>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Datatable;
