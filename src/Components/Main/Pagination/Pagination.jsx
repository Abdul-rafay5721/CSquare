import React from 'react';

const Pagination = () => {
  return (
    <div className="col text-center py-10">
      <div className="block-27">
        <ul className="flex justify-center  space-x-2">
          <li>
            <a
              href="#"
              className="px-3 py-2 text-gray-700 hover:text-white border hover:bg-red-700 rounded-full cursor-pointer transition duration-300"
            >
              &lt;
            </a>
          </li>
          <li className="active">
            <span className="px-3 py-2 text-white bg-red-700 rounded-full">
              1
            </span>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 text-gray-700 hover:text-white hover:bg-red-700 rounded-full cursor-pointer transition duration-300"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 text-gray-700 hover:text-white hover:bg-red-700 rounded-full cursor-pointer transition duration-300"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 text-gray-700 hover:text-white hover:bg-red-700 rounded-full cursor-pointer transition duration-300"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 text-gray-700 hover:text-white hover:bg-red-700 rounded-full cursor-pointer transition duration-300"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 text-gray-700 hover:text-white border hover:bg-red-700 rounded-full cursor-pointer transition duration-300"
            >
              &gt;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
