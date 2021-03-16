import Link from "next/link";

export default function Subnav({ user }) {
  if(user) {
    return (
      <div className="subnav">
      <button className="subnavbtn">Welcome {user.fName} <i className="fa fa-caret-down"></i></button>
        <div className="subnav-hanger">
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
          <Link href="/">
            <a>Password</a>
          </Link>
          <Link href="/logout">
            <a>Log Out</a>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="subnav">
      <button className="subnavbtn">Log in <i className="fa fa-caret-down"></i></button>
        <div className="subnav-hanger">
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
          <Link href="/">
            <a>Forgot Password</a>
          </Link>
          <Link href="/login">
            <a>Log In</a>
          </Link>
        </div>
      </div>
    );
  }
}
