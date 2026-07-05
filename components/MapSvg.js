export default function MapSvg({ showRoute = true, showFriends = true, animateAlong = false }) {
  return (
    <svg className="map" viewBox="0 0 284 616" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="284" height="616" fill="#232424" />
      {/* street grid */}
      <g stroke="#2f3131" strokeWidth="10" strokeLinecap="round">
        <path d="M-20 120 H320" />
        <path d="M-20 260 H320" />
        <path d="M-20 420 H320" />
        <path d="M-20 545 H320" />
        <path d="M70 -20 V640" />
        <path d="M190 -20 V640" />
      </g>
      <g stroke="#2a2c2c" strokeWidth="4">
        <path d="M-20 190 H320" />
        <path d="M-20 340 H320" />
        <path d="M130 -20 V640" />
        <path d="M250 -20 V640" />
        <path d="M-20 60 L150 -40" />
        <path d="M20 640 L240 380" />
      </g>
      {/* park + water blocks */}
      <rect x="200" y="130" width="90" height="118" rx="10" fill="#263029" opacity="0.8" />
      <rect x="8" y="435" width="110" height="98" rx="10" fill="#26292e" opacity="0.8" />

      {showRoute && (
        <>
          <path
            d="M60 560 V420 H190 V260 H140 V150"
            fill="none"
            stroke="#0f4a45"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="route-anim"
            d="M60 560 V420 H190 V260 H140 V150"
            fill="none"
            stroke="#30D5C8"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* destination pin */}
          <g transform="translate(140 150)">
            <path
              d="M0 -26c-9 0-16 7-16 16 0 11 16 26 16 26s16-15 16-26c0-9-7-16-16-16z"
              fill="#0273E6"
            />
            <circle r="6" cy="-10" fill="#fff" />
          </g>
        </>
      )}

      {showFriends && (
        <g transform="translate(228 320)">
          <circle r="13" fill="#0273E6" opacity="0.25" />
          <circle r="8" fill="#0273E6" stroke="#fff" strokeWidth="2.5" />
        </g>
      )}

      {animateAlong ? (
        <circle r="10" fill="#30D5C8" stroke="#0f2c29" strokeWidth="3">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            path="M60 560 V420 H190 V260 H140 V150"
          />
        </circle>
      ) : (
        <g transform="translate(60 560)">
          <circle className="pulse-ring" r="26" fill="#30D5C8" opacity="0.5" />
          <circle r="10" fill="#30D5C8" stroke="#0f2c29" strokeWidth="3" />
        </g>
      )}
    </svg>
  );
}
