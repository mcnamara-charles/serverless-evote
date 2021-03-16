import { Fragment } from "react";
import Link from "next/link";
import data from "../../data";

function ListUsers({ users }) {
  for (var i = 0; i < users.length; i++) {
    console.log(users[i]);
  }
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Email</th>
            <th>Password</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => {
          const name = (user.fName + " " + user.lName)
          return (
            <tr key={user.userHash}>
              <td>{user.userHash}</td>
              <td>{user.email}</td>
              <td>{user.passHash}</td>
              <td>{user.fName} {user.lName}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </Fragment>
  );
}

ListUsers.getInitialProps = async ({ req }) => {
  if (req) {
    // this is server side
    // is fine to use aws-sdk here
    return {
      users: await data.readTable("Users")
    };
  } else {
    // we are client side
    // fetch via api
    const response = await fetch("/api/users");
    return { users: await response.json() };
  }
};

export default ListUsers;
