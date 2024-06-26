import { Tilt } from "react-tilt";
import brain from "./icons8-brain-100.png";

// const defaultOptions = {
//   reverse: false, // reverse the tilt direction
//   max: 35, // max tilt rotation (degrees)
//   perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
//   scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
//   speed: 1000, // Speed of the enter/exit transition
//   transition: true, // Set a transition on enter/exit.
//   axis: null, // What axis should be disabled. Can be X or Y.
//   reset: true, // If the tilt effect has to be reset on exit.
//   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
// };

function Logo() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="">
          <img className="p-6" alt="logo" src={brain} />
        </div>
      </Tilt>
      <a href="https://github.com/Jhonneg">
        <p className="inline-block mx-1">Build by </p>
        <img
          className="inline-block"
          width="32"
          height="32"
          src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
          alt="github"
        />
      </a>
    </div>
  );
}

export default Logo;
