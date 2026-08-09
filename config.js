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

window.CLIPSMITH_BACKEND_URL = 'http://localhost:4242';

// URL of your local AI pipeline (clipsmith-ai-pipeline/pipeline.py),
// running on your own machine's GPU via `uvicorn pipeline:app --port 8000`.
// If this isn't reachable, the editor automatically falls back to the
// sample demo instead of failing outright — so it's safe to leave this
// pointed at localhost even before you've deployed anything else.
window.CLIPSMITH_AI_PIPELINE_URL = 'https://observant-commitment-production-c6e9.up.railway.app';
