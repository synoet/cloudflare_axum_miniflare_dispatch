import { Miniflare } from "miniflare";
import { beforeAll, describe, expect, it } from "vitest";
let mf;

beforeAll(async () => {
  mf = new Miniflare({
    scriptPath: "./build/worker/shim.mjs",
    modules: true,
    modulesRules: [
      { type: "CompiledWasm", include: ["**/*.wasm"], fallthrough: true },
    ],
  });
});

describe("Miniflare", () => {
  it("should work", async () => {
    const res = await mf.dispatchFetch("http://localhost:8787/");
    expect(res.status).toBe(200);
  });
});
