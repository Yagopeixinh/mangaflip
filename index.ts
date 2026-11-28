const html = String.raw`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#130d1c"><meta name="description" content="MangáFlip — catálogo e leitor de mangás, manhwas e manhuas.">
<meta property="og:title" content="MangáFlip"><meta property="og:description" content="Catálogo e leitor de mangás, manhwas e manhuas.">
<link rel="manifest" href="/manifest.webmanifest"><link rel="icon" href="/icon.svg" type="image/svg+xml">
<title>MangáFlip</title>
<style>
:root{color-scheme:dark;--bg:#100b17;--panel:#1b1425;--panel2:#241a31;--line:#392747;--text:#f5effb;--muted:#ad9dbb;--accent:#b875f2;--accent2:#7b3bc1}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}body{margin:0;background:var(--bg);color:var(--text);font:15px/1.45 system-ui,-apple-system,Segoe UI,sans-serif}
button,input,select{font:inherit;color:inherit}button{cursor:pointer}a{color:var(--accent);text-decoration:none}
.shell{max-width:1180px;margin:auto;padding:0 16px}
.top{position:sticky;top:0;z-index:5;background:#130d1cf2;backdrop-filter:blur(14px);border-bottom:1px solid var(--line);padding-top:env(safe-area-inset-top)}
.topin{height:58px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.logo{display:flex;align-items:center;gap:9px;color:var(--text);text-decoration:none}.logo svg{display:block;width:174px;height:42px;overflow:visible}.logo:focus-visible{outline:2px solid var(--accent);outline-offset:4px;border-radius:6px}
.nav{display:flex;gap:6px;overflow:auto;padding:8px 0;scrollbar-width:none}
.btn,.nav button,.chip{display:inline-block;border:1px solid transparent;background:transparent;color:var(--muted);border-radius:10px;padding:9px 12px;white-space:nowrap}
.nav button.active,.chip.active{background:#352044;border-color:#654080;color:#e2c4ff}
.chip{border-color:var(--line);padding:6px 11px;font-size:13px}
.btn.primary{background:var(--accent2);color:#fff}.btn.outline{border-color:var(--line);color:var(--text)}.btn:disabled{opacity:.4;cursor:default}.btn.sm{padding:6px 10px;font-size:13px}
main{padding:20px 0 90px}
.hero{padding:24px;border:1px solid #513468;border-radius:18px;background:radial-gradient(ellipse at 90% 10%,#63318c88,transparent 40%),linear-gradient(120deg,#2b173d,#171020);margin-bottom:22px}
.eyebrow{font-size:11px;letter-spacing:1.7px;color:#d5aaff;font-weight:700}.hero h1{font-size:clamp(27px,5vw,43px);line-height:1.08;margin:10px 0}.hero p{color:#c4b4d1;margin:0 0 16px}
.searchbar{display:flex;gap:8px}.field,.searchbar input{min-width:0;width:100%;background:#100b18;border:1px solid #523969;border-radius:11px;color:#fff;padding:12px 14px;outline:none}
.field:focus,.searchbar input:focus{border-color:var(--accent)}
.sectionhead{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:22px 0 12px}.sectionhead h2{font-size:19px;margin:0}
.muted{color:var(--muted)}.small{font-size:12px}.hidden{display:none!important}.right{display:flex;gap:8px;align-items:center}.grow{flex:1}
#net{font-size:11px;color:#8fe0a8}#net.bad{color:#ff9aa8}
.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px}
.hs{display:flex;gap:12px;overflow-x:auto;padding-bottom:8px;scroll-snap-type:x proximity}.hs>*{flex:0 0 132px;scroll-snap-align:start}.hs>.empty{flex:1 0 100%}
.card{position:relative;min-width:0;border:1px solid var(--line);border-radius:13px;background:var(--panel);overflow:hidden}.card>a{display:block;color:inherit}
.cover{display:block;width:100%;aspect-ratio:2/2.85;object-fit:cover;background:linear-gradient(145deg,#39234e,#17101f)}
.cardbody{padding:8px 9px 10px}.cardtitle{font-size:13px;font-weight:700;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.meta{font-size:11px;color:var(--muted);margin-top:4px}
.fav{position:absolute;top:6px;right:6px;width:32px;height:32px;border-radius:50%;border:0;background:#0b0710b8;color:#fff;font-size:16px;line-height:1;padding:0}.fav.on{color:#ff6b9a}
.bar{height:4px;border-radius:4px;background:#0006;margin-top:7px;overflow:hidden}.bar i{display:block;height:100%;background:var(--accent)}
.sk .cover{animation:pulse 1.1s ease-in-out infinite alternate}@keyframes pulse{from{opacity:.35}to{opacity:.8}}
.toolbar{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:12px 0}.toolbar select{background:var(--panel);border:1px solid var(--line);padding:9px;border-radius:9px}
.chips{display:flex;gap:6px;overflow-x:auto;padding:4px 0 8px;scrollbar-width:none}
.empty,.notice{background:var(--panel);border:1px solid var(--line);border-radius:13px;padding:16px;color:var(--muted)}.notice p{margin:8px 0}
.loading{padding:24px;text-align:center;color:var(--muted)}
.detail{display:grid;grid-template-columns:116px 1fr;gap:16px;margin:14px 0}.detail img{width:100%;border-radius:12px}.detail h1{font-size:22px;line-height:1.15;margin:0 0 7px}
.actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.desc{color:#d2c5de;font-size:14px;margin:6px 0;max-height:5.6em;overflow:hidden;white-space:pre-line}.desc.open{max-height:none}
.chapter{display:flex;justify-content:space-between;align-items:center;gap:12px;width:100%;background:var(--panel);border:1px solid var(--line);color:var(--text);padding:12px;border-radius:10px;margin:7px 0;text-align:left}
.chapter.done{opacity:.55}.hrow{display:flex;gap:12px;align-items:center}.hrow img{width:44px;height:62px;object-fit:cover;border-radius:6px}
.pill{display:inline-block;background:#342044;color:#dbb7ff;border-radius:30px;padding:4px 9px;font-size:11px;margin:3px 3px 3px 0}
body.reading .top,body.reading .bottomnav,body.reading .footer{display:none}body.reading main{padding-top:0}
.readerbar{position:sticky;top:0;z-index:6;background:#100b17f5;backdrop-filter:blur(10px);border-bottom:1px solid var(--line);padding-top:env(safe-area-inset-top)}
.rbin{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 0}.rtitle{min-width:0;flex:1}
.pbar{height:3px;background:#0005}.pbar i{display:block;height:100%;width:0;background:var(--accent)}
.pages{max-width:760px;margin:0 auto;background:#08060a;min-height:40vh}.pages img{display:block;width:100%;height:auto;min-height:120px;object-fit:contain}
.pages.single img{max-height:calc(100vh - 70px);width:auto;max-width:100%;margin:0 auto}
.pages img.failed{min-height:160px;border:1px dashed #654080;color:var(--muted);padding:20px;text-align:center}
.endnav{max-width:760px;margin:20px auto;text-align:center;display:grid;gap:10px}.endbtns{display:flex;gap:10px;justify-content:center}
.toast{position:fixed;left:50%;bottom:calc(80px + env(safe-area-inset-bottom));transform:translateX(-50%);background:#2d1b3f;border:1px solid #654080;padding:10px 16px;border-radius:12px;z-index:20;max-width:90vw;opacity:0;pointer-events:none;transition:opacity .2s}.toast.show{opacity:1}
.bottomnav{display:none}.footer{border-top:1px solid var(--line);padding:20px 0 35px;color:var(--muted);font-size:11px}
kbd{background:#2b1d3a;border:1px solid var(--line);border-radius:5px;padding:1px 6px;font-size:12px}
@media(min-width:600px){.grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.hs>*{flex-basis:150px}.detail{grid-template-columns:165px 1fr}.detail h1{font-size:29px}}
@media(min-width:960px){.grid{grid-template-columns:repeat(6,minmax(0,1fr))}}
@media(max-width:520px){.shell{padding:0 12px}.nav{display:none}.hero{padding:19px}.grid{gap:10px}
.bottomnav{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:8;justify-content:space-around;padding:9px 2px calc(9px + env(safe-area-inset-bottom));background:#181020f5;border-top:1px solid var(--line)}
.bottomnav button{background:none;border:0;color:var(--muted);font-size:11px;padding:0 6px}.bottomnav button.active{color:#d6a5ff}.footer{padding-bottom:80px}}

.themegrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-top:12px}.themechoice{display:flex;align-items:center;gap:8px;padding:10px;background:var(--panel2);border:1px solid var(--line);border-radius:10px;color:var(--text);text-align:left}.themechoice i{width:22px;height:22px;border-radius:7px;border:1px solid #ffffff33;flex:none}.themechoice.active{border-color:var(--accent);box-shadow:0 0 0 1px var(--accent)}.accentchoices{display:flex;gap:12px;flex-wrap:wrap;margin-top:12px}.accentchoices button{width:34px;height:34px;border-radius:50%;border:3px solid var(--panel);outline:1px solid var(--line);background:var(--swatch)}.accentchoices button.active{outline:2px solid var(--text)}.settingrow{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid var(--line)}.settingrow select{max-width:58%;background:var(--panel2);border:1px solid var(--line);padding:9px;border-radius:9px;color:var(--text)}
:root[data-theme="midnight"]{--bg:#0b1220;--panel:#121d30;--panel2:#1a2940;--line:#293d5a;--text:#edf4ff;--muted:#9db0ca;--accent:#70a9ff;--accent2:#356fc4}
:root[data-theme="graphite"]{--bg:#17191d;--panel:#22262c;--panel2:#2c3139;--line:#3b424c;--text:#f1f2f4;--muted:#aeb5bf;--accent:#a9b4c4;--accent2:#596779}
:root[data-theme="plum"]{--bg:#190d20;--panel:#281630;--panel2:#35203f;--line:#50345c;--text:#fff0ff;--muted:#c5a9ca;--accent:#e28cf0;--accent2:#9946aa}
:root[data-theme="ocean"]{--bg:#071b24;--panel:#0e2935;--panel2:#153746;--line:#245064;--text:#e8faff;--muted:#9dc2ce;--accent:#51c6d8;--accent2:#16869b}
:root[data-theme="light"]{color-scheme:light;--bg:#f4f1f8;--panel:#fff;--panel2:#eee9f4;--line:#d8cfe2;--text:#241b2d;--muted:#71667b;--accent:#8542b8;--accent2:#7132a5}
:root[data-theme="light"] .top{background:#f4f1f8f2}:root[data-theme="light"] .field,:root[data-theme="light"] .searchbar input{background:#fff;color:#241b2d}:root[data-theme="light"] .bottomnav{background:#fffffff5}
@media(max-width:520px){.themegrid{grid-template-columns:repeat(2,minmax(0,1fr))}.settingrow{align-items:flex-start;flex-direction:column}.settingrow select{max-width:100%;width:100%}.bottomnav button{font-size:10px;padding:0 3px}}
.scan-card{padding:14px;display:flex;flex-direction:column;gap:8px}.scan-card h3{margin:0;font-size:16px}.scan-card p{margin:0}.scan-status{font-size:11px;color:var(--muted)}.scan-links{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto}.scan-links a{font-size:13px}.history-card{position:relative}.history-remove{position:absolute;top:7px;right:7px;width:30px;height:30px;border:1px solid var(--line);border-radius:50%;background:#100b18eF;color:var(--text);font-size:18px;line-height:1;display:grid;place-items:center;opacity:0;transition:opacity .15s,background .15s;z-index:2}.history-card:hover .history-remove,.history-card:focus-within .history-remove{opacity:1}.history-remove:hover{background:var(--accent);color:#fff}@media(hover:none){.history-remove{opacity:1}}@media(prefers-reduced-motion:reduce){.history-remove{transition:none}}
</style></head>
<body>
<header class="top"><div class="shell topin"><a class="logo" href="#/" aria-label="MangáFlip — início"><svg viewBox="0 0 230 54" role="img" aria-labelledby="mangaflipLogoTitle"><title id="mangaflipLogoTitle">MangáFlip</title><g transform="translate(2 5)"><path d="M2 8 Q17 2 31 11 V39 Q17 31 2 37Z" fill="#f7f2fb" stroke="#e7dcef" stroke-width="1.5"/><path d="M31 11 Q45 2 60 8 V37 Q45 31 31 39Z" fill="#fff" stroke="#e7dcef" stroke-width="1.5"/><path d="M31 11 V39" stroke="#d94b55" stroke-width="2"/><path d="M7 13 Q17 9 26 15 M7 19 Q17 15 26 21 M36 15 Q46 9 55 13 M36 21 Q46 15 55 19" fill="none" stroke="#33263d" stroke-width="1.6" stroke-linecap="round"/><path d="M5 5 L5 1 M57 5 L57 1" stroke="#d94b55" stroke-width="2" stroke-linecap="round"/></g><text x="72" y="35" font-family="Arial,Helvetica,sans-serif" font-size="27" font-weight="800" letter-spacing="-1" fill="#f7f2fb">Manga</text><text x="157" y="35" font-family="Arial,Helvetica,sans-serif" font-size="27" font-weight="800" letter-spacing="-1" fill="#e45b65">Flip</text></svg></a><div class="right"><span id="net">Conectando…</span><button class="btn outline" id="randBtn" title="Mangá aleatório">🎲</button><button class="btn outline" id="refresh" title="Atualizar">↻</button></div></div>
<nav class="shell nav"><button data-tab="home" class="active">⌂ Início</button><button data-tab="catalog">▤ Mangás</button><button data-tab="library">♥ Biblioteca</button><button data-tab="scans">♧ Scans</button><button data-tab="about">ⓘ Fontes</button><button data-tab="settings">⚙ Configurações</button></nav></header>
<main class="shell">
<section id="home">
<div class="hero"><div class="eyebrow">SUA PRÓXIMA LEITURA COMEÇA AQUI</div><h1>Entre em outro mundo.</h1><p>Mangás, manhwas e manhuas para ler no celular, com biblioteca e progresso salvos no seu aparelho.</p><form class="searchbar" id="searchForm"><input id="search" placeholder="Pesquisar por título…  ( / )" autocomplete="off"><button class="btn primary">Buscar</button></form></div>
<div id="contWrap" class="hidden"><div class="sectionhead"><h2>Continue lendo</h2><button class="btn outline sm" data-clear-history>Limpar hist&#243;rio</button><button class="btn outline sm" data-go="library">Histórico</button></div><div id="cont" class="hs"></div></div>
<div class="sectionhead"><h2>Novos capítulos em português</h2><button class="btn outline sm" data-cat="latest">Ver mais</button></div><div id="latest" class="hs"></div>
<div class="sectionhead"><h2>Populares no MangáFlip</h2><button class="btn outline sm" data-cat="popular">Ver mais</button></div><div id="popular" class="hs"></div>
<div class="sectionhead"><h2>Manhwas em alta</h2><button class="btn outline sm" data-cat="manhwa">Ver mais</button></div><div id="manhwa" class="hs"></div>
<div class="sectionhead"><h2>Descubra no AniList</h2><span class="small muted">toque para buscar no MangáFlip</span></div>
<div class="chips"><button class="chip active" data-alsort="TRENDING_DESC">🔥 Em alta</button><button class="chip" data-alsort="POPULARITY_DESC">⭐ Populares</button><button class="chip" data-alsort="SCORE_DESC">🏆 Melhor nota</button></div><div id="anilist" class="hs"></div>
</section>
<section id="catalog" class="hidden"><div class="sectionhead"><h2>Biblioteca de obras</h2><span class="small muted" id="catalogCount"></span></div>
<form class="searchbar" id="catalogForm"><input id="catalogSearch" placeholder="Buscar mangá, manhwa…" autocomplete="off"><button class="btn primary">Buscar</button></form>
<div class="toolbar"><select id="fSort"><option value="followedCount">Mais seguidos</option><option value="relevance">Relevância</option><option value="rating">Melhor avaliados</option><option value="latestUploadedChapter">Atualizados</option><option value="createdAt">Novos</option></select><select id="fOrigin"><option value="">Todas as origens</option><option value="ja">Japão • Mangá</option><option value="ko">Coreia • Manhwa</option><option value="zh">China • Manhua</option></select><select id="fLang"><option value="">Qualquer idioma</option><option value="pt-br">Em português</option><option value="en">Em inglês</option><option value="es">Em espanhol</option></select><select id="fStatus"><option value="">Qualquer status</option><option value="ongoing">Em andamento</option><option value="completed">Completo</option><option value="hiatus">Em hiato</option></select></div>
<div class="chips" id="tags"></div><div id="catalogGrid" class="grid"></div><div class="toolbar"><button class="btn outline hidden" id="more">Carregar mais</button></div></section>
<section id="library" class="hidden"><div class="sectionhead"><h2>Minha biblioteca</h2><span class="small muted" id="libCount"></span></div>
<div class="toolbar"><button class="chip active" data-lib="fav">♥ Favoritos</button><button class="chip" data-lib="hist">⏱ Histórico</button><span class="grow"></span><button class="btn outline sm" id="expBtn">Exportar</button><button class="btn outline sm" id="impBtn">Importar</button><input type="file" id="impFile" accept="application/json" hidden></div><div id="libBody"></div></section>
<section id="scans" class="hidden">
<div class="sectionhead"><h2>Scans independentes</h2><span class="small muted" id="scanCount"></span></div>
<p class="muted small">Equipes independentes, seus próprios canais e catálogos. O MangaFlip não presume parceria nem copia capítulos: cada scan controla sua publicação.</p>
<form id="scanSearchForm" class="searchbar"><input id="scanSearch" placeholder="Buscar scan pelo nome…" autocomplete="off"><button class="btn primary">Buscar</button></form>
<div class="toolbar"><select id="scanStatus"><option value="">Todas as equipes</option><option value="public">Catálogo/canais públicos</option><option value="community">Comunidade</option><option value="review">A confirmar</option><option value="inactive">Inativas (arquivo)</option></select></div>
<div id="scanCards" class="grid"></div>
<div id="scanProfile" class="hidden"></div>
</section>
<section id="detail" class="hidden"><button class="btn outline sm" data-back>← Voltar</button><div id="detailContent"></div>
<div class="sectionhead"><h2>Capítulos <span class="small muted" id="chCount"></span></h2><div class="right"><select id="chLang" class="field" style="width:auto;padding:8px"></select><button class="btn outline sm" id="chOrder">↓ Recentes</button></div></div>
<div class="small muted hidden" id="chNote" style="margin-bottom:8px"></div><button class="btn outline sm hidden" id="unavBtn" style="margin-bottom:8px">Ocultar indisponíveis</button>
<input class="field" id="chFind" placeholder="Ir para o capítulo (ex.: 120)" style="margin-bottom:8px" autocomplete="off"><div id="chapters"></div><button class="btn outline hidden" id="moreChapters">Carregar mais capítulos</button></section>
<section id="reader" class="hidden"><div class="readerbar"><div class="shell rbin"><button class="btn outline" id="closeReader" aria-label="Voltar à obra">←</button><div class="rtitle"><div id="readerTitle" class="cardtitle">Leitor</div><div id="readerMeta" class="small muted"></div></div><div class="right"><button class="btn outline" id="modeBtn" title="Modo de leitura (M)">↕</button><button class="btn outline" id="saverBtn" title="Qualidade das imagens">HD</button><button class="btn outline" id="prevCh" title="Capítulo anterior ([)">‹</button><button class="btn outline" id="nextCh" title="Próximo capítulo (])">›</button></div></div><div class="pbar"><i id="pbar"></i></div></div>
<div id="pageStatus" class="loading"></div><div id="pages" class="pages"></div><div id="endReader" class="endnav hidden"></div></section>
<section id="settings" class="hidden"><div class="sectionhead"><h2>Personalizar aparência</h2><span class="small muted">Salvo neste aparelho</span></div><div class="notice"><b>Temas de fundo</b><p>Escolha a atmosfera do seu MangáFlip.</p><div class="themegrid"><button class="themechoice" data-theme-choice="obsidian"><i style="background:#100b17"></i>Obsidian</button><button class="themechoice" data-theme-choice="midnight"><i style="background:#0b1220"></i>Midnight</button><button class="themechoice" data-theme-choice="graphite"><i style="background:#17191d"></i>Graphite</button><button class="themechoice" data-theme-choice="plum"><i style="background:#190d20"></i>Plum</button><button class="themechoice" data-theme-choice="ocean"><i style="background:#071b24"></i>Ocean</button><button class="themechoice" data-theme-choice="light"><i style="background:#f4f1f8"></i>Claro</button></div></div><div class="notice" style="margin-top:12px"><b>Cor de destaque</b><p>Personalize botões, links e detalhes.</p><div class="accentchoices"><button data-accent="#b875f2" aria-label="Roxo"></button><button data-accent="#5b9dff" aria-label="Azul"></button><button data-accent="#39c6a5" aria-label="Verde"></button><button data-accent="#f08aaf" aria-label="Rosa"></button><button data-accent="#e3a64b" aria-label="Âmbar"></button><button data-accent="#e46d55" aria-label="Coral"></button></div></div><div class="notice" style="margin-top:12px"><b>Leitura</b><p>Preferências para o leitor de capítulos.</p><label class="settingrow">Modo inicial<select id="settingMode"><option value="scroll">Rolagem contínua</option><option value="page">Página a página</option></select></label><label class="settingrow">Qualidade de imagens<select id="settingSaver"><option value="false">Padrão (melhor qualidade)</option><option value="true">Econômica (menos dados)</option></select></label><button class="btn outline sm" id="resetTheme">Restaurar padrão</button></div></section>
<section id="about" class="hidden"><div class="sectionhead"><h2>Fontes e transparência</h2></div>
<div class="notice"><b>MangaDex</b><p>Fonte de capítulos e páginas. Respeitamos a atribuição ao MangaDex e aos grupos, pedidos de remoção e a política sem anúncios nem serviços pagos.</p><p><a href="https://mangadex.org" target="_blank" rel="noopener">Abrir MangaDex ↗</a> · <a href="https://api.mangadex.org/docs/" target="_blank" rel="noopener">API ↗</a></p></div>
<div class="notice" style="margin-top:12px"><b>AniList</b><p>Catálogo complementar de metadados, capas e notas. Não fornece páginas de capítulos.</p><p><a href="https://anilist.co" target="_blank" rel="noopener">Abrir AniList ↗</a> · <a href="https://docs.anilist.co/" target="_blank" rel="noopener">Documentação ↗</a></p></div>
<div class="notice" style="margin-top:12px"><b>Outras plataformas</b><p>MANGA Plus e WEBTOON são fontes oficiais para leitura em suas próprias plataformas. Não copiamos seus capítulos nem contornamos suas proteções.</p><p><a href="https://mangaplus.shueisha.co.jp/" target="_blank" rel="noopener">MANGA Plus ↗</a> · <a href="https://www.webtoons.com/" target="_blank" rel="noopener">WEBTOON ↗</a></p></div>
<div class="notice" style="margin-top:12px"><b>Atalhos do leitor</b><p><kbd>←</kbd> <kbd>→</kbd> página (modo página) · <kbd>[</kbd> <kbd>]</kbd> capítulo anterior/próximo · <kbd>M</kbd> modo rolagem/página · <kbd>Esc</kbd> voltar à obra · <kbd>/</kbd> buscar</p><p>Favoritos, hist\u00f3rico e progresso ficam salvos só neste aparelho. Use Exportar na Biblioteca para levar para outro.</p><button class="btn outline sm" id="wipeBtn">Apagar dados locais</button></div></section>
</main>
<footer class="shell footer">MangáFlip é um projeto independente. Créditos das obras e traduções pertencem aos respectivos titulares e grupos. Sem anúncios.</footer>
<div class="bottomnav"><button data-tab="home" class="active">⌂<br>Início</button><button data-tab="catalog">▤<br>Mangás</button><button data-tab="library">♥<br>Biblioteca</button><button data-tab="scans">♧<br>Scans</button><button data-tab="about">ⓘ<br>Fontes</button><button data-tab="settings">⚙<br>Ajustes</button></div>
<div id="toast" class="toast" role="status"></div>
<script>
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const isId=s=>/^[0-9a-f-]{36}$/i.test(s||'');
const store={get(k,d){try{const v=localStorage.getItem('mh.'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('mh.'+k,JSON.stringify(v))}catch(e){}}};
let P=Object.assign({mode:'scroll',saver:false,lang:'pt-br'},store.get('prefs',{}));
const S={tab:'home',req:0,nav:0,offset:0,tags:new Set(),tagList:[],manga:null,chapters:[],chOffset:0,chTotal:0,lang:'pt-br',order:'desc',rd:null,page:0,io:null,sv:0,fails:0,lib:'fav',al:'TRENDING_DESC'};
const known={};
const LANGS={'pt-br':'Português (BR)',pt:'Português (PT)',en:'Inglês',es:'Espanhol','es-la':'Espanhol (LA)',fr:'Francês',it:'Italiano',de:'Alemão',ru:'Russo',id:'Indonésio',tr:'Turco',pl:'Polonês',vi:'Vietnamita',th:'Tailandês',ar:'Árabe',ja:'Japonês',ko:'Coreano',zh:'Chinês'};
const ORIGIN={ja:'Mangá',ko:'Manhwa',zh:'Manhua','zh-hk':'Manhua'};
const STATUS={ongoing:'Em andamento',completed:'Completo',hiatus:'Em hiato',cancelled:'Cancelado'};
const GEN={Action:'Ação',Adventure:'Aventura',Comedy:'Comédia',Drama:'Drama',Fantasy:'Fantasia',Horror:'Terror',Romance:'Romance','Sci-Fi':'Ficção científica','Slice of Life':'Cotidiano',Sports:'Esportes',Mystery:'Mistério',Psychological:'Psicológico',Thriller:'Suspense',Tragedy:'Tragédia',Historical:'Histórico',Music:'Música',Magic:'Magia','Martial Arts':'Artes marciais','School Life':'Vida escolar',Supernatural:'Sobrenatural',Superhero:'Super-herói',Medical:'Médico',Philosophical:'Filosófico',Reincarnation:'Reencarnação',Survival:'Sobrevivência',Monsters:'Monstros',Villainess:'Vilã','Time Travel':'Viagem no tempo',Crime:'Crime',Mecha:'Mecha',Isekai:'Isekai'};
const fmt=n=>n>=1e6?(n/1e6).toFixed(1)+'M':n>=1e3?(n/1e3).toFixed(1)+'k':String(n);
const cover=(m,z)=>m&&m.cover?m.cover+'.'+(z||256)+'.jpg':'';
const label=o=>ORIGIN[o]||'Mangá';
const skel=n=>'<div class="card sk"><div class="cover"></div><div class="cardbody"><div class="cardtitle">&nbsp;</div></div></div>'.repeat(n);
function ago(t){if(!t)return'';const s=(Date.now()-new Date(t).getTime())/1000;if(s<3600)return'há '+Math.max(1,Math.floor(s/60))+' min';if(s<86400)return'há '+Math.floor(s/3600)+' h';if(s<2592000)return'há '+Math.floor(s/86400)+' d';if(s<31536000)return'há '+Math.floor(s/2592000)+' mes';return'há '+Math.floor(s/31536000)+' a'}
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2600)}
function setNet(ok){const n=$('#net');n.textContent=ok?'Online':'Fonte indisponível';n.classList.toggle('bad',!ok)}
async function api(p){const r=await fetch(p);let j=null;try{j=await r.json()}catch(e){}if(!r.ok)throw new Error((j&&j.error)||('HTTP '+r.status));return j}
/* ---------- armazenamento local ---------- */
const favs=()=>store.get('fav',[]);
const isFav=id=>favs().some(f=>f.id===id);
const hist=()=>store.get('hist',[]);
const histOf=id=>hist().find(h=>h.id===id);
function saveHist(e){const l=hist().filter(h=>h.id!==e.id);l.unshift(e);store.set('hist',l.slice(0,40))}
const readOf=id=>store.get('read',{})[id]||[];
function markRead(mid,cid){const r=store.get('read',{});const a=r[mid]||[];if(!a.includes(cid)){a.push(cid);r[mid]=a.slice(-3000);store.set('read',r)}}
function toggleFav(id){const m=known[id];let l=favs();if(l.some(f=>f.id===id)){l=l.filter(f=>f.id!==id);toast('Removido da biblioteca')}else{if(!m)return;l.unshift({id:m.id,title:m.title,cover:m.cover,origin:m.origin,status:m.status});toast('Adicionado à biblioteca ♥')}
store.set('fav',l);const on=isFav(id);$$('[data-fav="'+id+'"]').forEach(b=>{b.classList.toggle('on',on);b.textContent=b.classList.contains('fav')?(on?'♥':'♡'):(on?'♥ Na biblioteca':'♡ Favoritar')});if(S.tab==='library')renderLibrary()}
/* ---------- cartões ---------- */
function card(m){known[m.id]=m;const f=isFav(m.id);return '<div class="card"><a href="#/m/'+m.id+'"><img class="cover" loading="lazy" src="'+esc(cover(m,256))+'" alt="" onerror="this.style.opacity=.25"><div class="cardbody"><div class="cardtitle">'+esc(m.title)+'</div><div class="meta">'+label(m.origin)+(m.status?' · '+esc(STATUS[m.status]||m.status):'')+'</div></div></a><button class="fav'+(f?' on':'')+'" data-fav="'+m.id+'" aria-label="Favoritar">'+(f?'♥':'♡')+'</button></div>'}
function alCard(m){const t=(m.title&&(m.title.english||m.title.romaji))||'Sem título';return '<div class="card"><a href="'+esc(m.siteUrl||('https://anilist.co/manga/'+m.id))+'" data-al="'+esc(t)+'" target="_blank" rel="noopener"><img class="cover" loading="lazy" src="'+esc(m.coverImage&&m.coverImage.large||'')+'" alt=""><div class="cardbody"><div class="cardtitle">'+esc(t)+'</div><div class="meta">'+(m.averageScore?'★ '+(m.averageScore/10).toFixed(1)+' · ':'')+esc(m.format||'')+'</div></div></a></div>'}
async function fill(sel,url){const el=$(sel);el.dataset.url=url;el.innerHTML=skel(8);try{const d=await api(url);el.innerHTML=d.data.map(card).join('')||'<div class="empty">Nada por aqui ainda.</div>';setNet(true)}catch(e){setNet(false);el.innerHTML='<div class="empty">Não foi possível carregar: '+esc(e.message)+' <button class="btn outline sm" data-retry>Tentar de novo</button></div>'}}
async function loadAnilist(){const el=$('#anilist');el.innerHTML=skel(8);try{const d=await api('/api/anilist?sort='+S.al);el.innerHTML=d.data.map(alCard).join('')||'<div class="empty">Sem resultados.</div>'}catch(e){el.innerHTML='<div class="empty">AniList indisponível: '+esc(e.message)+'</div>'}}
async function findAndOpen(t,url){toast('Procurando no MangaDex…');try{const d=await api('/api/manga?limit=1&sort=relevance&q='+encodeURIComponent(t));if(d.data[0])location.hash='#/m/'+d.data[0].id;else{toast('Não achei no MangaDex — abrindo AniList');window.open(url,'_blank','noopener')}}catch(e){window.open(url,'_blank','noopener')}}
function loadHome(){fill('#latest','/api/manga?limit=14&sort=latestUploadedChapter&lang=pt-br');fill('#popular','/api/manga?limit=14&sort=followedCount');fill('#manhwa','/api/manga?limit=14&sort=followedCount&origin=ko');loadAnilist()}
function removeHistory(id){store.set('hist',hist().filter(h=>h.id!==id));renderContinue();renderLibrary();toast('Removido do hist\u00f3rico')}
function clearReadingHistory(){if(confirm('Limpar todo o hist\u00f3rico de leitura?')){store.set('hist',[]);renderContinue();renderLibrary();toast('Hist\u00f3rico limpo')}}
function renderContinue(){const l=hist().slice(0,10);$('#contWrap').classList.toggle('hidden',!l.length);$('#cont').innerHTML=l.map(h=>'<div class="card history-card"><a href="#/r/'+h.id+'/'+h.cid+'"><img class="cover" loading="lazy" src="'+esc(cover(h,256))+'" alt=""><div class="cardbody"><div class="cardtitle">'+esc(h.title)+'</div><div class="meta">Cap. '+esc(h.ch||'?')+' · pág. '+(h.page+1)+'/'+(h.total||'?')+'</div><div class="bar"><i style="width:'+(h.total?Math.round((h.page+1)/h.total*100):0)+'%"></i></div></div></a><button class="history-remove" type="button" data-remove-history="'+esc(h.id)+'" aria-label="Remover do hist&#243;rico" title="Remover do hist&#243;rico">&times;</button></div>').join('')}
/* ---------- catálogo ---------- */
function renderTags(){$('#tags').innerHTML=S.tagList.map(t=>'<button class="chip'+(S.tags.has(t.id)?' active':'')+'" data-tg="'+t.id+'">'+esc(GEN[t.name]||t.name)+'</button>').join('')+(S.tags.size?'<button class="chip" data-tg="">✕ Limpar</button>':'')}
async function loadTags(){if(S.tagList.length)return;try{const d=await api('/api/tags');S.tagList=d.data;renderTags()}catch(e){}}
async function searchCatalog(reset){if(reset===undefined)reset=true;const id=++S.req;if(reset)S.offset=0;const g=$('#catalogGrid');if(reset)g.innerHTML=skel(12);
const q=$('#catalogSearch').value.trim(),sel=$('#fSort');if(q&&sel.value==='followedCount')sel.value='relevance';else if(!q&&sel.value==='relevance')sel.value='followedCount';
const p=new URLSearchParams({limit:'24',offset:String(S.offset),sort:sel.value});if(q)p.set('q',q);
[['origin','#fOrigin'],['lang','#fLang'],['status','#fStatus']].forEach(a=>{const v=$(a[1]).value;if(v)p.set(a[0],v)});if(S.tags.size)p.set('tags',[...S.tags].join(','));
try{const d=await api('/api/manga?'+p);if(id!==S.req)return;setNet(true);const html=d.data.map(card).join('');g.innerHTML=reset?(html||'<div class="empty" style="grid-column:1/-1">Nenhuma obra encontrada. Tente outros filtros.</div>'):g.innerHTML+html;S.offset+=d.data.length;$('#catalogCount').textContent=S.offset+' de '+d.total+' obras';$('#more').classList.toggle('hidden',S.offset>=d.total||!d.data.length)}
catch(e){if(id!==S.req)return;setNet(false);if(reset)g.innerHTML='<div class="empty" style="grid-column:1/-1">Erro ao buscar: '+esc(e.message)+'</div>';else toast('Erro: '+e.message)}}
function openCatalog(o){o=o||{};S.catLoaded=1;$('#catalogSearch').value=o.q||'';$('#fSort').value=o.sort||'followedCount';$('#fOrigin').value=o.origin||'';$('#fLang').value=o.lang||'';$('#fStatus').value=o.status||'';S.tags=new Set(o.tags||[]);loadTags();renderTags();go('catalog');searchCatalog(true)}
/* ---------- detalhe da obra ---------- */
function pickLang(m){const a=m.langs&&m.langs.length?m.langs:['pt-br','en'];return[P.lang,'pt-br','en',a[0]].find(l=>a.includes(l))||a[0]}
function renderDetail(){const m=S.manga,f=isFav(m.id),h=histOf(m.id);
$('#detailContent').innerHTML='<div class="detail"><img src="'+esc(cover(m,512))+'" alt=""><div><h1>'+esc(m.title)+'</h1><div class="muted small">'+label(m.origin)+' · '+esc(STATUS[m.status]||m.status||'')+(m.year?' · '+m.year:'')+(m.rating?' · ★ '+m.rating.toFixed(1):'')+(m.follows?' · '+fmt(m.follows)+' seguidores':'')+'</div>'+(m.authors&&m.authors.length?'<div class="small muted">'+esc(m.authors.join(', '))+'</div>':'')+'<div class="actions"><button class="btn primary" id="readBtn">▶ '+(h?'Continuar (cap. '+esc(h.ch||'?')+')':'Começar a ler')+'</button><button class="btn outline" data-fav="'+m.id+'">'+(f?'♥ Na biblioteca':'♡ Favoritar')+'</button><button class="btn outline" id="shareBtn" title="Compartilhar">⤴</button></div></div></div><div class="desc" id="desc">'+esc(m.desc||'Sinopse não disponível.')+'</div>'+((m.desc||'').length>260?'<button class="btn outline sm" id="descMore">Ver mais</button>':'')+'<div style="margin-top:8px">'+(m.tags||[]).map(t=>'<a class="pill" href="#/catalog" data-tag="'+t.id+'">'+esc(GEN[t.name]||t.name)+'</a>').join('')+'</div>';
const rank=l=>{const i=['pt-br','pt','en','es','es-la'].indexOf(l);return i<0?9:i};
const ls=(m.langs&&m.langs.length?m.langs.slice():['pt-br','en']).sort((a,b)=>rank(a)-rank(b)||a.localeCompare(b));
const opts=ls.map(l=>[l,LANGS[l]||l]);const ip=ls.indexOf('pt');if(ls.includes('pt-br')&&ip>=0)opts.splice(ip+1,0,['pt-br,pt','Português (BR + PT, combinado)']);
$('#chLang').innerHTML=opts.map(o=>'<option value="'+esc(o[0])+'"'+(o[0]===S.lang?' selected':'')+'>'+esc(o[1])+'</option>').join('');$('#chOrder').textContent=S.order==='desc'?'↓ Recentes':'↑ Antigos'}
async function openManga(id){const tok=++S.nav;show('detail');const box=$('#detailContent');box.innerHTML='<div class="loading">Carregando obra…</div>';$('#chapters').innerHTML='';$('#chCount').textContent='';$('#moreChapters').classList.add('hidden');$('#chFind').value='';
try{const m=await api('/api/manga/'+id);if(tok!==S.nav)return;known[id]={id:m.id,title:m.title,cover:m.cover,origin:m.origin,status:m.status};const prev=S.manga&&S.manga.id===id;S.manga=m;if(!prev)S.chapters=[];S.lang=pickLang(m);document.title=m.title+' · MangáFlip';renderDetail();await loadChapters(true)}
catch(e){if(tok!==S.nav)return;box.innerHTML='<div class="empty">Não foi possível abrir a obra: '+esc(e.message)+' <button class="btn outline sm" data-ro>Tentar de novo</button></div>'}}
const num=c=>{const n=parseFloat(c.chapter);return isNaN(n)?-1:n};
const isReadable=c=>!c.externalUrl&&!c.unavailable&&c.pages>0;
function navList(){const by=new Map();for(const c of S.chapters){if(!isReadable(c))continue;const k=c.chapter!=null?'c'+c.chapter:c.id,p=by.get(k);if(!p||c.pages>p.pages||(c.id===(S.rd&&S.rd.cid)&&p.id!==(S.rd&&S.rd.cid)&&c.pages>=p.pages))by.set(k,c)}return[...by.values()].sort((a,b)=>num(b)-num(a))}
async function loadChapters(reset){const m=S.manga,tok=S.nav;if(!m)return;if(reset){S.chapters=[];S.chOffset=0;S.chNext=0;S.chTotal=0;$('#chapters').innerHTML='<div class="loading">Procurando capítulos…</div>'}
try{const d=await api('/api/manga/'+m.id+'/chapters?lang='+encodeURIComponent(S.lang)+'&offset='+S.chOffset);if(tok!==S.nav)return;const seen=new Set(S.chapters.map(c=>c.id));for(const c of d.data)if(!seen.has(c.id)){seen.add(c.id);S.chapters.push(c)}
S.chapters.sort((a,b)=>num(b)-num(a));S.chNext=d.next==null?null:d.next;S.chOffset=S.chNext==null?S.chOffset:S.chNext;S.chTotal=d.total||0;renderChapters()}
catch(e){if(tok!==S.nav)return;$('#chapters').innerHTML='<div class="empty">Erro ao buscar capítulos: '+esc(e.message)+' <button class="btn outline sm" data-rc>Tentar de novo</button></div>'}}
function renderChapters(){if(!S.manga)return;const all=S.chapters,showU=P.showUnavailable!==false;let list=all.filter(c=>showU||!c.unavailable);if(S.order==='asc')list.reverse();const q=$('#chFind').value.trim().toLowerCase(),rd=new Set(readOf(S.manga.id)),multi=S.lang.includes(',');
const arr=q?list.filter(c=>String(c.chapter||'').startsWith(q)||(c.title||'').toLowerCase().includes(q)):list;
$('#chapters').innerHTML=arr.map(c=>{const label=(c.chapter?'Capítulo '+esc(c.chapter):'Oneshot'),meta=esc(c.title||'')+(c.title?' · ':'')+esc(c.group||'Grupo não identificado')+(multi&&c.lang?' · '+esc(LANGS[c.lang]||c.lang):'');
if(c.externalUrl)return'<a class="chapter" href="'+esc(c.externalUrl)+'" target="_blank" rel="noopener noreferrer nofollow"><span><b>'+label+' ↗</b><br><span class="small muted">'+meta+' · Link externo (abre em outro site)</span></span><span class="small muted">'+ago(c.at)+'</span></a>';
if(isReadable(c))return'<a class="chapter'+(rd.has(c.id)?' done':'')+'" href="#/r/'+S.manga.id+'/'+c.id+'"><span><b>'+label+'</b>'+(rd.has(c.id)?' ✓':'')+'<br><span class="small muted">'+meta+'</span></span><span class="small muted">'+ago(c.at)+' · '+c.pages+' pág.</span></a>';
return'<div class="chapter" aria-disabled="true" style="opacity:.55;cursor:not-allowed"><span><b>'+label+' · indisponível</b><br><span class="small muted">'+meta+' · sem páginas na fonte</span></span><span class="small muted">'+ago(c.at)+'</span></div>'}).join('')||'<div class="empty">Nenhum capítulo encontrado neste idioma no MangaDex. Troque o idioma acima.</div>';
const nr=all.filter(isReadable).length,ne=all.filter(c=>c.externalUrl).length,nu=all.filter(c=>c.unavailable).length;
$('#chCount').textContent='('+nr+' legíveis'+(ne?' · '+ne+' externos':'')+(nu?' · '+nu+' indisponíveis':'')+(S.chNext!=null?' · carregados '+all.length+' de '+S.chTotal:'')+')';
const lb=$('#unavBtn');if(lb){lb.classList.toggle('hidden',!nu);lb.textContent=showU?'Ocultar indisponíveis':'Mostrar indisponíveis'}
const nt=$('#chNote');if(nt){const m=S.manga,miss=!S.lang.includes('pt-br')?'':(m.langs||[]).includes('pt-br')?'':'O MangaDex não tem capítulos em português (BR) para esta obra.';nt.textContent=S.chNext==null&&!nr&&!ne&&S.lang.includes('pt-br')&&!miss?'Sem capítulos legíveis em PT-BR no MangaDex para esta obra.':miss;nt.classList.toggle('hidden',!nt.textContent)}
$('#moreChapters').classList.toggle('hidden',S.chNext==null)}
async function startReading(){const m=S.manga,h=histOf(m.id);if(h){location.hash='#/r/'+m.id+'/'+h.cid;return}
let g=0;while(S.chNext!=null&&g++<22)await loadChapters(false);const f=navList().pop();if(f)location.hash='#/r/'+m.id+'/'+f.id;else if(S.chapters.some(c=>c.externalUrl))toast('Os capítulos disponíveis estão em sites externos; abra um pela lista.');else toast('Nenhum capítulo legível neste idioma')}
/* ---------- leitor ---------- */
const cur=()=>{const r=S.rd;return P.saver&&r.saver.length?r.saver:r.pages};
function progress(){const r=S.rd;if(!r)return;const n=cur().length||1;$('#pbar').style.width=((S.page+1)/n*100)+'%';$('#readerMeta').textContent='Cap. '+(r.ch||'?')+' · pág. '+(S.page+1)+'/'+n+(r.group?' · '+r.group:'');clearTimeout(S.sv);S.sv=setTimeout(saveNow,800)}
function saveNow(){const r=S.rd;if(!r)return;const n=cur().length;saveHist({id:r.mid,title:r.title,cover:S.manga&&S.manga.cover,cid:r.cid,ch:r.ch,page:S.page,total:n,t:Date.now()});if(S.page>=n-2)markRead(r.mid,r.cid)}
function observe(){if(S.io)S.io.disconnect();S.io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting){S.page=Number(e.target.dataset.i);progress()}},{rootMargin:'-45% 0px -50% 0px'});$$('#pages img').forEach(i=>S.io.observe(i))}
function renderEnd(){const r=S.rd,nl=navList(),pv=r.idx>=0&&nl[r.idx+1],nx=r.idx>=0&&nl[r.idx-1];$('#prevCh').disabled=!pv;$('#nextCh').disabled=!nx;
$('#endReader').innerHTML='<div class="muted">Fim do capítulo '+esc(r.ch||'')+'</div><div class="endbtns"><button class="btn outline" data-ch="-1"'+(pv?'':' disabled')+'>‹ Anterior</button><button class="btn primary" data-ch="1"'+(nx?'':' disabled')+'>'+(nx?'Próximo capítulo ›':'Último capítulo')+'</button></div><a class="btn outline" href="#/m/'+r.mid+'">Ver todos os capítulos</a>'}
function showPage(i){const arr=cur();S.page=Math.max(0,Math.min(arr.length-1,i));$('#pages').innerHTML='<img src="'+esc(arr[S.page])+'" alt="Página '+(S.page+1)+'">';[1,2].forEach(k=>{if(arr[S.page+k])new Image().src=arr[S.page+k]});$('#endReader').classList.toggle('hidden',S.page<arr.length-1);window.scrollTo(0,0);progress()}
function renderPages(){const r=S.rd;if(!r)return;const arr=cur(),box=$('#pages');box.classList.toggle('single',P.mode==='page');$('#modeBtn').textContent=P.mode==='page'?'▭':'↕';$('#saverBtn').textContent=P.saver?'Eco':'HD';
if(!arr.length){box.innerHTML='';$('#pageStatus').textContent='Este capítulo não tem páginas disponíveis.';return}$('#pageStatus').textContent='';
if(P.mode==='page'){showPage(S.page)}else{if(S.io)S.io.disconnect();box.innerHTML=arr.map((u,i)=>'<img data-i="'+i+'" loading="'+(i<=S.page+2?'eager':'lazy')+'" src="'+esc(u)+'" alt="Página '+(i+1)+'">').join('');observe();$('#endReader').classList.remove('hidden');if(S.page>0)setTimeout(()=>{const im=$$('#pages img')[S.page];if(im)im.scrollIntoView()},350)}
progress()}
async function openReader(mid,cid){if(S.rd){clearTimeout(S.sv);saveNow()}const tok=++S.nav;show('reader');S.rd=null;
$('#pages').innerHTML='';$('#endReader').classList.add('hidden');$('#pageStatus').textContent='Carregando páginas…';$('#readerMeta').textContent='';$('#pbar').style.width='0';
try{const d=await api('/api/chapter/'+cid);if(tok!==S.nav)return;
if(!S.manga||S.manga.id!==mid){S.manga=await api('/api/manga/'+mid);S.chapters=[];if(tok!==S.nav)return}
if(!S.chapters.length||(d.lang&&!S.lang.split(',').includes(d.lang))){if(d.lang)S.lang=d.lang;await loadChapters(true);if(tok!==S.nav)return}
const idx=navList().findIndex(c=>c.id===cid||(c.chapter!=null&&c.chapter===d.chapter)),h=histOf(mid),n=d.pages.length;
S.rd={mid,cid,idx,pages:d.pages,saver:d.saver||[],title:S.manga.title,ch:d.chapter,group:d.group};S.page=h&&h.cid===cid&&h.page>0&&h.page<n-1?h.page:0;S.fails=0;
$('#readerTitle').textContent=S.manga.title;document.title='Cap. '+(d.chapter||'?')+' · '+S.manga.title;renderEnd();renderPages();saveNow()}
catch(e){if(tok!==S.nav)return;$('#pageStatus').innerHTML='Não foi possível abrir este capítulo: '+esc(e.message)+'<br><br><a class="btn outline" href="#/m/'+esc(mid)+'">← Voltar à obra</a>'}}
function leaveReader(){if(S.io)S.io.disconnect();if(S.rd){clearTimeout(S.sv);saveNow()}S.rd=null}
function goChapter(d){const r=S.rd;if(!r||r.idx<0){toast('Lista de capítulos indisponível');return}const c=navList()[r.idx-d];if(!c){toast(d>0?'Este é o último capítulo disponível':'Este é o primeiro capítulo disponível');return}location.hash='#/r/'+r.mid+'/'+c.id}
function pageGo(d){const t=S.page+d;if(t<0)return;if(t>=cur().length){goChapter(1);return}showPage(t)}
/* ---------- biblioteca / grupos ---------- */
function renderLibrary(){$$('[data-lib]').forEach(b=>b.classList.toggle('active',b.dataset.lib===S.lib));const b=$('#libBody');
if(S.lib==='fav'){const l=favs();$('#libCount').textContent=l.length+' obras';b.innerHTML=l.length?'<div class="grid">'+l.map(card).join('')+'</div>':'<div class="empty">Você ainda não favoritou nada. Toque no ♡ de qualquer capa para salvar aqui.</div>'}
else{const l=hist();$('#libCount').textContent=l.length+' leituras';b.innerHTML=l.length?l.map(h=>'<a class="chapter" href="#/r/'+h.id+'/'+h.cid+'"><span class="hrow"><img src="'+esc(cover(h,256))+'" alt=""><span><b>'+esc(h.title)+'</b><br><span class="small muted">Cap. '+esc(h.ch||'?')+' · pág. '+(h.page+1)+'/'+(h.total||'?')+'</span></span></span><span class="small muted">'+ago(h.t)+'</span></a>').join('')+'<button class="btn outline sm" id="clrHist">Limpar hist\u00f3rico</button>':'<div class="empty">Seu hist\u00f3rico aparece aqui quando você começar a ler.</div>'}}
let scanCache=[];async function loadScans(){S.groupsLoaded=1;const el=$('#scanCards');el.innerHTML='<div class="loading">Carregando diretório de scans…</div>';try{const d=await api('/api/scans');scanCache=d.data||[];renderScans()}catch(e){el.innerHTML='<div class="empty">'+esc(e.message)+'</div>'}}
function renderScans(){const q=$('#scanSearch').value.trim().toLowerCase(),st=$('#scanStatus').value;const list=scanCache.filter(s=>(!st||s.status===st)&&(!q||s.name.toLowerCase().includes(q)||s.description.toLowerCase().includes(q)));$('#scanCount').textContent=list.length+' equipes';$('#scanCards').classList.remove('hidden');$('#scanProfile').classList.add('hidden');$('#scanCards').innerHTML=list.map(s=>'<article class="card scan-card"><div class="scan-status">'+esc(({public:'Canais públicos',community:'Comunidade',review:'Atividade a confirmar',inactive:'Inativa · arquivo'}[s.status]||'Scan'))+'</div><h3>'+esc(s.name)+'</h3><p class="small muted">'+esc(s.description)+'</p><p class="small">'+esc(s.activity||'')+'</p><div class="scan-links"><a href="#/scan/'+encodeURIComponent(s.slug)+'">Ver perfil →</a>'+(s.catalogUrl?'<a href="'+esc(s.catalogUrl)+'" target="_blank" rel="noopener noreferrer">Abrir fonte ↗</a>':'')+'</div></article>').join('')||'<div class="empty" style="grid-column:1/-1">Nenhuma scan encontrada.</div>'}
async function openScan(slug){show('scans');if(!scanCache.length)await loadScans();const s=scanCache.find(x=>x.slug===slug);const cards=$('#scanCards'),profile=$('#scanProfile');if(!s){toast('Scan não encontrada no diretório');return}cards.classList.add('hidden');profile.classList.remove('hidden');profile.innerHTML='<button class="btn outline sm" id="backScans">← Todas as scans</button><div class="sectionhead"><h2>'+esc(s.name)+'</h2><span class="scan-status">'+esc(({public:'Canais públicos',community:'Comunidade',review:'A confirmar',inactive:'Inativa · arquivo'}[s.status]||'Scan'))+'</span></div><div class="notice"><p>'+esc(s.description)+'</p><p class="small muted">'+esc(s.activity||'')+'</p><p>'+esc(s.note||'')+'</p></div><div class="sectionhead"><h3>Publicações e canais da equipe</h3></div><div class="notice"><p>O MangaFlip ainda não recebeu um feed/API autorizado desta equipe. Por enquanto, estes são os canais públicos indicados pela própria presença online localizada.</p><div class="scan-links">'+(s.links||[]).map(l=>'<a href="'+esc(l.url)+'" target="_blank" rel="noopener noreferrer">'+esc(l.label)+' ↗</a>').join('')+'</div></div><p class="small muted">Integração: '+esc(s.integration==='community'?'comunidade; precisa de um canal autorizado': 'links externos; feed/API ainda não confirmado')+'</p>';$('#backScans').onclick=()=>{location.hash='#/scans'};document.title=s.name+' · Scans · MangáFlip'}
function exportData(){const o={v:1,fav:favs(),hist:hist(),read:store.get('read',{}),prefs:P};const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(o)],{type:'application/json'}));a.download='manga-hub-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000)}
function importData(txt){try{const o=JSON.parse(txt);const f=favs();(o.fav||[]).forEach(x=>{if(x&&isId(x.id)&&!f.some(y=>y.id===x.id))f.push(x)});store.set('fav',f);
const h=hist();(o.hist||[]).forEach(x=>{if(!x||!isId(x.id))return;const i=h.findIndex(y=>y.id===x.id);if(i<0)h.push(x);else if((x.t||0)>(h[i].t||0))h[i]=x});h.sort((a,b)=>(b.t||0)-(a.t||0));store.set('hist',h.slice(0,40));
const r=store.get('read',{});Object.keys(o.read||{}).forEach(k=>{if(isId(k))r[k]=[...new Set((r[k]||[]).concat(o.read[k]||[]))].slice(-3000)});store.set('read',r);toast('Backup importado ✓');renderLibrary()}catch(e){toast('Arquivo de backup inválido')}}
/* ---------- navegação ---------- */
const THEMES={obsidian:{bg:'#100b17',panel:'#1b1425',panel2:'#241a31',line:'#392747',text:'#f5effb',muted:'#ad9dbb',accent:'#b875f2',accent2:'#7b3bc1'},midnight:{bg:'#0b1220',panel:'#121d30',panel2:'#1a2940',line:'#293d5a',text:'#edf4ff',muted:'#9db0ca',accent:'#70a9ff',accent2:'#356fc4'},graphite:{bg:'#17191d',panel:'#22262c',panel2:'#2c3139',line:'#3b424c',text:'#f1f2f4',muted:'#aeb5bf',accent:'#a9b4c4',accent2:'#596779'},plum:{bg:'#190d20',panel:'#281630',panel2:'#35203f',line:'#50345c',text:'#fff0ff',muted:'#c5a9ca',accent:'#e28cf0',accent2:'#9946aa'},ocean:{bg:'#071b24',panel:'#0e2935',panel2:'#153746',line:'#245064',text:'#e8faff',muted:'#9dc2ce',accent:'#51c6d8',accent2:'#16869b'},light:{bg:'#f4f1f8',panel:'#fff',panel2:'#eee9f4',line:'#d8cfe2',text:'#241b2d',muted:'#71667b',accent:'#8542b8',accent2:'#7132a5'}};
function applyTheme(){const name=P.theme||'obsidian',t=THEMES[name]||THEMES.obsidian;document.documentElement.dataset.theme=name;Object.entries(t).forEach(([k,v])=>document.documentElement.style.setProperty('--'+k,v));if(P.accent)document.documentElement.style.setProperty('--accent',P.accent);$$('[data-theme-choice]').forEach(b=>b.classList.toggle('active',b.dataset.themeChoice===name));$$('[data-accent]').forEach(b=>{b.style.setProperty('--swatch',b.dataset.accent);b.classList.toggle('active',b.dataset.accent===(P.accent||t.accent))});$('#settingMode').value=P.mode||'scroll';$('#settingSaver').value=String(!!P.saver)}
function fixEscapedUnicode(){
  const decode=v=>String(v).replace(/\\u(?:\{([0-9a-f]{1,6})\}|([0-9a-f]{4}))/gi,(_,cp,u)=>{const n=parseInt(cp||u,16);try{return String.fromCodePoint(n)}catch{return _}});
  const attrs=['placeholder','title','aria-label','alt','value'];
  const scan=root=>{
    if(!root)return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];
    while(walker.nextNode()){const n=walker.currentNode,p=n.parentElement;if(p&&!['SCRIPT','STYLE','TEXTAREA'].includes(p.tagName)&&/\\u(?:\{|[0-9a-f]{4})/i.test(n.nodeValue))nodes.push(n)}
    nodes.forEach(n=>{n.nodeValue=decode(n.nodeValue)});
    const els=root.nodeType===1?[root,...root.querySelectorAll('*')]:[...root.querySelectorAll('*')];
    els.forEach(el=>attrs.forEach(k=>{if(el.hasAttribute(k)){const v=el.getAttribute(k),d=decode(v);if(v!==d)el.setAttribute(k,d)}}));
  };
  scan(document.body);
  if(!window.__mangaflipUnicodeObserver){window.__mangaflipUnicodeObserver=new MutationObserver(records=>records.forEach(rec=>{if(rec.type==='childList')rec.addedNodes.forEach(n=>{if(n.nodeType===1)scan(n);else if(n.nodeType===3)scan(n.parentElement)});else if(rec.type==='characterData'){const n=rec.target,v=n.nodeValue,d=decode(v);if(v!==d)n.nodeValue=d}else if(rec.type==='attributes'){const el=rec.target,k=rec.attributeName,v=el.getAttribute(k),d=decode(v);if(v!==d)el.setAttribute(k,d)}}));window.__mangaflipUnicodeObserver.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attrs})}
}

let steps=0;
function go(t){const h=t==='home'?'#/':'#/'+t;if(location.hash===h||(t==='home'&&!location.hash))route();else location.hash=h}
function show(tab){S.tab=tab;['home','catalog','library','scans','detail','reader','about','settings'].forEach(x=>$('#'+x).classList.toggle('hidden',x!==tab));$$('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));document.body.classList.toggle('reading',tab==='reader');if(tab!=='reader')leaveReader();if(tab!=='detail'&&tab!=='reader')document.title='MangáFlip';window.scrollTo(0,0)}
function route(){const p=location.hash.replace(/^#\/?/,'').split('/'),r=p[0]||'home';
if(r==='scan'&&p[1])return openScan(decodeURIComponent(p[1]));if(r==='m'&&isId(p[1]))return openManga(p[1]);if(r==='r'&&isId(p[1])&&isId(p[2]))return openReader(p[1],p[2]);
const t=['home','catalog','library','scans','about','settings'].includes(r)?r:'home';show(t);
if(t==='home'){renderContinue();if(!S.homeLoaded){S.homeLoaded=1;loadHome()}}
else if(t==='catalog'){if(!S.catLoaded){S.catLoaded=1;loadTags();renderTags();searchCatalog(true)}}
else if(t==='library')renderLibrary();else if(t==='scans'&&!S.groupsLoaded)loadScans();else if(t==='settings')applyTheme()}
/* ---------- eventos ---------- */
document.addEventListener('click',e=>{const t=e.target;let x;
if(x=t.closest('[data-remove-history]')){e.preventDefault();e.stopPropagation();removeHistory(x.dataset.removeHistory);return}
if(x=t.closest('[data-clear-history]')){e.preventDefault();clearReadingHistory();return}
if(x=t.closest('[data-fav]')){e.preventDefault();toggleFav(x.dataset.fav);return}
if(x=t.closest('[data-tab]')){go(x.dataset.tab);return}
if(x=t.closest('[data-go]')){go(x.dataset.go);return}
if(x=t.closest('[data-cat]')){openCatalog({latest:{sort:'latestUploadedChapter',lang:'pt-br'},popular:{},manhwa:{origin:'ko'}}[x.dataset.cat]);return}
if(x=t.closest('[data-tg]')){if(x.dataset.tg){S.tags.has(x.dataset.tg)?S.tags.delete(x.dataset.tg):S.tags.add(x.dataset.tg)}else S.tags.clear();renderTags();searchCatalog(true);return}
if(x=t.closest('[data-tag]')){e.preventDefault();openCatalog({tags:[x.dataset.tag]});return}
if(x=t.closest('[data-al]')){e.preventDefault();findAndOpen(x.dataset.al,x.href);return}
if(x=t.closest('[data-alsort]')){S.al=x.dataset.alsort;$$('[data-alsort]').forEach(b=>b.classList.toggle('active',b===x));loadAnilist();return}
if(x=t.closest('[data-lib]')){S.lib=x.dataset.lib;renderLibrary();return}
if(x=t.closest('[data-ch]')){goChapter(Number(x.dataset.ch));return}
if(x=t.closest('[data-retry]')){const el=x.closest('[data-url]');if(el)fill('#'+el.id,el.dataset.url);return}
if(t.closest('[data-rc]')){loadChapters(true);return}
if(t.closest('[data-ro]')){route();return}
if(t.closest('[data-back]')){steps>0?history.back():go('catalog');return}
if(t.closest('#readBtn')){startReading();return}
if(t.closest('#descMore')){const d=$('#desc');d.classList.toggle('open');t.closest('#descMore').textContent=d.classList.contains('open')?'Ver menos':'Ver mais';return}
if(t.closest('#shareBtn')){const u=location.href,ti=S.manga?S.manga.title:'MangáFlip';if(navigator.share)navigator.share({title:ti,url:u}).catch(()=>{});else if(navigator.clipboard)navigator.clipboard.writeText(u).then(()=>toast('Link copiado ✓'),()=>toast(u));return}
if(t.closest('#clrHist')){if(confirm('Limpar todo o hist\u00f3rico de leitura?')){store.set('hist',[]);renderLibrary()}return}
if(t.closest('#wipeBtn')){if(confirm('Apagar favoritos, hist\u00f3rico e preferências deste aparelho?')){['fav','hist','read','prefs'].forEach(k=>{try{localStorage.removeItem('mh.'+k)}catch(e){}});P={mode:'scroll',saver:false,lang:'pt-br'};toast('Dados apagados')}return}
if(t.closest('#expBtn')){exportData();return}
if(t.closest('#impBtn')){$('#impFile').click();return}});
$('#impFile').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>importData(String(r.result));r.readAsText(f);e.target.value=''};
$('#searchForm').onsubmit=e=>{e.preventDefault();openCatalog({q:$('#search').value.trim()})};
$('#catalogForm').onsubmit=e=>{e.preventDefault();searchCatalog(true)};
let dt;$('#catalogSearch').oninput=()=>{clearTimeout(dt);dt=setTimeout(()=>searchCatalog(true),550)};
['#fSort','#fOrigin','#fLang','#fStatus'].forEach(s=>{$(s).onchange=()=>searchCatalog(true)});
$('#more').onclick=()=>searchCatalog(false);
$('#scanSearchForm').onsubmit=e=>{e.preventDefault();renderScans()};$('#scanSearch').oninput=renderScans;$('#scanStatus').onchange=renderScans;
$('#chLang').onchange=()=>{S.lang=$('#chLang').value;P.lang=S.lang;store.set('prefs',P);loadChapters(true)};
$('#chOrder').onclick=()=>{S.order=S.order==='desc'?'asc':'desc';$('#chOrder').textContent=S.order==='desc'?'↓ Recentes':'↑ Antigos';renderChapters()};
$('#chFind').oninput=renderChapters;$('#unavBtn').onclick=()=>{P.showUnavailable=P.showUnavailable===false;store.set('prefs',P);renderChapters()};
$('#moreChapters').onclick=()=>loadChapters(false);
$('#randBtn').onclick=async()=>{try{const m=await api('/api/random');location.hash='#/m/'+m.id}catch(e){toast('Não foi possível sortear agora')}};
$('#refresh').onclick=()=>{if(S.tab==='home')loadHome();else if(S.tab==='catalog')searchCatalog(true);else if(S.tab==='scans')loadScans();else if(S.tab==='library')renderLibrary();else route()};
$('#closeReader').onclick=()=>{location.hash='#/m/'+(S.rd?S.rd.mid:(S.manga?S.manga.id:''))};
$('#prevCh').onclick=()=>goChapter(-1);$('#nextCh').onclick=()=>goChapter(1);
$('#modeBtn').onclick=()=>{P.mode=P.mode==='page'?'scroll':'page';store.set('prefs',P);toast(P.mode==='page'?'Modo página a página':'Modo rolagem contínua');renderPages()};
$('#saverBtn').onclick=()=>{P.saver=!P.saver;store.set('prefs',P);toast(P.saver?'Modo econômico (menos dados)':'Qualidade padrão');renderPages()};
$('#pages').addEventListener('error',e=>{const im=e.target;if(!im||im.tagName!=='IMG')return;const n=Number(im.dataset.try||0);if(n<2){im.dataset.try=String(n+1);setTimeout(()=>{im.src=im.src.split('?')[0]+'?r='+Date.now()},900*(n+1))}else{im.classList.add('failed');im.alt='Falha ao carregar esta página. Toque para tentar de novo.';if(++S.fails===3)toast('Muitas falhas? Tente o modo econômico (HD/Eco)')}},true);
$('#pages').addEventListener('click',e=>{const im=e.target.closest('img.failed');if(im){im.classList.remove('failed');im.dataset.try='0';im.src=im.src.split('?')[0]+'?r='+Date.now();return}
if(P.mode==='page'&&S.rd&&e.target.tagName==='IMG'){const r=$('#pages').getBoundingClientRect();pageGo(e.clientX-r.left<r.width*0.35?-1:1)}});
document.addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;
if(e.key==='/'&&S.tab!=='reader'){e.preventDefault();const id=S.tab==='home'?'#search':'#catalogSearch';if(S.tab!=='home')go('catalog');setTimeout(()=>$(id).focus(),60);return}
if(S.tab!=='reader')return;
if(e.key==='ArrowRight'&&P.mode==='page'){e.preventDefault();pageGo(1)}else if(e.key==='ArrowLeft'&&P.mode==='page'){e.preventDefault();pageGo(-1)}
else if(e.key===']'||e.key==='n')goChapter(1);else if(e.key==='['||e.key==='p')goChapter(-1);
else if(e.key==='m')$('#modeBtn').click();else if(e.key==='Escape')$('#closeReader').click()});
window.addEventListener('hashchange',()=>{steps++;route()});
window.addEventListener('online',()=>{setNet(true);toast('Conexão restabelecida')});window.addEventListener('offline',()=>{setNet(false)});

$$('[data-theme-choice]').forEach(b=>b.onclick=()=>{P.theme=b.dataset.themeChoice;store.set('prefs',P);applyTheme()});
$$('[data-accent]').forEach(b=>b.onclick=()=>{P.accent=b.dataset.accent;store.set('prefs',P);applyTheme()});
$('#settingMode').onchange=()=>{P.mode=$('#settingMode').value;store.set('prefs',P)};
$('#settingSaver').onchange=()=>{P.saver=$('#settingSaver').value==='true';store.set('prefs',P)};
$('#resetTheme').onclick=()=>{P.theme='obsidian';P.accent='';store.set('prefs',P);applyTheme();toast('Aparência restaurada')};
applyTheme();fixEscapedUnicode();

route();
</script></body></html>`;

