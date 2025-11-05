import "./ContrastScore.css";
import { useEffect, useState } from "react";

export default function ContrastScore({ hex, contrastText }) {
  const [score, setScore] = useState(null);

  useEffect(() => {
    async function fetchContrastAPI() {
      try {
        const response = await fetch(
          `https://www.aremycolorsaccessible.com/api/are-they`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              colors: [hex, contrastText],
            }),
          }
        );
        const data = await response.json();
        setScore(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContrastAPI();
  }, [hex, contrastText]);

  if (!score) {
    return <p>Checking contrast...</p>;
  }

  return (
    <>
      <p
        className={`contrast-score contrast-score__${score.overall.toLowerCase()}`}
      >
        Overall contrast score: {score?.overall}
      </p>
    </>
  );
}
