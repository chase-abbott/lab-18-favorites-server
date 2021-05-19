export function formatGifs() {
  const repsonse = await request
  .get('api.giphy.com/v1/gifs/search')
  .query({ api_key: process.env.GIF_API_KEY })
  .query({ q: req.query.search });

  return repsonse.body
}