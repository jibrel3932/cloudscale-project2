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
      font-family: 'Segoe UI', sans-serif;
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
      backdrop-filter: blur(10px);
    }
    .logo { font-size: 48px; margin-bottom: 16px; }
    h1 { font-size: 2rem; font-weight: 600; margi


cat > ~/Desktop/cloudscale-project/app/package.json << 'EOF'
{
  "name": "cloudscale-app",
  "version": "1.0.0",
  "description": "CloudScale web app - Cloud Computing & DevOps Project 2",
  "main": "app.js",
  "scripts": { "start": "node app.js" },
  "dependencies": { "express": "^4.18.2" }
}
