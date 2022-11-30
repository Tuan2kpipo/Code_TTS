import React from "react";

function TableLL({ data }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>title</th>
          <th>des</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableLL;
