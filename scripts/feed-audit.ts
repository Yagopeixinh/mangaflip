// Diagnóstico: compara total do /manga/{id}/feed com capítulos paginados, por combinação de parâmetros.
// Uso: bun scripts/feed-audit.ts [lang=pt-br] [N obras]
const lang = process.argv[2] || "pt-br", N = Number(process.argv[3]) || 8;
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
async function md(path: string): Promise<any> {
  for (let i = 0; i < 5; i++) {
    const r = await fetch("https://api.mangadex.org" + path, { headers: { "User-Agent": "MangaFlip-audit/1.0" } });
    if (r.ok) { await sleep(250); return r.json(); }
    await sleep(1000 * (i + 1));
  }
  throw new Error("falhou " + path);
}
async function all(id: string, extra: string) {
  const ids = new Set<string>(); let off = 0, total = 0, rows = 0, ext = 0, nopg = 0, unav = 0;
  for (let g = 0; g < 60; g++) {
    const d = await md(`/manga/${id}/feed?limit=500&offset=${off}&translatedLanguage[]=${lang}&order[chapter]=desc${extra}`);
    total = d.total; if (!d.data.length) break;
    for (const c of d.data) { rows++; ids.add(c.id); const a = c.attributes; if (a.externalUrl) ext++; if (!a.pages) nopg++; if (a.isUnavailable) unav++; }
    off += d.data.length; if (off >= total) break;
  }
  return { total, rows, unique: ids.size, ext, nopg, unav };
}
const combos: Record<string, string> = {
  "atual(ext=0)": "&includeExternalUrl=0&includeFuturePublishAt=0",
  "default": "",
  "ext=1": "&includeExternalUrl=1",
  "ext=1+unav=1": "&includeExternalUrl=1&includeUnavailable=1",
  "ext=1+unav=1+empty=1": "&includeExternalUrl=1&includeUnavailable=1&includeEmptyPages=1",
};
const ids: [string, string][] = [];
for (const off of [0, 3, 40, 150, 400, 900]) {
  const d = await md(`/manga?limit=${Math.ceil(N / 4)}&offset=${off}&availableTranslatedLanguage[]=${lang}&order[followedCount]=desc&contentRating[]=safe&contentRating[]=suggestive`);
  for (const m of d.data) ids.push([m.id, Object.values(m.attributes.title)[0] as string]);
}
for (const [id, t] of ids.slice(0, N)) {
  console.log("\n#", t, id);
  for (const [k, v] of Object.entries(combos)) console.log("  ", k.padEnd(22), JSON.stringify(await all(id, v)));
}
