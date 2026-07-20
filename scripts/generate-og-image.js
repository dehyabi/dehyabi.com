const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0f" />
      <stop offset="100%" stop-color="#050507" />
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#22d3ee" stop-opacity="0.08" />
    </linearGradient>
    <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e4e4e7" />
      <stop offset="100%" stop-color="#a1a1aa" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Hexagon frame -->
  <path
    d="M600 180 L660 214 L660 282 L600 316 L540 282 L540 214 Z"
    fill="none"
    stroke="#6366f1"
    stroke-width="3"
    stroke-linejoin="round"
    opacity="0.6"
  />
  <path
    d="M600 205 L635 225 L635 265 L600 285 L565 265 L565 225 Z"
    fill="none"
    stroke="#22d3ee"
    stroke-width="2"
    stroke-linejoin="round"
    opacity="0.5"
  />
  <circle cx="600" cy="245" r="6" fill="#22d3ee" opacity="0.9" />
  <circle cx="600" cy="245" r="2.5" fill="#050507" />

  <!-- Name -->
  <text x="600" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="700" fill="#fafafa" text-anchor="middle" letter-spacing="-0.02em">Dehya Qalbi</text>

  <!-- Title -->
  <text x="600" y="430" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="400" fill="#a1a1aa" text-anchor="middle">Full-Stack AI Engineer</text>

  <!-- Subtitle -->
  <text x="600" y="475" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" fill="#71717a" text-anchor="middle">LLM Pipelines · FastAPI · React/Next.js · MLOps</text>

  <!-- URL -->
  <text x="600" y="560" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="400" fill="#52525b" text-anchor="middle" letter-spacing="0.05em">dehyabi.com</text>

  <!-- Decorative lines -->
  <line x1="480" y1="245" x2="535" y2="245" stroke="#6366f1" stroke-width="1" opacity="0.3" />
  <line x1="665" y1="245" x2="720" y2="245" stroke="#6366f1" stroke-width="1" opacity="0.3" />
</svg>
`;

const appleSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0f" />
      <stop offset="100%" stop-color="#050507" />
    </linearGradient>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" />
      <stop offset="100%" stop-color="#22d3ee" />
    </linearGradient>
  </defs>

  <rect width="180" height="180" rx="40" fill="url(#bg)" />

  <path
    d="M90 45 L135 71 L135 123 L90 149 L45 123 L45 71 Z"
    fill="none"
    stroke="url(#grad)"
    stroke-width="5"
    stroke-linejoin="round"
  />
  <path
    d="M90 70 L118 86 L118 114 L90 130 L62 114 L62 86 Z"
    fill="none"
    stroke="url(#grad)"
    stroke-width="3.5"
    stroke-linejoin="round"
  />
  <circle cx="90" cy="100" r="5" fill="#22d3ee" />
  <circle cx="90" cy="100" r="2" fill="#050507" />
</svg>
`;

async function main() {
  const publicDir = path.join(__dirname, "..", "public");

  // Generate OG image
  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(path.join(publicDir, "og-image.png"));
  console.log("✓ Generated public/og-image.png (1200×630)");

  // Generate Apple touch icon
  await sharp(Buffer.from(appleSvg))
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("✓ Generated public/apple-touch-icon.png (180×180)");
}

main().catch(console.error);
