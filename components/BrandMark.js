export default function BrandMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#2b2a2a" />
      <path
        d="M22 18h-6a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h6"
        fill="none"
        stroke="#30D5C8"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M42 18h6a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4h-6"
        fill="none"
        stroke="#30D5C8"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <text
        x="32"
        y="38"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fontWeight="800"
        fill="#fff"
        textAnchor="middle"
        letterSpacing="1"
      >
        SR
      </text>
    </svg>
  );
}
