import React from "react";
import Text from "./../../atoms/text/text";
import CONFIG from "./../../../configs/";

function Users(props) {
  return props.data.length > 0
    ? props.data.map((user) => (
        <div
          role="button"
          className="col-md-4 animated fadeIn"
          key={user?.id}
          tabIndex={0}
        >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title card-id">{user?.id}</h5>
              <Text text={user?.name} />
              <Text text={user?.address + " " + user?.pincode} />
            </div>
          </div>
        </div>
      ))
    : `${CONFIG.noUser}`;
}

export default Users;
