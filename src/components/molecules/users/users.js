import React, { useContext } from "react";
import Text from "./../../atoms/text/text";
import CONFIG from "./../../../configs/";
import UserContext from "./../../../context/user-context";

function Users(props) {
  const userContext = useContext(UserContext);
  return userContext.users.length > 0
    ? userContext.users.map((user) => (
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
// function Users(props) {
//   return props.data.length > 0
//     ? props.data.map((user) => (
//         <div
//           role="button"
//           className="col-md-4 animated fadeIn"
//           key={user?.id}
//           tabIndex={0}
//         >
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title card-id">{user?.id}</h5>
//               <Text text={user?.name} />
//               <Text text={user?.address + " " + user?.pincode} />
//             </div>
//           </div>
//         </div>
//       ))
//     : `${CONFIG.noUser}`;
// }

export default Users;
