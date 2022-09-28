import React from "react";
import "xp.css/dist/XP.css";
import Draggable from "react-draggable";
import { Wrapper } from "../assets/css/Layout";

export function Bio() {
  return (
    <div className="background">
      <Draggable>
        <Wrapper>
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Your Profile</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button onClick={()=> console.log('close')} aria-label="Close" />
              </div>
            </div>

            <div className="window-body">
              <article role="tabpanel">
                
                <h2 className="pixelpoiiz">bby d</h2>
              </article>
            </div>
          </div>
        </Wrapper>
      </Draggable>
    </div>
  );
}
