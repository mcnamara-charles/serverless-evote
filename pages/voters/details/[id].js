import data from "../../../data";
import Link from "next/link";

function voterDetails(props) {
  const { voter } = props;

  return (
    <div>
      <div>
        <p>Id: {voter.voterId}</p>
        <p>Description: {voter.voterDescription}</p>
      </div>
      <Link href="/voters/list">
        <a>Back to voters List</a>
      </Link>
    </div>
  );
}

voterDetails.getInitialProps = async ({ req, query }) => {
  if (req) {
    // this is server side
    // is fine to use aws-sdk here
    const voter = await data.getvoter(query.id);
    return {
      voter
    };
  } else {
    // we are client side
    // fetch via api
    const response = await fetch(`/api/voters/${query.id}`);
    const voter = await response.json();
    return { voter };
  }
};

export default voterDetails;