const cors = {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,OPTIONS","Access-Control-Allow-Headers":"Content-Type"};
const J = (data, status = 200, ttl = 60) => new Response(JSON.stringify(data), {status, headers: {...cors, "Content-Type": "application/json; charset=utf-8", "Cache-Control": (status >= 400 || !ttl) ? "no-store" : "public, max-age=" + ttl}});
const sleep = ms => new Promise(r => setTimeout(r, ms));
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const ID = /^[0-9a-f-]{36}$/i;
const mem = new Map();
async function coverProxy(path){
  const bits=path.split('/'),id=bits[3],file=decodeURIComponent(bits[4]||'').replace(/\.(\d+)\.jpg$/i,'');
  if(!ID.test(id)||!/^[a-zA-Z0-9._-]{1,180}$/.test(file))return new Response('Not found',{status:404});
  try{
    const data=await cached('cover:'+id+':'+file,86400,async()=>{
      const base='https://uploads.mangadex.org/covers/'+id+'/'+encodeURIComponent(file);
      const candidates=[base,base+'.256.jpg',base+'.512.jpg'];
      let lastStatus=404;
      for(const url of candidates){
        const upstream=await fetch(url,{headers:{'User-Agent':'MangaFlip/1.1','Accept':'image/avif,image/webp,image/apng,image/*,*/*;q=0.8'}});
        if(!upstream.ok){lastStatus=upstream.status;continue}
        const type=upstream.headers.get('content-type')||'image/jpeg';
        if(!type.startsWith('image/'))continue;
        return {body:new Uint8Array(await upstream.arrayBuffer()),type};
      }
      throw new Error('Capa não encontrada ('+lastStatus+')');
    });
    return new Response(data.body,{status:200,headers:{...cors,'Content-Type':data.type,'Cache-Control':'public, max-age=86400','X-Content-Type-Options':'nosniff'}});
  }catch(e){return new Response(null,{status:502,headers:{...cors,'Cache-Control':'no-store'}})}
}


async function cached(key, ttl, fn) {
  const now = Date.now(), h = mem.get(key);
  if (h && h.exp > now) return h.v;
  if (h && h.p) return h.p;
  if (mem.size > 400) mem.clear();
  const p = fn().then(v => { mem.set(key, {v, exp: Date.now() + ttl * 1000}); return v; }).catch(e => { mem.delete(key); throw e; });
  mem.set(key, {p, exp: 0});
  return p;
}

async function md(path) {
  let last;
  for (let i = 0; i < 3; i++) {
    const ac = new AbortController(), t = setTimeout(() => ac.abort(), 12000);
    try {
      const r = await fetch("https://api.mangadex.org" + path, {signal: ac.signal, headers: {"User-Agent": "MangaHub/1.0 (independent reader)", "Accept": "application/json"}});
      clearTimeout(t);
      if (r.ok) return await r.json();
      last = new Error("MangaDex respondeu " + r.status);
      if (r.status < 500 && r.status !== 429) { last.fatal = true; throw last; }
    } catch (e) {
      clearTimeout(t);
      last = e.name === "AbortError" ? new Error("MangaDex demorou demais para responder") : e;
      if (e.fatal) throw last;
    }
    await sleep(600 * (i + 1));
  }
  throw last;
}

const pick = o => o ? (o["pt-br"] || o.pt || o.en || Object.values(o)[0] || "") : "";
function simp(m, full) {
  const a = m.attributes || {}, rel = m.relationships || [], c = rel.find(x => x.type === "cover_art");
  const o = {
    id: m.id, title: pick(a.title) || "Sem título",
    cover: c && c.attributes && c.attributes.fileName ? "/api/cover/" + m.id + "/" + encodeURIComponent(c.attributes.fileName) : "",
    origin: a.originalLanguage || "ja", status: a.status || "", year: a.year || null
  };
  if (full) {
    let d = pick(a.description);
    d = d.split(/\n-{3,}/)[0].replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\*{1,2}/g, "").trim().slice(0, 1500);
    o.desc = d;
    o.langs = a.availableTranslatedLanguages || [];
    o.lastChapter = a.lastChapter || null;
    o.tags = (a.tags || []).slice(0, 10).map(t => ({id: t.id, name: (t.attributes && t.attributes.name && t.attributes.name.en) || ""}));
    o.authors = [...new Set(rel.filter(x => x.type === "author" || x.type === "artist").map(x => x.attributes && x.attributes.name).filter(Boolean))].slice(0, 4);
  }
  return o;
}

