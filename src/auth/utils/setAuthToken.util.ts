import { NextRequest } from 'next/server';

const setAuthToken = (req: NextRequest, accessToken?: string): Request => {
  const requestHeaders = new Headers(req.headers);

  if (accessToken) {
    requestHeaders.set("Authorization", `Bearer ${accessToken}`);
  }

  return new Request(req.url, {
    method: req.method,
    headers: requestHeaders,
    body: req.body,
    redirect: 'manual',
  })
}

export default setAuthToken;
