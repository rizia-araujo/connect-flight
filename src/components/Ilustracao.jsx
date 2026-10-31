// Ilustração simples em SVG (globo + pins + órbita) no lugar da imagem do Figma.
export default function Ilustracao() {
  return (
    <svg className="ilustracao" viewBox="0 0 420 260" role="img" aria-label="Globo com marcadores de destinos">
      <circle cx="200" cy="140" r="95" fill="#3d3d52" />
      <path d="M140 110c20-15 40-5 55-18 15-12 30 5 22 22-8 17-30 10-40 25-10 14-45 5-37-29z" fill="#fff" opacity=".9" />
      <path d="M225 160c15-8 35 0 38 18 3 18-22 28-34 15-10-10-12-26-4-33z" fill="#fff" opacity=".9" />
      <ellipse cx="210" cy="160" rx="200" ry="38" fill="none" stroke="#c026d3" strokeWidth="1.5" transform="rotate(-8 210 160)" />
      {[[150, 70, 22], [205, 50, 28], [255, 80, 16]].map(([x, y, s]) => (
        <g key={x} transform={`translate(${x} ${y})`}>
          <path d={`M0 ${s * 1.5}C-${s} ${s * 0.4} -${s} -${s * 0.9} 0 -${s * 0.9}S${s} ${s * 0.4} 0 ${s * 1.5}z`} fill="#c026d3" />
          <circle cx="0" cy={s * 0.1} r={s * 0.3} fill="#fff" />
        </g>
      ))}
      <g transform="translate(300 100)">
        <circle cx="0" cy="0" r="12" fill="#f3d9c4" />
        <path d="M-6 -8c4-12 18-8 16 6" fill="#2b2b3a" />
        <rect x="-14" y="12" width="28" height="55" rx="10" fill="#9a9aa8" />
        <rect x="-12" y="65" width="10" height="70" rx="4" fill="#2b2b3a" />
        <rect x="2" y="65" width="10" height="70" rx="4" fill="#2b2b3a" />
      </g>
      <line x1="230" y1="238" x2="350" y2="238" stroke="#ddd" />
    </svg>
  )
}
