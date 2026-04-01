import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #ecfccb 45%, #dcfce7 100%)',
          fontFamily: 'sans-serif',
          color: '#0f172a',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: 'rgba(22, 163, 74, 0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -140,
            left: -100,
            width: 360,
            height: 360,
            borderRadius: 9999,
            background: 'rgba(163, 230, 53, 0.18)',
          }}
        />

        <div
          style={{
            display: 'flex',
            width: '100%',
            padding: '56px 64px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 660 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  width: 76,
                  height: 76,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 24,
                  background: 'linear-gradient(135deg, #a3e635 0%, #16a34a 100%)',
                  color: '#ffffff',
                  fontSize: 34,
                  fontWeight: 800,
                }}
              >
                PT
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>POWERTECH</div>
                <div style={{ fontSize: 18, color: '#166534', fontWeight: 700 }}>Contact Directory</div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 64,
                lineHeight: 1.05,
                fontWeight: 900,
                letterSpacing: -2,
              }}
            >
              <div style={{ display: 'flex' }}>แชร์ลิงก์รายชื่อผู้ติดต่อ</div>
              <div style={{ display: 'flex' }}>พร้อมข้อมูลสำคัญ</div>
            </div>
            <div style={{ marginTop: 24, fontSize: 28, lineHeight: 1.4, color: '#475569', fontWeight: 600 }}>
              โทร แชร์ เปิดแผนที่ และเข้าถึงหน้าจอข้อมูลลูกค้าได้ทันทีจากลิงก์เดียว
            </div>
          </div>

          <div
            style={{
              width: 340,
              height: 420,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#ffffff',
              borderRadius: 36,
              border: '1px solid rgba(148, 163, 184, 0.25)',
              boxShadow: '0 24px 70px rgba(15, 23, 42, 0.12)',
              padding: 28,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#dcfce7',
                  color: '#166534',
                  fontSize: 28,
                  fontWeight: 900,
                }}
              >
                น
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 28, fontWeight: 800 }}>นายสมชาย</div>
                <div style={{ fontSize: 18, color: '#64748b', fontWeight: 600 }}>086-198-3352</div>
                <div style={{ fontSize: 16, color: '#94a3b8' }}>สำนักงานใหญ่</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#f8fafc',
                  borderRadius: 24,
                  padding: '16px 18px',
                }}
              >
                <span style={{ fontSize: 18, color: '#334155', fontWeight: 700 }}>แชร์</span>
                <span style={{ fontSize: 18, color: '#16a34a', fontWeight: 800 }}>LINK</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100,
                  height: 100,
                  alignSelf: 'flex-end',
                  borderRadius: 9999,
                  background: '#166534',
                  color: '#ffffff',
                  fontSize: 54,
                  fontWeight: 900,
                }}
              >
                →
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
