import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchUsers, adduser,addUserPrepare } from "./usersSlice";

const Users = (props) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const userNameRef = useRef();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>Users</h2>

      <ul>
        
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Users;

/*
      <div>
        <input ref={userNameRef} />
        <button onClick={() => dispatch(adduser(userNameRef.current?.value))}>
          Add Author
        </button>
        <button onClick={() => dispatch(addUserPrepare(userNameRef.current?.value))}>
          Add Prepare Author
        </button>
      </div>
*/
