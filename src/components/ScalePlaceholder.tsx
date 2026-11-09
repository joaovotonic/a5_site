/** Ilustração neutra exibida enquanto a foto real do produto não é adicionada. */
export function ScalePlaceholder({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 240 180"
      role="img"
      aria-label={`Ilustração de balança — ${label}`}
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="ph-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1f5f9" />
          <stop offset="1" stopColor="#dbe3ee" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="160" rx="82" ry="8" fill="#0f172a" opacity="0.07" />
      <rect x="38" y="104" width="164" height="44" rx="10" fill="url(#ph-body)" stroke="#cbd5e1" />
      <rect x="62" y="118" width="62" height="16" rx="4" fill="#0a5fb4" opacity="0.9" />
      <rect x="136" y="118" width="48" height="16" rx="4" fill="#e2e8f0" />
      <path d="M52 100h136l-10-24H62l-10 24Z" fill="#e2e8f0" stroke="#cbd5e1" />
      <rect x="68" y="40" width="104" height="30" rx="8" fill="#0f172a" />
      <rect x="76" y="47" width="88" height="16" rx="4" fill="#0a5fb4" opacity="0.35" />
    </svg>
  );
}