Bun.serve({port: Number(Bun.env.PORT) || 3000, async fetch(req) {
  const u = new URL(req.url), p = u.pathname, q = u.searchParams;
  if (req.method === "OPTIONS") return new Response(null, {headers: cors});
  if (p === "/") return new Response(html, {headers: {"Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache", "X-Content-Type-Options": "nosniff"}});
  if (p === "/api/health") return J({ok: true, app: "MangáFlip", version: "1.0", sources: ["MangaDex", "AniList"], cache: mem.size, uptime: Math.round(process.uptime()), time: new Date().toISOString()}, 200, 0);
  if (p === "/favicon.ico") return new Response(null, {status: 204});
  if (p === "/icon.svg") return new Response('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#7b3bc1"/><text x="32" y="45" font-size="36" font-weight="900" text-anchor="middle" fill="#fff" font-family="system-ui,sans-serif">M</text></svg>', {headers: {"Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400"}});
  if (p === "/manifest.webmanifest") return new Response(JSON.stringify({name: "MangáFlip", short_name: "MangáFlip", start_url: "/", display: "standalone", background_color: "#100b17", theme_color: "#130d1c", lang: "pt-BR", icons: [{src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any"}]}), {headers: {"Content-Type": "application/manifest+json", "Cache-Control": "public, max-age=86400"}});
  try {
    if (p === "/api/manga") {
      const limit = clamp(Number(q.get("limit")) || 24, 1, 48), offset = clamp(Number(q.get("offset")) || 0, 0, 9900);
      const SORT = {followedCount: 1, latestUploadedChapter: 1, createdAt: 1, rating: 1, relevance: 1};
      let sort = q.get("sort"); if (!SORT[sort]) sort = "followedCount";
      const s = new URLSearchParams({limit: String(limit), offset: String(offset), hasAvailableChapters: "true"});
      s.append("includes[]", "cover_art");
      const t = (q.get("q") || "").trim().slice(0, 100); if (t) s.set("title", t);
      s.set("order[" + sort + "]", "desc");
      const o = q.get("origin");
      if (o === "ja" || o === "ko") s.append("originalLanguage[]", o);
      else if (o === "zh") { s.append("originalLanguage[]", "zh"); s.append("originalLanguage[]", "zh-hk"); }
      const lang = q.get("lang"); if (lang && /^[a-z-]{2,8}$/i.test(lang)) s.append("availableTranslatedLanguage[]", lang);
      const st = q.get("status"); if (["ongoing", "completed", "hiatus", "cancelled"].includes(st)) s.append("status[]", st);
      const tags = (q.get("tags") || "").split(",").filter(x => ID.test(x)).slice(0, 5);
      tags.forEach(x => s.append("includedTags[]", x)); if (tags.length) s.set("includedTagsMode", "AND");
      s.append("contentRating[]", "safe"); s.append("contentRating[]", "suggestive");
      const qs = s.toString();
      const d = await cached("m:" + qs, 120, () => md("/manga?" + qs));
      return J({data: d.data.map(m => simp(m)), total: d.total || 0, offset: d.offset || 0}, 200, 120);
    }
    if (p === "/api/random") {
      const d = await md("/manga/random?includes[]=cover_art&contentRating[]=safe&contentRating[]=suggestive");
      return J(simp(d.data), 200, 0);
    }
    if (p === "/api/tags") {
      const d = await cached("tags", 86400, () => md("/manga/tag"));
      const list = d.data.filter(t => t.attributes.group === "genre").map(t => ({id: t.id, name: t.attributes.name.en})).sort((a, b) => a.name.localeCompare(b.name));
      return J({data: list}, 200, 3600);
    }
    const parts = p.split("/");
    if (parts[1] === "api" && parts[2] === "cover" && ID.test(parts[3] || "") && parts[4]) return await coverProxy(p);

    if (parts[1] === "api" && parts[2] === "manga" && ID.test(parts[3] || "")) {
      const id = parts[3];
      if (parts[4] === "chapters") {
        // lang aceita um código ("pt-br") ou lista explícita separada por vírgula ("pt-br,pt"); nunca mistura por conta própria.
        const langs = [...new Set((q.get("lang") || "pt-br").split(",").map(x => x.trim().toLowerCase()).filter(x => /^[a-z]{2,3}(-[a-z]{2,4})?$/.test(x)))].slice(0, 4);
        if (!langs.length) langs.push("pt-br");
        // MangaDex limita offset+limit a 10000.
        const off = clamp(Number(q.get("offset")) || 0, 0, 9500);
        // includeExternalUrl / includeEmptyPages são FILTROS (0 = só sem, 1 = só com): omitidos devolvem as duas classes.
        // includeUnavailable=1 acrescenta capítulos removidos; includeFuturePublishAt=0 tira os ainda não publicados.
        const s = new URLSearchParams({limit: "500", offset: String(off), "order[chapter]": "desc", includeFuturePublishAt: "0", includeUnavailable: "1"});
        langs.forEach(l => s.append("translatedLanguage[]", l)); s.append("includes[]", "scanlation_group");
        const qs = s.toString();
        const d = await cached("c:" + id + qs, 120, () => md("/manga/" + id + "/feed?" + qs));
        const by = new Map();
        for (const c of d.data) {
          if (by.has(c.id)) continue; // deduplica só por chapter ID; versões de grupos diferentes continuam listadas
          const a = c.attributes || {};
          const externalUrl = typeof a.externalUrl === "string" && /^https:\/\//i.test(a.externalUrl) ? a.externalUrl : null;
          const pages = a.pages || 0;
          const g = (c.relationships || []).find(x => x.type === "scanlation_group");
          by.set(c.id, {id: c.id, k: c.id, chapter: a.chapter, volume: a.volume, title: a.title || "", lang: a.translatedLanguage, pages, externalUrl,
            unavailable: !externalUrl && (!!a.isUnavailable || pages === 0),
            group: (g && g.attributes && g.attributes.name) || "", at: a.readableAt || a.publishAt});
        }
        const data = [...by.values()];
        const returned = d.data.length, total = d.total || 0, offset = d.offset || off;
        return J({data, total, offset, limit: d.limit || 500, returned, next: offset + returned < total && returned > 0 ? offset + returned : null,
          counts: {readable: data.filter(c => c.pages > 0 && !c.externalUrl && !c.unavailable).length, external: data.filter(c => c.externalUrl).length, unavailable: data.filter(c => c.unavailable).length}}, 200, 120);
      }
      if (!parts[4]) {
        const [m, st] = await Promise.all([
          cached("md:" + id, 600, () => md("/manga/" + id + "?includes[]=cover_art&includes[]=author&includes[]=artist")),
          cached("st:" + id, 600, () => md("/statistics/manga/" + id).catch(() => null))
        ]);
        const o = simp(m.data, true), s = st && st.statistics && st.statistics[id];
        o.rating = (s && s.rating && (s.rating.average || s.rating.bayesian)) || null;
        o.follows = (s && s.follows) || 0;
        return J(o, 200, 300);
      }
    }
    if (parts[1] === "api" && parts[2] === "chapter" && ID.test(parts[3] || "") && !parts[4]) {
      const id = parts[3];
      const [at, info] = await Promise.all([
        cached("at:" + id, 240, () => md("/at-home/server/" + id)),
        cached("ch:" + id, 600, () => md("/chapter/" + id + "?includes[]=scanlation_group&includes[]=manga"))
      ]);
      const base = at.baseUrl, h = at.chapter.hash, enc = encodeURIComponent;
      const a = info.data.attributes || {}, rel = info.data.relationships || [];
      const man = rel.find(x => x.type === "manga"), g = rel.find(x => x.type === "scanlation_group");
      return J({
        id, manga: man ? man.id : null, chapter: a.chapter, volume: a.volume, title: a.title || "", lang: a.translatedLanguage,
        group: (g && g.attributes && g.attributes.name) || null,
        pages: (at.chapter.data || []).map(f => base + "/data/" + h + "/" + enc(f)),
        saver: (at.chapter.dataSaver || []).map(f => base + "/data-saver/" + h + "/" + enc(f))
      }, 200, 120);
    }
    if (p === "/api/scans") {
      const scans = await Bun.file(new URL("./scans.json", import.meta.url)).json();
      const slug = (q.get("slug") || "").trim();
      return J({data: slug ? scans.filter(s => s.slug === slug) : scans}, 200, 300);
    }
    if (p === "/api/anilist") {
      const page = clamp(Number(q.get("page")) || 1, 1, 50);
      let sort = q.get("sort"); if (!["TRENDING_DESC", "POPULARITY_DESC", "SCORE_DESC"].includes(sort)) sort = "TRENDING_DESC";
      const search = (q.get("q") || "").trim().slice(0, 100) || null;
      const query = "query($page:Int!,$search:String,$sort:[MediaSort]){Page(page:$page,perPage:24){pageInfo{hasNextPage} media(type:MANGA,isAdult:false,search:$search,sort:$sort){id siteUrl title{romaji english} coverImage{large} format status averageScore genres}}}";
      const d = await cached("al:" + page + sort + search, 600, async () => {
        const r = await fetch("https://graphql.anilist.co", {method: "POST", headers: {"Content-Type": "application/json", "Accept": "application/json"}, body: JSON.stringify({query, variables: {page, search, sort: [search ? "SEARCH_MATCH" : sort]}})});
        if (!r.ok) throw new Error("AniList respondeu " + r.status);
        return r.json();
      });
      const pg = d.data && d.data.Page;
      return J({data: (pg && pg.media) || [], more: !!(pg && pg.pageInfo && pg.pageInfo.hasNextPage)}, 200, 300);
    }
    return J({error: "Não encontrado"}, 404);
  } catch (e) {
    return J({error: (e && e.message) || "Erro na fonte de dados"}, 502);
  }
}})