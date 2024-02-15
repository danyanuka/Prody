import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppHeader } from "../cmp/AppHeader";

// Local imports
import { studioActions } from "../store/actions/studio.actions";

export function StudioIndex() {
  return (
    <div className="studio-index-container overflow-y-scroll">
      <div className="card lg:card-side bg-base-300 shadow-xl w-[70%]">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-300 shadow-xl m-10">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
}
