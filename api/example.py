# Example: Python interaction with Cloudflare DNS and D1

import requests
import sqlite3  # For local D1-like testing; use HTTP for real D1

# --- DNS Management via Cloudflare API ---
CLOUDFLARE_API_TOKEN = '<your-api-token>'
ZONE_ID = '<your-zone-id>'

# Create DNS record
resp = requests.post(
    f'https://api.cloudflare.com/client/v4/zones/{ZONE_ID}/dns_records',
    headers={
        'Authorization': f'Bearer {CLOUDFLARE_API_TOKEN}',
        'Content-Type': 'application/json'
    },
    json={
        'type': 'A',
        'name': 'test.seobrainai.com',
        'content': '1.2.3.4',
        'ttl': 1,
        'proxied': False
    }
)
print('DNS Create:', resp.status_code, resp.text)

# List DNS records
resp = requests.get(
    f'https://api.cloudflare.com/client/v4/zones/{ZONE_ID}/dns_records',
    headers={'Authorization': f'Bearer {CLOUDFLARE_API_TOKEN}'}
)
print('DNS List:', resp.status_code, resp.text)

# --- D1 Database Access (via Worker API) ---
API_URL = 'https://seobrainai.com/api/d1'

# Create item
resp = requests.post(API_URL, json={'name': 'foo', 'value': 'bar'})
print('D1 Create:', resp.status_code, resp.text)

# List items
resp = requests.get(API_URL)
print('D1 List:', resp.status_code, resp.text)
