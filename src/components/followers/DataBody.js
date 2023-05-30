import React from "react";
import "./styles/DataBody.css";

function DataBody({ users }) {
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture}) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="Name" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataBody;
