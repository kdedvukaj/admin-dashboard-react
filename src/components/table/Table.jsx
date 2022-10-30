import { Link } from "react-router-dom";

function Table() {
  const rows = [
    {
      id: 1,
      fullName: "Pero Perovic",
      book: "Tom Sojer",
      date: "31.04.2019",
      src: "./img/profil-pero.jpg",
    },
    {
      id: 2,
      fullName: "Nikolina Nikolic",
      book: "Ilijada",
      date: "25.11.2022",
      src: "./img/prof-two.jpg",
    },
    {
      id: 3,
      fullName: "Pero Perovic",
      book: "Robin Sharma",
      date: "26.02.2022",
      src: "./img/profil-pero.jpg",
    },
    {
      id: 4,
      fullName: "Jelena Vukovic",
      book: "Budni u 5",
      date: "10.03.2022",
      src: "./img/prof-three.jpg",
    },
  ];
  return (
    <table>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.id}>
              <td className="img-name">
                <div>
                  <img src={row.src} alt="" />
                  <span>
                    <Link>{row.fullName}</Link>
                  </span>
                </div>
              </td>
              <td>{row.book}</td>
              <td>{row.date}</td>
              <td className="akcija">
                <div>
                  <i className="bx bx-check"></i>DA -<i className="bx bx-x"></i>
                  NE
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
