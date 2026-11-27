// Integração: percorre /api/manga/{id}/chapters até o fim e confere total x linhas x IDs únicos.
const base = process.argv[2] || "http://localhost:8080", lang = process.argv[3] || "pt-br";
const get = async (p: string) => (await fetch(base + p)).json() as Promise<any>;
const ids: string[] = [];
for (const off of [0, 5, 60, 200, 500, 1200]) {
  const d = await get(`/api/manga?limit=3&offset=${off}&lang=${lang.split(",")[0]}`);
  ids.push(...d.data.map((m: any) => m.id));
}
let bad = 0;
for (const id of ids) {
  const seen = new Set<string>(); let off = 0, total = 0, pages = 0, last: any;
  for (; pages < 30; pages++) {
    const d = await get(`/api/manga/${id}/chapters?lang=${lang}&offset=${off}`); last = d;
    if (d.error) { console.log(id, "ERRO", d.error); bad++; break; }
    total = d.total; d.data.forEach((c: any) => seen.add(c.id));
    if (d.next == null) break; off = d.next;
  }
  const ok = seen.size === total; if (!ok) bad++;
  console.log(ok ? "OK " : "DIF", id.slice(0, 8), `total=${total} unicos=${seen.size} paginas=${pages + 1}`, JSON.stringify(last?.counts));
}
process.exit(bad ? 1 : 0);
