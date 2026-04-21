import jwt from 'jsonwebtoken';

// ensure Vercel doesn't cache the result of this route,
// as otherwise the token request data will eventually become outdated
// and we won't be able to authenticate on client side
export const revalidate = 0;

export async function GET(request) {
  const clientId = request.nextUrl.searchParams.get('clientId') || 'NO_CLIENT_ID_PROVIDED';
  const [keyName, keySecret] = process.env.ABLY_API_KEY.split(':');

  const now = Math.floor(Date.now() / 1000);
  const claims = {
    'x-ably-capability': JSON.stringify({ '*': ['*'] }),
    'x-ably-clientId': clientId,
    iat: now,
    exp: now + 3600,
  };

  const token = jwt.sign(claims, keySecret, { algorithm: 'HS256', keyid: keyName });

  return new Response(token, {
    status: 200,
    headers: { 'Content-Type': 'application/jwt' },
  });
}
