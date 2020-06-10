import React from "react";

function Table({ data }) {
  return (
    <>
      {!(data.rows.length === 0) && (
        <table>
          <thead>
            <tr className="w-full">
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                first_name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                last_name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                email
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                country
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                car_model_year
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                gender
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                job_title
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                bio
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {data.rows.map((row) => (
              <tr className="odd:bg-gray-100" key={row._id}>
                {Object.keys(row).map((key) => (
                  <td
                    className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                    key={`${row._id}-${key}`}
                  >
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
