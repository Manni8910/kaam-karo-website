export default function Maintenance() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f0f0f',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, sans-serif',
      padding: '24px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 56, marginBottom: 24 }}>🔧</div>
      <div style={{ fontSize: 32, fontWeight: 900, color: '#1B3FAB', marginBottom: 8 }}>
        KaamKaro
      </div>
      <div style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>
        We'll be back soon!
      </div>
      <div style={{ fontSize: 15, color: '#888', maxWidth: 380, lineHeight: 1.6, marginBottom: 32 }}>
        We're making some improvements to give you a better experience.
        The app and website will be back online shortly.
      </div>
      <div style={{
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: 16,
        padding: '20px 32px',
      }}>
        <div style={{ color: '#888', fontSize: 13, marginBottom: 8 }}>For queries, contact us at</div>
        <div style={{ color: '#1B3FAB', fontWeight: 700 }}>support@kaamkaro.co.in</div>
        <div style={{ color: '#888', fontSize: 13, marginTop: 4 }}></div>
      </div>
    </div>
  );
}
