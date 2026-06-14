const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CloudScale App</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: sans-serif;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .card {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 16px;
      padding: 48px 56px;
      text-align: center;
      max-width: 520px;
    }
    h1 { font-size: 2rem; margin-bottom: 8px; }
    .subtitle { color: rgba(255,255,255,0.6); margin-bottom: 32px; }
    .badge {
      display: inline-block;
      background: #00d2ff;
      color: #0f2027;
      font-weight: 600;
      font-size: 0.85rem;
      padding: 6px 16px;
      border-radius: 99px;
      margin: 4px;
    }
  </style>
</head>
<body>
  <div class="card">
    <div style="font-size:48px;margin-bottom:16px">cloud</div>
    <h1>CloudScale</h1>
    <p class="subtitle">Deployed by <strong>Jibrel Abubakr Jibrel</strong></p>
    <span class="badge">Docker</span>
    <span class="badge">Terraform</span>
    <span class="badge">Azure</span>
    <span class="badge">GitHub Actions</span>
  </div>
</body>
</html>
  `);
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log('CloudScale app running on port ' + PORT));
