export function StarSchemaDiagram() {
  const dims = [
    { label: 'Date', cols: 'date_key, year, quarter, month, day', color: '#6b8ed1', angle: -90 },
    { label: 'Customer', cols: 'customer_key, name, segment, region', color: '#4caf82', angle: -18 },
    { label: 'Product', cols: 'product_key, name, category, brand', color: '#c9a84c', angle: 54 },
    { label: 'Store', cols: 'store_key, name, city, country', color: '#e8a84c', angle: 126 },
    { label: 'Channel', cols: 'channel_key, type, platform', color: '#9b6bbf', angle: 198 },
  ];

  const cx = 240, cy = 160, factR = 52, dimR = 115, dimW = 108, dimH = 52;

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 480 320" className="w-full max-w-lg mx-auto" style={{ minWidth: '320px' }}>
        {/* Fact table */}
        <rect x={cx - factR} y={cy - 40} width={factR * 2} height={80} rx="5"
          fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" />
        <text x={cx} y={cy - 18} textAnchor="middle" fill="#c9a84c"
          fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="700">FACT TABLE</text>
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#c9a84c"
          fontSize="8.5" fontFamily="DM Sans, sans-serif" fontWeight="600">fact_sales</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#8a899a"
          fontSize="7.5" fontFamily="DM Sans, sans-serif">sales_amount, qty,</text>
        <text x={cx} y={cy + 22} textAnchor="middle" fill="#8a899a"
          fontSize="7.5" fontFamily="DM Sans, sans-serif">discount, margin</text>

        {dims.map((d) => {
          const rad = (d.angle * Math.PI) / 180;
          const nx = cx + dimR * Math.cos(rad);
          const ny = cy + dimR * Math.sin(rad);
          return (
            <g key={d.label}>
              {/* Connector */}
              <line
                x1={cx + factR * Math.cos(rad)} y1={cy + factR * Math.sin(rad)}
                x2={nx - (dimW / 2) * Math.cos(rad)} y2={ny - (dimH / 2) * Math.sin(rad)}
                stroke={`${d.color}40`} strokeWidth="1.5" strokeDasharray="3,2" />
              <rect x={nx - dimW / 2} y={ny - dimH / 2} width={dimW} height={dimH} rx="4"
                fill={`${d.color}12`} stroke={d.color} strokeWidth="1.2" />
              <text x={nx} y={ny - 8} textAnchor="middle" fill={d.color}
                fontSize="9.5" fontFamily="DM Sans, sans-serif" fontWeight="700">{d.label} Dim</text>
              <text x={nx} y={ny + 6} textAnchor="middle" fill="#8a899a"
                fontSize="7" fontFamily="DM Sans, sans-serif">{d.cols.split(',')[0].trim()},</text>
              <text x={nx} y={ny + 18} textAnchor="middle" fill="#8a899a"
                fontSize="7" fontFamily="DM Sans, sans-serif">{d.cols.split(',').slice(1, 3).join(',').trim()}</text>
            </g>
          );
        })}

        {/* Label */}
        <text x={cx} y={308} textAnchor="middle" fill="#8a899a"
          fontSize="8" fontFamily="DM Sans, sans-serif">Star Schema: Fact table surrounded by denormalized dimension tables</text>
      </svg>
    </div>
  );
}
