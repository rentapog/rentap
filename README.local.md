# seobrainai.com Cloudflare Worker API

This project provides a Cloudflare Worker backend for seobrainai.com with:
- D1 database integration (CRUD endpoints)
- DNS automation endpoints (Cloudflare DNS API)
- Python example for DNS and D1 access

## Structure
- `api/index.js` — Worker entry point (handles /api/d1 and /api/dns)
- `wrangler.toml` — Cloudflare Worker config for seobrainai.com
- `api/example.py` — Python example for DNS and D1

## Endpoints
- `POST /api/d1` — Create item in D1
- `GET /api/d1` — List items from D1
- `POST /api/dns` — Create DNS record
- `GET /api/dns` — List DNS records

## Setup
1. Fill in your Cloudflare `account_id`, `zone_id`, `d1_database_id`, and `CLOUDFLARE_API_TOKEN` in `wrangler.toml`.
2. Deploy with Wrangler CLI:
   ```
   wrangler deploy
   ```
3. Use the Python example in `api/example.py` to interact with the API and Cloudflare DNS.

## Notes
- D1 SQL schema must include a table: `items (id INTEGER PRIMARY KEY, name TEXT, value TEXT)`
- Replace placeholders in config and Python with your real values.
