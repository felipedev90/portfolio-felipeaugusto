import { ImageResponse } from 'next/og'

export const alt = 'Felipe Augusto — Frontend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        background: 'linear-gradient(135deg, #0a0f1f 0%, #1a2038 100%)',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: '#a8a59a',
          fontSize: '20px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
        }}
      >
        <div style={{ width: '48px', height: '2px', background: '#d4a574' }} />
        Frontend Developer
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div
          style={{
            fontSize: '140px',
            fontWeight: 300,
            color: '#e8dcc4',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            display: 'flex',
          }}
        >
          Felipe
        </div>
        <div
          style={{
            fontSize: '140px',
            fontWeight: 300,
            color: '#d4a574',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            fontStyle: 'italic',
            display: 'flex',
          }}
        >
          Augusto.
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          color: '#a8a59a',
          fontSize: '20px',
          letterSpacing: '0.15em',
        }}
      >
        <div style={{ display: 'flex', gap: '24px' }}>
          <span>React</span>
          <span style={{ color: '#3a3830' }}>·</span>
          <span>Next.js</span>
          <span style={{ color: '#3a3830' }}>·</span>
          <span>TypeScript</span>
        </div>
        <div style={{ color: '#6b6960' }}>devfelipeaugusto.com.br</div>
      </div>
    </div>,
    { ...size },
  )
}
