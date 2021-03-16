import { useState } from "react";
import { useRouter } from "next/router";

function Newvoter() {
  const router = useRouter();
  const [voterDescription, setvoterDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("/api/voters/new", {
      method: "POST",
      body: JSON.stringify({ voterDescription })
    });

    router.push("/voters/list");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>voter description:</label>
      <br />
      <textarea
        name="voter-description"
        value={voterDescription}
        onChange={(e) => setvoterDescription(e.target.value)}
      ></textarea>
      <br />
      <input type="submit" />
    </form>
  );
}

export default Newvoter;
