import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const DynamicList = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.org/users")
      .then((resp) => resp.json())
      .then((d) => setUserList(d));
  }, []);
  return (
    <div>
      <div className="text-2xl">User List</div>
      <ul className="bg-slate-300 shadow-xl rounded-md p-2 flex flex-wrap">
        {userList?.map((e) => (
          <li className="p-1 min-w-[120px] m-1 border-2 shadow-2xl">
            {e?.firstname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
