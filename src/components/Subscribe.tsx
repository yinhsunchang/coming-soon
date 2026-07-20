import "../ComingSoon.css";
import { useState } from "react";
import { supabase } from "../supabase";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("subscribers").insert([{ email }]);

      if (error) {
        if (error.code === "23505") {
          throw new Error("Email already subscribed.");
        }
        throw error;
      }
      alert("Subscription successful!");
      setEmail("");
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Subscription failed. Please try again.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="input white round-large margin-right padding-small mobile"
          style={{ width: "250px", display: "inline-block" }}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="input button black round-large margin-right padding-small mobile"
          style={{ width: "125px", display: "inline-block" }}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <i className="fa fa-refresh fa-spin" /> Sending...
            </>
          ) : (
            <>Subscribe</>
          )}
        </button>
      </form>
    </>
  );
}

export default Subscribe;
