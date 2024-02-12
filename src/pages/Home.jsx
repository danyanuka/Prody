import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="one-element-page-parent">
      <section className="home one-element-page-child">
        <p>Home page</p>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/studio">Studio</NavLink>
        </nav>
      </section>
    </div>
  );
}
