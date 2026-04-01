const faviconSvg = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A3E635"/>
      <stop offset="1" stop-color="#16A34A"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="15" fill="url(#bg)"/>
  <rect x="11" y="15" width="42" height="34" rx="6" fill="#F8FAFC"/>
  <rect x="15" y="19" width="11" height="11" rx="3" fill="#D9F99D"/>
  <path d="M19.5 27C19.5 24.5147 21.5147 22.5 24 22.5C26.4853 22.5 28.5 24.5147 28.5 27C28.5 29.4853 26.4853 31.5 24 31.5C21.5147 31.5 19.5 29.4853 19.5 27Z" fill="#166534"/>
  <rect x="30" y="21" width="16" height="4" rx="2" fill="#0F172A" fill-opacity="0.9"/>
  <rect x="30" y="28" width="13" height="3" rx="1.5" fill="#64748B"/>
  <rect x="15" y="38" width="28" height="3.5" rx="1.75" fill="#CBD5E1"/>
  <circle cx="47" cy="43" r="9" fill="#166534"/>
  <path d="M45.5 39.5L49.5 43.5L45.5 47.5" stroke="#F8FAFC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M40.5 43.5H48.5" stroke="#F8FAFC" stroke-width="3" stroke-linecap="round"/>
</svg>
`.trim();

export function GET() {
  return new Response(faviconSvg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
