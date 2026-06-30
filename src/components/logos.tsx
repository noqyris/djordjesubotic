// Brand marks (single-path glyphs from simple-icons, CC0). Sized via props.

export function AnthropicMark({ className, size = 22 }: { className?: string; size?: number }) {
  return (
    <svg
      role="img"
      aria-label="Anthropic"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
    </svg>
  );
}

// Official Microsoft four-square mark, in brand colours.
export function MicrosoftMark({ size = 22 }: { size?: number }) {
  return (
    <svg role="img" aria-label="Microsoft" viewBox="0 0 24 24" width={size} height={size}>
      <rect x="0" y="0" width="11.4" height="11.4" fill="#F25022" />
      <rect x="12.6" y="0" width="11.4" height="11.4" fill="#7FBA00" />
      <rect x="0" y="12.6" width="11.4" height="11.4" fill="#00A4EF" />
      <rect x="12.6" y="12.6" width="11.4" height="11.4" fill="#FFB900" />
    </svg>
  );
}
