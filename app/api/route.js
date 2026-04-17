import Ably from 'ably';

// ensure Vercel doesn't cache the result of this route,
// as otherwise the token request data will eventually become outdated
// and we won't be able to authenticate on client side
export const revalidate = 0;

export async function GET(request) {
  const clientId = request.nextUrl.searchParams.get('clientId') || 'NO_CLIENT_ID_PROVIDED';
  const client = new Ably.Rest(process.env.ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({ clientId });
  console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
  return Response.json(tokenRequestData);
}
