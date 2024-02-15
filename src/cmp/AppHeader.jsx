import { useEffect, useState } from "react";
import { MoonIcon } from "./iconCmps/MoonIcon";
import { SunIcon } from "./iconCmps/SunIcon";
import { NavLink, Link } from "react-router-dom";

export function AppHeader() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  function handleToggle(e) {
    if (e.target.checked) {
      setTheme("dark");
    } else setTheme("light");
  }

  return (
    <div className={`navbar bg-accent text-accent-content sm:px-8 `}>
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost p-0 hover:no-underline">
          <h1 className="text-lg font-bold mx-4">Prody</h1>
        </Link>
      </div>
      <div className="flex-none">
        <label className="swap swap-rotate">
          <input onChange={(e) => handleToggle(e)} type="checkbox" />
          <SunIcon />
          <MoonIcon />
        </label>
      </div>
    </div>
  );
}
