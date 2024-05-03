import React, { useState, useEffect } from "react";
import { userData } from "../utils/constant";

const UserClass = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Gunjan Kumar",
    location: "Hazaribagh",
    avatar_url: "https://avatars.githubusercontent.com",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(userData);
        const json = await response.json();
        setUserInfo(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

  }, []); // Empty dependency array to run effect only once

  const { name, location, login, avatar_url } = userInfo;

  return (
<div className="flex flex-col"> {/* Added flex class */}
  <div className="flex justify-center items-center"> {/* Added flex and justify-center classes */}
    <img className="mx-2 px-2 w-20 border-blue-400" src={avatar_url} alt="User Avatar" /> {/* Fixed src attribute */}
  </div>
  <div className=""> 
    <h2 className="mx-2 px-2 font-semibold">Name : {name}</h2>
    <h3 className="mx-2 px-2 font-semibold">Location : {location}</h3>
    <h3 className="mx-2 px-2 font-semibold">Contact : {login}</h3>
  </div>
</div>

  );
};

export default UserClass;
