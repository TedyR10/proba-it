// import React from "react";
// import "./Button.css";
// import { Link } from "react-router-dom";

// const STYLES = ["btn--primary", "btn--outline", "btn--test"];

// const SIZES = ["btn--medium", "btn--large"];

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize,
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   return (
//     <Link to="/sign-up" className="btn-mobile">
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={onClick}
//         type={type}
//       >
//         {children}
//       </button>
//     </Link>
//   );
// };

// font-family: Droid Sans;
// font-style: normal;
// font-weight: normal;

import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  text: string;
  fontfam: string;
  fontsty: string;
  fontwei: string;
  lt: String;
}

const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  text,
  fontfam,
  fontsty,
  fontwei,
  lt,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        color: text,
        fontFamily: fontfam,
        fontStyle: fontsty,
        fontWeight: fontwei,
        left: lt,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
