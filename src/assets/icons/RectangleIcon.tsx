import { FC, SVGProps } from "react";

const RectangleIcon: FC<SVGProps<SVGSVGElement>> = ({
  height,
  width,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 373 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615977 36L22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5Z"
      fill="white"
      stroke="#D0D0D8"
    />
  </svg>
);

export default RectangleIcon;
