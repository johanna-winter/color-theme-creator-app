import "./CopyToClipboard.css";
import { useEffect, useState } from "react";

export default function CopyToClipboard({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);
  return (
    <button className="copy-button" type="button" onClick={handleCopy}>
      {copied ? "Successfully copied!" : "Copy"}
    </button>
  );
}
