import React from "react";

const IsOwned = ({ owned }) => {
  if (owned) {
    return (
      <svg
        className={"movies-card_is-owned"}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <g filter="url(#filter0_d_41057_2633)">
          <circle cx="14" cy="11" r="8" fill="#2BE080" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 17C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5C10.6863 5 8 7.68629 8 11C8 14.3137 10.6863 17 14 17ZM14 19C18.4183 19 22 15.4183 22 11C22 6.58172 18.4183 3 14 3C9.58172 3 6 6.58172 6 11C6 15.4183 9.58172 19 14 19Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_d_41057_2633"
            x="0"
            y="0"
            width="28"
            height="28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_41057_2633"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_41057_2633"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      className={"movies-card__icon-delete"}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <g filter="url(#filter0_d_41057_2629)">
        <rect x="6" y="3" width="16" height="16" rx="8" fill="#F4F4F4" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 17C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5C10.6863 5 8 7.68629 8 11C8 14.3137 10.6863 17 14 17ZM14 19C18.4183 19 22 15.4183 22 11C22 6.58172 18.4183 3 14 3C9.58172 3 6 6.58172 6 11C6 15.4183 9.58172 19 14 19Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_41057_2629"
          x="0"
          y="0"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_41057_2629"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_41057_2629"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IsOwned;
