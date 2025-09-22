import React from "react";

const Home = () => {
  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)]">
      <div className="w-full grid grid-cols-5 gap-3 my-4">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border-2  text-gray-800 border-gray-300 rounded-sm outline-none h-8 px-2"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="Address"
            className="w-full border-2 text-gray-800 border-gray-300 rounded-sm outline-none h-8 px-2"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            className="w-full border-2 text-gray-800 border-gray-300 rounded-sm outline-none h-8 px-2"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Message</label>
          <input
            type="text"
            placeholder="Message "
            className="w-full border-2 text-gray-800 border-gray-300 rounded-sm outline-none h-8 px-2"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Publish Date</label>
          <input
            type="date"
            placeholder="Publish Date"
            className="w-full border-2 text-gray-800 border-gray-300 rounded-sm outline-none h-8 px-2"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-gray-700 text-white h-9 w-22 rounded-md cursor-pointer">
          SUBMIT
        </button>
      </div>

      <div className="w-full mt-10">
        <div className="w-full">
          <table className="w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Address
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Phone
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Message
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Publish Date
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>

              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-200">
                <td className="px-6 py-3 whitespace-nowrap">NAME</td>
                <td className="px-6 py-3 whitespace-nowrap">NAME</td>
                <td className="px-6 py-3 whitespace-nowrap">NAME</td>
                <td className="px-6 py-3 whitespace-nowrap">NAME</td>
                <td className="px-6 py-3 whitespace-nowrap">NAME</td>
                <td className="px-6 py-3 whitespace-nowrap">NAME</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
