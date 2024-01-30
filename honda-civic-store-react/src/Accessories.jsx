import { useState, useEffect } from "react";

function Accessories() {
  const [accessories, setAccessories] = useState([]);
  const getAccessories = function () {
    fetch("http://localhost:3000/accessories")
      .then((response) => response.json())
      .then((data) => {
        setAccessories(data);
      });
  };
  useEffect(() => {
    getAccessories();
  }, []);
  return (
    <div className="page">
      <h1>Accessories</h1>
      <table>
        <tbody>
          <tr>
            <th>Accessory Name </th>
            <th>Accessory Desc </th>
            <th>Accessory price </th>
          </tr>
          {accessories.map((accessory) => {
            return (
              <tr key={accessory.accessoryName}>
                <td>{accessory.accessoryName}</td>
                <td>{accessory.description}</td>
                <td>{accessory.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      ;
    </div>
  );
}
export default Accessories;
