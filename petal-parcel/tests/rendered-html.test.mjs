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

test("server-renders the finished admissions home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>SkillBridge Academy \| Practical Skill Courses in Ahmedabad<\/title>/i);
  assert.match(html, /Learn useful skills\./);
  assert.match(html, /Book a Free Demo Class/);
  assert.match(html, /Navrangpura, Ahmedabad/);
  assert.match(html, /Demo form only—no information is transmitted or stored\./);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders the core admission routes", async () => {
  const checks = [
    ["/courses", /Find the skill that fits your next step/],
    ["/courses/advanced-excel", /Course at a glance/],
    ["/about", /Training that respects where you are/],
    ["/stories", /Progress is personal/],
    ["/contact", /Let’s find a learning plan/],
  ];

  for (const [pathname, expected] of checks) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), expected, pathname);
  }
});

test("keeps starter-only code removed and production metadata present", async () => {
  const [layout, packageJson] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /SkillBridge Academy/);
  assert.match(layout, /og\.png/);
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../app/robots.ts", import.meta.url));
  await access(new URL("../app/sitemap.ts", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
