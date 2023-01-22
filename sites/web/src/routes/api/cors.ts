const allowed = ['https://chicago-tickets-cms.netlify.app']

export function getCrossOriginHeader(headers: Headers) {
  const origin = headers.get('origin')
  console.log('origin', origin)

  if (origin && allowed.includes(origin)) {
    return {
      'Access-Control-Allow-Origin': origin,
    }
  }
}
