export function GraphQLIcon({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 128 128"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M18.3 96.7l-4.7-2.7 50-86.6 4.7 2.7z" />
          <path d="M9 84.3h100v5.4H9z" />
          <path d="M64 120.7L14 92.3l2.7-4.7L64 111.3l47.3-27.7 2.7 4.7z" />
          <path d="M109.7 96.7l-50-86.6 4.7-2.7 50 86.6z" />
          <circle cx="64" cy="10" r="10" />
          <circle cx="64" cy="118" r="10" />
          <circle cx="14" cy="90" r="10" />
          <circle cx="114" cy="90" r="10" />
        </g>
      </svg>
    );
  }
  