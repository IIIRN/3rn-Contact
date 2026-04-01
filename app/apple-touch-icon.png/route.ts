import React from 'react';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  const image = new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #bef264 0%, #16a34a 100%)',
        },
      },
      React.createElement(
        'div',
        {
          style: {
            width: 148,
            height: 148,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 38,
            background: '#ffffff',
            boxShadow: '0 12px 28px rgba(15, 23, 42, 0.16)',
          },
        },
        React.createElement(
          'div',
          {
            style: {
              width: 110,
              height: 110,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              background: '#166534',
              color: '#ffffff',
              fontSize: 48,
              fontWeight: 900,
              letterSpacing: -2,
            },
          },
          'ร'
        )
      )
    ),
    {
      width: 180,
      height: 180,
    }
  );

  return new Response(await image.arrayBuffer(), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
