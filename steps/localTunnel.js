1. npm install --save localtunnel
2. npm install --save-dev forever
3. Tweak the json file:
"dev": "concurrently \"npm run server\" \"npm run client\" \"npm run webhook\"",
"webhook": "forever sendgrid_webhook.js"