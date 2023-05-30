import { useState } from "react";
import { string } from "yup";

export default function JoinOurCommunity({ footer = false }) {
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_SERVER_API_KEY}`,
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setConfirm(false);
      setEmail("");
      return alert(error);
    }

    setConfirm(true);
    setEmail("");
  };

  return (
    <div>
      <div
        className={`flex md:flex-row flex-col md:space-x-4 md:items-center ${
          footer ? "md:justify-start" : "md:justify-center"
        } space-y-4 md:space-y-0 w-full`}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          className={`${
            footer
              ? "placeholder-gray-400 text-white bg-gray-800 border-gray-700 focus:outline-blue-700 hover:bg-gray-900"
              : "placeholder-gray-500 text-blue-900 bg-white border-gray-300 focus:outline-blue-700 hover:bg-gray-100"
          } border shadow-xl text-sm rounded-full pt-3.5 px-4 pb-4 md:w-72 h-12 font-display transition-colors`}
          autoComplete="email"
          required
          name="email"
        />
        <button
          type="submit"
          onClick={subscribe}
          disabled={!validateEmail(email)}
          className={`${
            footer
              ? "text-gray-900 bg-white border-gray-300 focus:outline-blue-800"
              : "text-white bg-blue-600 border-blue-700 focus:outline-blue-800"
          } ${
            validateEmail(email)
              ? `cursor-pointer ${
                  footer
                    ? "hover:bg-gray-300 hover:border-gray-700"
                    : "hover:bg-blue-700 hover:border-blue-800"
                }`
              : "cursor-not-allowed"
          } uppercase whitespace-nowrap shadow-xl h-12 border text-xs rounded-full py-2 px-6 font-semibold tracking-widest transition-colors`}
        >
          Join our Community
        </button>
      </div>
      {confirm ? (
        <div>
          <p className="text-sm font-medium font-display text-white/75 mt-4">
            Thanks for subscribing! Be on the lookout for our emails.
          </p>
        </div>
      ) : null}
    </div>
  );
}

function validateEmail(email) {
  const schema = string().email().required();
  try {
    schema.validateSync(email);
    return true; // Email is valid
  } catch (error) {
    return false; // Email is invalid
  }
}
