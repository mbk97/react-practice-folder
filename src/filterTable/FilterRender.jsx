import React, { useState } from "react";
import { data } from "./data";

const FilterRender = () => {
  const [query, setQuery] = useState("");

  const keys = ["firstName", "country"];

  //   const newData = data.filter(
  //     (item) =>
  //       item.firstName.toLocaleLowerCase().includes(query) ||
  //       item.lastName.toLocaleLowerCase().includes(query),
  //   );

  //   a more reliable method
  const newData = data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query)),
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <div>
        <input
          type="text"
          className="mt-8 w-[300px] h-[45px] rounded text-[black] outline-none border-[0px] p-4"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <table className="w-4/5  mt-14">
        <thead>
          <tr key="" className="text-left">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FilterRender;
