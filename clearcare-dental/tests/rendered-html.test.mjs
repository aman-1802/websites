import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the ClearCare Dental home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>ClearCare Dental \| Dentist in Ahmedabad<\/title>/i);
  assert.match(html, /Dental care,/);
  assert.match(html, /Book a visit/);
  assert.match(html, /Navrangpura, Ahmedabad/);
  assert.match(html, /Demo mode: please do not submit medical records/i);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps the single-page navigation targets present", async () => {
  const response = await render();
  const html = await response.text();

  for (const id of ["services", "approach", "information", "visit", "appointment"]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
});

test("keeps production metadata and crawl routes present", async () => {
  const [layout, packageJson] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /clearcare-dental-ahmedabad\.vercel\.app/);
  assert.match(layout, /ClearCare Dental/);
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../app/robots.ts", import.meta.url));
  await access(new URL("../app/sitemap.ts", import.meta.url));
});
