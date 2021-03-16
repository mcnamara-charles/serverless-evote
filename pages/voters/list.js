import { Fragment } from "react";
import Link from "next/link";
import data from "../../data";

function Listvoters({ voters }) {
  return (
    <Fragment>
      <ul>
        {voters.map((voter) => {
          return (
            <li key={voter.voterId}>
              <Link
                href="/voters/details/[id]"
                as={`/voters/details/${voter.voterId}`}
              >
                <a>{voter.voterDescription}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <Link href={"/voters/new"}>
          <a>New voter</a>
        </Link>
      </div>
    </Fragment>
  );
}

Listvoters.getInitialProps = async ({ req }) => {
  if (req) {
    // this is server side
    // is fine to use aws-sdk here
    return {
      voters: await data.readTable()
    };
  } else {
    // we are client side
    // fetch via api
    const response = await fetch("/api/voters");
    return { voters: await response.json() };
  }
};

export default Listvoters;
