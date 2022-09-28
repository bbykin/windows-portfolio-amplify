import React from "react";
import "xp.css/dist/XP.css";
import Draggable from "react-draggable";
import { Wrapper } from "../assets/css/Layout";

export function Signup() {
  return (
    <Draggable>
      <Wrapper>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">Signup</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button onClick={() => console.log("close")} aria-label="Close" />
            </div>
          </div>

          <div className="window-body">
            <article role="tabpanel">
              <label for="username">Username:</label>
              <input id="username" type="text" />
              <label for="password">Password:</label>
              <input id="password" type="text" />
           
            </article>
          </div>
        </div>
      </Wrapper>
    </Draggable>
  );
}
