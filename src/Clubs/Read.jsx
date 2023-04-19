import React from "react";

const Read = ({ data }) => {
  return (
    <div>
      <table className="w-[100%]">
        <thead>
          <tr className="border-b-2 border-[grey]">
            <th>Index</th>
            <th>Club</th>
            <th>Captain Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((captain, index) => {
            return (
              <tr key={captain.id}>
                <td className="text-center">{index}</td>
                <td className="text-center">{captain.football_club}</td>
                <td className="text-center">{captain.name}</td>
                <td className="text-center">
                  <button>update</button>
                </td>
                <td className="text-center">
                  <button className="bg-[red] text-[white] p-[10px] rounded-[5px]">
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {data?.length === 0 && <p className="text-center mt-2">Data not found</p>}
    </div>
  );
};

export default Read;
