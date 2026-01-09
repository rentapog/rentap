// Cloudflare Worker entry point for seobrainai.com API
// Handles CRUD, D1 DB, and DNS management

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/d1')) {
      return handleD1(request, env);
    }
    if (url.pathname.startsWith('/api/dns')) {
      return handleDNS(request, env);
    }
    return new Response('Not found', { status: 404 });
  }
};

// --- D1 CRUD Example ---
async function handleD1(request, env) {
  const { DB } = env;
  const url = new URL(request.url);
  if (request.method === 'POST') {
    const data = await request.json();
    await DB.prepare('INSERT INTO items (name, value) VALUES (?, ?)').bind(data.name, data.value).run();
    return new Response('Created', { status: 201 });
  }
  if (request.method === 'GET') {
    const { results } = await DB.prepare('SELECT * FROM items').all();
    return Response.json(results);
  }
  return new Response('Method Not Allowed', { status: 405 });
}

// --- DNS Management Example ---
async function handleDNS(request, env) {
  const apiToken = env.CLOUDFLARE_API_TOKEN;
  const url = new URL(request.url);
  if (request.method === 'POST') {
    const data = await request.json();
    // Create DNS record
    const resp = await fetch(`https://api.cloudflare.com/client/v4/zones/${env.zone_id}/dns_records`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: data.type,
        name: data.name,
        content: data.content,
        ttl: data.ttl || 1,
        proxied: data.proxied || false
      })
    });
    return new Response(await resp.text(), { status: resp.status });
  }
  if (request.method === 'GET') {
    // List DNS records
    const resp = await fetch(`https://api.cloudflare.com/client/v4/zones/${env.zone_id}/dns_records`, {
      headers: { 'Authorization': `Bearer ${apiToken}` }
    });
    return new Response(await resp.text(), { status: resp.status });
  }
  return new Response('Method Not Allowed', { status: 405 });
}
