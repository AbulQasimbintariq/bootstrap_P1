# bootstrap_P1

This is a small Bootstrap example site (local prototype).

How to preview locally:

- Option A — Python simple server (recommended):

  ```powershell
  python -m http.server 8000
  # then open http://localhost:8000/bootstrap_P1/home.html
  ```

- Option B — open files directly in browser (some features or relative paths may behave differently).

Notes:

- The project uses Bootstrap via CDN. During development some integrity attributes were removed to avoid blocked loads; add them back when you pin a version in production.
- If you add icons that rely on an external icon sprite or library, include that resource (e.g., Bootstrap Icons) or inline the SVG symbols.
