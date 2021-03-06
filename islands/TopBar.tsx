/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

interface TopBarProps {
  allowMode: "edit" | "read" | "both";
}

export default function TopBar(props: TopBarProps) {
  const [mode, setMode] = useState(props.allowMode);

  // Event listener
  const modeChangeListener = (e: CustomEvent) => {
    if (e.detail && props.allowMode === "both") {
      setMode(e.detail);
    }
  };

  // Event dispatche
  const modeChangeDispatcher = (mode: string) => {
    window.dispatchEvent(new CustomEvent("ModeChange", { detail: mode }));
  };

  // Init event listeners
  useEffect(() => {
    window.addEventListener("ModeChange", modeChangeListener);

    return () => {
      window.removeEventListener("ModeChange", modeChangeListener);
    };
  }, []);

  return (
    <div className="pd-top-bar">
      <div className="pd-top-bar-mode-switcher">
        <button
          className={`pd-top-bar-btn ${mode === "edit" ? "active" : ""}`}
          id="edit"
          type="button"
          onClick={() => {
            modeChangeDispatcher("edit");
          }}
        >
          Edit
        </button>
        <button
          className={`pd-top-bar-btn ${mode === "read" ? "active" : ""}`}
          id="read"
          type="button"
          onClick={() => {
            modeChangeDispatcher("read");
          }}
        >
          Read
        </button>
        <button
          className={`pd-top-bar-btn ${mode === "both" ? "active" : ""}`}
          id="both"
          type="button"
          onClick={() => {
            modeChangeDispatcher("both");
          }}
        >
          Both
        </button>
      </div>
    </div>
  );
}
