import React from "react";
import "xp.css/dist/XP.css";
import { Bio } from "../components/Bio";
import { Signup } from "../components/Signup";

export default function Landing() {
  return (
    <>
       <div className="background">
      <Bio />
      <Signup />
      </div>
    </>
  );
}
