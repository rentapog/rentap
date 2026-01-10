# Deploying to Render

Follow these steps to deploy your Vite React app to Render:

1. **Push your code to GitHub**
   - Make sure your project is in a GitHub repository.

2. **Create a new Web Service on Render**
   - Go to https://dashboard.render.com/
   - Click "New +" > "Web Service"
   - Connect your GitHub repo and select your project.

3. **Configure Build & Start Commands**
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run preview`
   - **Root Directory:** (leave blank if your `package.json` is in the root, or set to the correct subfolder)

4. **Set Environment Variables (if needed)**
   - For Vite, set `NODE_VERSION` to match your local Node.js version (e.g., `20`)
   - Add any other environment variables your app needs.

5. **Deploy**
   - Click "Create Web Service" and wait for the build to finish.
   - Your site will be live at the provided Render URL.

## Notes
- If you use client-side routing (react-router), add a `static.json` file to the root with:

```json
{
  "routes": [
    { "src": "/.*", "dest": "/index.html" }
  ]
}
```

- This ensures all routes serve your React app entry point.

---

For more details, see Render's docs: https://render.com/docs/deploy-create-react-app
