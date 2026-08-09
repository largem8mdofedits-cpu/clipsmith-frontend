// ============================================================
// CLIPSMITH CONFIG — edit this before you publish.
// ============================================================
// This is the ONE place that needs to change when you go from
// developing locally to deploying for real.
//
// Local development (running the backend on your own machine):
//   window.CLIPSMITH_BACKEND_URL = 'http://localhost:4242';
//
// After you deploy the backend (Render/Railway/Fly.io/etc), set this
// to that URL instead, e.g.:
//   window.CLIPSMITH_BACKEND_URL = 'https://api.yourdomain.com';
//
// Also update CLIENT_URL in clipsmith-backend/.env to match wherever
// you deploy this frontend (e.g. https://yourdomain.com) — Stripe and
// CORS both depend on that value matching your real site.

window.CLIPSMITH_BACKEND_URL = 'https://clipsmith-backend-production.up.railway.app';

// URL of the deployed AI pipeline service (clipsmith-ai-pipeline/pipeline.py)
// on Railway — cloud-hosted, no GPU required. If this isn't reachable, the
// editor automatically falls back to the sample demo instead of failing
// outright.
window.CLIPSMITH_AI_PIPELINE_URL = 'https://clipsmith-ai-pipeline-production.up.railway.app';
