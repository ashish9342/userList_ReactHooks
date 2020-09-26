import React, { useState, useEffect } from "react";
import CONFIG from "./../../../configs/";

import Users from "./../../molecules/users/users";
import Input from "../../atoms/input/input";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  // const [filteredUsers, setFilteredUsers] = useState([]);

  const [query, setQuery] = useState("");
  const loadData = async () => {
    try {
      const response = await fetch(CONFIG.url);
      const data = await response.json();
      console.log("data", data);
      setUsers(data);
    } catch (e) {
      console.log("Error : ", e.message);
    }
  };

  const search = (users) => {
    return users.filter(
      (obj) =>
        obj.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        obj.id.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        obj.address.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  useEffect(() => {
    //this work as componentDidMount
    loadData();
  }, []);

  return (
    <div className="clearfix">
      <div className="row">
        <Input
          name="search"
          placeholder={CONFIG.searchString}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Users data={search(users)} />
      </div>
    </div>
  );
};

export default UserCards;
