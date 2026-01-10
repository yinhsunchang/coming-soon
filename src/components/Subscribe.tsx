import '../ComingSoon.css'
import { useState } from "react";

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
      const USE_FAKE_API = true; // toggle here

      if (USE_FAKE_API) {
        // Fake API (simulate backend delay)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Mock subscription successful!");
      } else {
        // Real backend API
        await fetch("", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        alert("Subscription successful!");
      }
      setEmail("");
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Subscription failed");
      }
    } finally {
      setLoading(false);
    }    
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        className="input white round-large margin-right padding-small mobile"
        style={{width:"250px", display:"inline-block"}}
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
      className="input button black round-large margin-right padding-small mobile" 
      style={{width:"125px", display:"inline-block"}}
      type="submit" 
      disabled={loading}>
        {loading ? "Submitting..." : "Subscribe"}
      </button>
    </form>
    </>
  );
}

export default Subscribe
