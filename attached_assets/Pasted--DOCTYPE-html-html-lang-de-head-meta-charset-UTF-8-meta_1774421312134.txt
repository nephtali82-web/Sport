<!DOCTYPE html>

<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="theme-color" content="#0D0D0D">
<title>🦍Neph Gymplan 💪🏾</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--gold:#C9A84C;--dark:#0D0D0D;--dark3:#1C1C1C;--dark4:#242424;--text:#E8E0D0;--muted:#7A7060;--red:#C94C4C;--green:#4CC97A;--blue:#4C8EC9;--purple:#9B6EC9;--orange:#C97A4C;--safe-top:env(safe-area-inset-top,0px);--safe-bot:env(safe-area-inset-bottom,0px)}
html,body{height:100%;overflow:hidden;background:var(--dark)}
body{font-family:'DM Sans',sans-serif;color:var(--text);display:flex;flex-direction:column}
/* SPLASH */
#splash{position:fixed;inset:0;background:var(--dark);z-index:999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;transition:opacity .5s}
#splash.hide{opacity:0;pointer-events:none}
.splash-ring{width:100px;height:100px;border-radius:50%;border:2px solid rgba(201,168,76,.2);display:flex;align-items:center;justify-content:center;animation:pulseRing 2s ease-in-out infinite}
.splash-cg{font-family:'Bebas Neue',sans-serif;font-size:38px;color:var(--gold);letter-spacing:3px}
.splash-title{font-family:'Bebas Neue',sans-serif;font-size:32px;letter-spacing:4px}
.splash-sub{font-family:'Space Mono',monospace;font-size:12px;color:var(--muted)}
.splash-bar-wrap{width:160px;height:2px;background:rgba(201,168,76,.15);border-radius:1px;margin-top:10px}
.splash-bar{height:100%;width:0;background:var(--gold);border-radius:1px;transition:width .8s ease}
@keyframes pulseRing{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.05);opacity:1}}
/* TOAST */
#toast{position:fixed;bottom:calc(90px + var(--safe-bot));left:50%;transform:translateX(-50%) translateY(20px);background:var(--dark3);border:1px solid rgba(201,168,76,.4);border-radius:8px;padding:10px 20px;font-family:'Space Mono',monospace;font-size:11px;color:var(--gold);opacity:0;transition:all .3s;z-index:500;white-space:nowrap;pointer-events:none}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
/* BACKUP MODAL */
#backup-modal{position:fixed;inset:0;z-index:300;background:rgba(0,0,0,.8);backdrop-filter:blur(6px);display:none;align-items:flex-end;justify-content:center}
#backup-modal.open{display:flex}
.backup-sheet{background:var(--dark3);border-radius:20px 20px 0 0;border:1px solid rgba(201,168,76,.2);width:100%;max-width:500px;padding:0 20px calc(30px + var(--safe-bot));animation:slideUp .3s ease}
.bs-handle{width:36px;height:4px;background:rgba(255,255,255,.15);border-radius:2px;margin:12px auto 20px}
.bs-title{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:3px;color:var(--gold);text-align:center;margin-bottom:4px}
.bs-sub{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--muted);text-align:center;margin-bottom:20px;text-transform:uppercase}
.bs-section{margin-bottom:16px}
.bs-section-label{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px;opacity:.8}
.bs-btn{width:100%;padding:14px;border-radius:8px;border:none;cursor:pointer;font-family:'Space Mono',monospace;font-size:12px;letter-spacing:1px;margin-bottom:8px;display:flex;align-items:center;justify-content:center;gap:10px;transition:all .2s}
.bs-btn-export{background:linear-gradient(135deg,rgba(201,168,76,.2),rgba(201,168,76,.1));border:1px solid rgba(201,168,76,.4);color:var(--gold)}
.bs-btn-copy{background:rgba(76,142,201,.1);border:1px solid rgba(76,142,201,.3);color:var(--blue)}
.bs-btn-import{background:rgba(76,201,122,.1);border:1px solid rgba(76,201,122,.3);color:var(--green)}
.bs-btn-close{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:var(--muted)}
.bs-textarea{width:100%;height:90px;background:var(--dark4);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:10px;font-family:'Space Mono',monospace;font-size:10px;color:var(--text);resize:none;outline:none;margin-bottom:8px}
.bs-textarea:focus{border-color:rgba(201,168,76,.4)}
.bs-info{font-family:'Space Mono',monospace;font-size:9px;color:var(--muted);line-height:1.6;padding:10px;background:rgba(255,255,255,.03);border-radius:6px;border:1px solid rgba(255,255,255,.06);margin-bottom:12px}
.bs-info b{color:var(--gold)}
.auto-badge{display:inline-flex;align-items:center;gap:5px;background:rgba(76,201,122,.1);border:1px solid rgba(76,201,122,.3);border-radius:4px;padding:4px 10px;font-family:'Space Mono',monospace;font-size:9px;color:var(--green);margin-bottom:12px}
.pulse-dot{width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulseDot 2s ease-in-out infinite;flex-shrink:0}
@keyframes pulseDot{0%,100%{opacity:1}50%{opacity:.3}}
/* TOPBAR */
#topbar{padding:calc(14px + var(--safe-top)) 20px 14px;background:rgba(13,13,13,.95);border-bottom:1px solid rgba(201,168,76,.1);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.topbar-left{display:flex;flex-direction:column}
.topbar-eyebrow{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:3px;color:var(--gold);text-transform:uppercase}
.topbar-title{font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:2px;color:var(--text);line-height:1}
.topbar-right{display:flex;align-items:center;gap:8px}
.week-pill{background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.3);border-radius:20px;padding:6px 12px;font-family:'Space Mono',monospace;font-size:11px;color:var(--gold);cursor:pointer;display:flex;align-items:center;gap:5px}
.backup-pill{background:rgba(76,201,122,.08);border:1px solid rgba(76,201,122,.25);border-radius:20px;padding:6px 10px;cursor:pointer;display:flex;align-items:center;gap:5px;font-family:'Space Mono',monospace;font-size:10px;color:var(--green)}
/* WEEK MODAL */
#week-modal{position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.7);backdrop-filter:blur(4px);display:none;align-items:flex-end;justify-content:center}
#week-modal.open{display:flex}
.week-sheet{background:var(--dark3);border-radius:20px 20px 0 0;border:1px solid rgba(201,168,76,.2);width:100%;max-width:500px;padding:0 0 calc(20px + var(--safe-bot));animation:slideUp .3s ease}
@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
.sheet-handle{width:36px;height:4px;background:rgba(255,255,255,.15);border-radius:2px;margin:12px auto 20px}
.sheet-title{font-family:'Space Mono',monospace;font-size:10px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;text-align:center;margin-bottom:16px}
.week-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:0 20px}
.week-btn{padding:12px 4px;text-align:center;border-radius:8px;border:1px solid rgba(255,255,255,.08);background:var(--dark4);font-family:'Space Mono',monospace;font-size:12px;color:var(--muted);cursor:pointer;transition:all .2s}
.week-btn.active{background:rgba(201,168,76,.15);border-color:rgba(201,168,76,.4);color:var(--gold)}
.week-btn.has-data::after{content:'•';display:block;color:var(--green);font-size:8px;margin-top:2px}
/* TABS */
#day-tabs{display:flex;flex-shrink:0;border-bottom:1px solid rgba(255,255,255,.06);background:rgba(13,13,13,.9);overflow-x:auto}
#day-tabs::-webkit-scrollbar{display:none}
.dtab{flex:1;min-width:0;padding:10px 4px;text-align:center;cursor:pointer;border-bottom:2px solid transparent;transition:all .2s;position:relative}
.dtab.active{border-bottom-color:var(--gold)}
.dtab .dl{font-family:'Space Mono',monospace;font-size:8px;letter-spacing:1px;color:var(--muted);text-transform:uppercase;margin-bottom:2px}
.dtab .dn{font-family:'Bebas Neue',sans-serif;font-size:16px;color:var(--text);letter-spacing:1px;line-height:1.1}
.dtab.active .dn{color:var(--gold)}
.dtab .dtype{font-family:'Space Mono',monospace;font-size:7px;color:var(--muted);margin-top:2px;letter-spacing:1px}
.dtab .dprog{position:absolute;bottom:1px;left:50%;transform:translateX(-50%);display:flex;gap:2px}
.dprog-dot{width:3px;height:3px;border-radius:50%;background:rgba(201,168,76,.3)}
.dprog-dot.done{background:var(--green)}
/* PANELS */
.day-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:20px;font-family:'Space Mono',monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
.badge-push{background:rgba(201,76,76,.1);border:1px solid rgba(201,76,76,.3);color:var(--red)}
.badge-pull{background:rgba(76,142,201,.1);border:1px solid rgba(76,142,201,.3);color:var(--blue)}
.badge-legs{background:rgba(76,201,122,.1);border:1px solid rgba(76,201,122,.3);color:var(--green)}
.badge-stats{background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.3);color:var(--gold)}
#scroll{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}
#scroll::-webkit-scrollbar{display:none}
.day-panel{display:none;padding:16px 16px calc(40px + var(--safe-bot))}
.day-panel.active{display:block}
.charles-note{background:linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.03));border:1px solid rgba(201,168,76,.2);border-left:3px solid var(--gold);border-radius:6px;padding:12px 14px;margin-bottom:14px;font-size:12px;line-height:1.7;color:var(--muted)}
.charles-note strong{display:block;font-family:'Space Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:6px}
.section-header{display:flex;align-items:baseline;gap:10px;margin:20px 0 10px}
.section-title{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:2px;color:var(--gold)}
.section-badge{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;border:1px solid rgba(255,255,255,.08);padding:2px 7px;border-radius:2px}
.divider{height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,.2),transparent);margin:16px 0}
/* EXERCISE CARD */
.exercise-card{background:var(--dark3);border:1px solid rgba(255,255,255,.06);border-radius:10px;margin-bottom:8px;overflow:hidden;transition:border-color .2s}
.exercise-card:hover{border-color:rgba(201,168,76,.15)}
.exercise-main{display:grid;grid-template-columns:26px 1fr auto;align-items:center;gap:10px;padding:12px;cursor:pointer;-webkit-tap-highlight-color:transparent}
.ex-num{font-family:'Space Mono',monospace;font-size:10px;color:var(--gold);opacity:.6;text-align:center}
.ex-name{font-size:13px;font-weight:500;color:var(--text);margin-bottom:2px;line-height:1.3}
.ex-meta{font-family:'Space Mono',monospace;font-size:9px;color:var(--muted)}
.ex-meta span{margin-right:8px}
.ex-tags{display:flex;gap:4px;flex-wrap:wrap;margin-top:4px}
.tag{font-family:'Space Mono',monospace;font-size:7px;letter-spacing:1px;text-transform:uppercase;padding:2px 5px;border-radius:2px}
.tag-red{background:rgba(201,76,76,.15);color:var(--red);border:1px solid rgba(201,76,76,.25)}
.tag-gold{background:rgba(201,168,76,.12);color:var(--gold);border:1px solid rgba(201,168,76,.25)}
.tag-blue{background:rgba(76,142,201,.12);color:var(--blue);border:1px solid rgba(76,142,201,.25)}
.tag-green{background:rgba(76,201,122,.12);color:var(--green);border:1px solid rgba(76,201,122,.25)}
.tag-purple{background:rgba(155,110,201,.12);color:var(--purple);border:1px solid rgba(155,110,201,.25)}
.toggle-icon{width:22px;height:22px;border:1px solid rgba(201,168,76,.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--gold);flex-shrink:0;transition:all .2s}
.exercise-card.expanded .toggle-icon{background:rgba(201,168,76,.1);border-color:rgba(201,168,76,.6)}
.ex-ring{width:22px;height:22px;position:relative;flex-shrink:0}
.ex-ring svg{position:absolute;inset:0}
.ex-ring-bg{stroke:rgba(255,255,255,.06);fill:none;stroke-width:2}
.ex-ring-fill{stroke:var(--green);fill:none;stroke-width:2;stroke-linecap:round;transition:stroke-dashoffset .3s;transform:rotate(-90deg);transform-origin:50% 50%}
.ex-info{display:none;border-top:1px solid rgba(255,255,255,.04)}
.exercise-card.expanded .ex-info{display:block}
.geraet-box{margin:10px 12px 0;padding:10px 12px;background:rgba(201,168,76,.06);border:1px solid rgba(201,168,76,.18);border-radius:8px}
.geraet-title{font-family:'Space Mono',monospace;font-size:8px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:6px}
.geraet-text{font-size:12px;color:var(--text);line-height:1.6}
.geraet-text b{color:var(--gold)}
.muskel-box{margin:8px 12px 0;padding:10px 12px;background:rgba(76,142,201,.06);border:1px solid rgba(76,142,201,.18);border-radius:8px}
.muskel-title{font-family:'Space Mono',monospace;font-size:8px;letter-spacing:2px;color:var(--blue);text-transform:uppercase;margin-bottom:8px}
.muskel-chips{display:flex;flex-wrap:wrap;gap:5px}
.muskel-chip{font-family:'Space Mono',monospace;font-size:9px;padding:3px 8px;border-radius:4px;border:1px solid}
.mc-primary{background:rgba(201,168,76,.12);border-color:rgba(201,168,76,.3);color:var(--gold)}
.mc-secondary{background:rgba(76,142,201,.1);border-color:rgba(76,142,201,.25);color:var(--blue)}
.mc-label{font-family:'Space Mono',monospace;font-size:7px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-top:5px;margin-bottom:3px}
.exercise-tip{padding:8px 12px 4px;font-size:12px;color:var(--muted);line-height:1.7}
.exercise-tip strong{color:var(--gold);font-weight:600}
.yt-btn{display:inline-flex;align-items:center;gap:6px;margin:6px 12px 12px;padding:6px 12px;background:rgba(255,0,0,.1);border:1px solid rgba(255,80,80,.3);border-radius:4px;color:#ff6b6b;font-family:'Space Mono',monospace;font-size:9px;letter-spacing:1px;cursor:pointer}

/* ── GOAL BANNER ─────────────────────────────── */
.goal-banner{margin:0 12px 10px;padding:10px 12px;border-radius:8px;border:1px solid;position:relative;overflow:hidden}
.goal-banner.gb-green{background:rgba(76,201,122,.07);border-color:rgba(76,201,122,.3)}
.goal-banner.gb-gold{background:rgba(201,168,76,.07);border-color:rgba(201,168,76,.3)}
.goal-banner.gb-orange{background:rgba(201,122,76,.07);border-color:rgba(201,122,76,.3)}
.goal-banner.gb-blue{background:rgba(76,142,201,.07);border-color:rgba(76,142,201,.3)}
.gb-prog-bg{position:absolute;inset:0;border-radius:8px;opacity:.07}
.gb-prog-fill{height:100%;border-radius:8px;transition:width .5s ease}
.gb-inner{position:relative;z-index:1}
.gb-row{display:flex;align-items:center;justify-content:space-between;gap:8px}
.gb-label{font-family:‘Space Mono’,monospace;font-size:8px;letter-spacing:2px;text-transform:uppercase;opacity:.7}
.gb-target{font-family:‘Bebas Neue’,sans-serif;font-size:20px;letter-spacing:1px;line-height:1}
.gb-sub{font-family:‘Space Mono’,monospace;font-size:8px;color:var(–muted);margin-top:3px}
.gb-status{font-family:‘Space Mono’,monospace;font-size:9px;padding:3px 8px;border-radius:3px}
.gb-status.hit{background:rgba(76,201,122,.15);color:var(–green);border:1px solid rgba(76,201,122,.3)}
.gb-status.close{background:rgba(201,168,76,.12);color:var(–gold);border:1px solid rgba(201,168,76,.3)}
.gb-status.miss{background:rgba(201,76,76,.1);color:var(–red);border:1px solid rgba(201,76,76,.25)}
.gb-status.open{background:rgba(255,255,255,.05);color:var(–muted);border:1px solid rgba(255,255,255,.1)}
.gb-prog-bar{height:3px;background:rgba(255,255,255,.08);border-radius:2px;margin-top:7px;overflow:hidden}
.gb-prog-bar-fill{height:100%;border-radius:2px;transition:width .5s ease}
.gb-edit-row{display:flex;align-items:center;gap:6px;margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,.06)}
.gb-edit-label{font-family:‘Space Mono’,monospace;font-size:8px;color:var(–muted);letter-spacing:1px;text-transform:uppercase;flex-shrink:0}
.gb-inp{background:var(–dark4);border:1px solid rgba(255,255,255,.1);border-radius:5px;padding:5px 8px;font-family:‘Space Mono’,monospace;font-size:12px;color:var(–text);outline:none;width:70px;-webkit-appearance:none}
.gb-inp:focus{border-color:rgba(201,168,76,.5)}
.gb-inp-sep{font-family:‘Space Mono’,monospace;font-size:10px;color:var(–muted)}
.gb-save-btn{margin-left:auto;padding:5px 10px;border-radius:5px;border:1px solid rgba(201,168,76,.4);background:rgba(201,168,76,.12);color:var(–gold);font-family:‘Space Mono’,monospace;font-size:9px;cursor:pointer;letter-spacing:1px}
.gb-dp-info{font-family:‘Space Mono’,monospace;font-size:8px;color:var(–muted);margin-top:5px;line-height:1.5;opacity:.8}

/* SET LOGGER */
.set-logger{display:none;padding:10px 12px 14px;border-top:1px solid rgba(255,255,255,.04);background:rgba(0,0,0,.2)}
.exercise-card.expanded .set-logger{display:block}
.log-title{font-family:‘Space Mono’,monospace;font-size:9px;letter-spacing:2px;color:var(–gold);text-transform:uppercase;margin-bottom:8px;opacity:.8}
.set-rows{display:flex;flex-direction:column;gap:6px}
.set-row{display:grid;grid-template-columns:22px 1fr 1fr auto;align-items:center;gap:6px}
.set-label{font-family:‘Space Mono’,monospace;font-size:9px;color:var(–muted);text-align:center}
.set-input{background:var(–dark4);border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:9px 8px;font-family:‘Space Mono’,monospace;font-size:13px;color:var(–text);outline:none;width:100%;-webkit-appearance:none}
.set-input:focus{border-color:rgba(201,168,76,.5)}
.set-input::placeholder{color:rgba(122,112,96,.4);font-size:11px}
.set-input.filled{border-color:rgba(201,168,76,.3);background:rgba(201,168,76,.05)}
.set-input-header{display:grid;grid-template-columns:22px 1fr 1fr 28px;gap:6px;margin-bottom:4px}
.set-input-header span{font-family:‘Space Mono’,monospace;font-size:8px;letter-spacing:1px;color:var(–muted);text-transform:uppercase;text-align:center;opacity:.6}
.sdone{width:28px;height:28px;border-radius:50%;border:1px solid rgba(76,201,122,.3);background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;color:rgba(76,201,122,.4);transition:all .2s;flex-shrink:0}
.sdone.done{background:rgba(76,201,122,.15);border-color:var(–green);color:var(–green)}
.clear-btn{margin-top:8px;font-family:‘Space Mono’,monospace;font-size:8px;letter-spacing:1px;text-transform:uppercase;color:var(–muted);background:none;border:none;cursor:pointer;padding:0;opacity:.5}
/* PROGRESS CHART */
.prog-section{margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,.06)}
.prog-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.prog-label{font-family:‘Space Mono’,monospace;font-size:9px;letter-spacing:2px;color:var(–gold);text-transform:uppercase;opacity:.8}
.chart-toggle{display:flex;gap:5px}
.ctbtn{font-family:‘Space Mono’,monospace;font-size:9px;letter-spacing:1px;padding:4px 9px;border-radius:3px;border:1px solid rgba(255,255,255,.1);background:transparent;color:var(–muted);cursor:pointer;transition:all .2s}
.ctbtn.active{background:rgba(201,168,76,.15);border-color:rgba(201,168,76,.5);color:var(–gold)}
.chart-wrap{position:relative;height:130px;margin-bottom:10px}
.stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.stat-box{background:var(–dark4);border:1px solid rgba(255,255,255,.07);border-radius:6px;padding:8px;text-align:center}
.stat-box-label{font-family:‘Space Mono’,monospace;font-size:7px;letter-spacing:1px;color:var(–muted);text-transform:uppercase;margin-bottom:4px}
.stat-val{font-family:‘Bebas Neue’,sans-serif;font-size:22px;line-height:1}
.sv-vol{color:var(–gold)}.sv-gain{color:var(–green)}.sv-max{color:var(–gold)}
.stat-unit{font-family:‘Space Mono’,monospace;font-size:7px;color:var(–muted);margin-top:2px}
.chart-legend{font-family:‘Space Mono’,monospace;font-size:8px;color:var(–muted);display:flex;align-items:center;gap:5px;margin-top:5px}
.cl-dot{width:7px;height:7px;border-radius:50%;background:var(–gold);flex-shrink:0}

/* STATS TAB */
.stats-kpi-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px}
.kpi-box{background:linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.03));border:1px solid rgba(201,168,76,.2);border-radius:10px;padding:12px;text-align:center}
.kpi-label{font-family:‘Space Mono’,monospace;font-size:7px;letter-spacing:2px;color:var(–muted);text-transform:uppercase;margin-bottom:6px}
.kpi-val{font-family:‘Bebas Neue’,sans-serif;font-size:28px;line-height:1;color:var(–gold)}
.kpi-unit{font-family:‘Space Mono’,monospace;font-size:8px;color:var(–muted);margin-top:3px}
.stats-card{background:var(–dark3);border:1px solid rgba(255,255,255,.06);border-radius:12px;margin-bottom:14px;overflow:hidden}
.stats-card-head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.05)}
.sc-title{font-family:‘Bebas Neue’,sans-serif;font-size:20px;letter-spacing:2px}
.sc-title.t-push{color:var(–red)}.sc-title.t-pull{color:var(–blue)}.sc-title.t-legs{color:var(–green)}.sc-title.t-pushb{color:var(–purple)}
.sc-meta{font-family:‘Space Mono’,monospace;font-size:8px;letter-spacing:1px;color:var(–muted)}
.sc-body{padding:12px 14px}
.sc-ex-list{display:flex;flex-direction:column;gap:6px;margin-top:10px}
.sc-ex-row{padding:8px 10px;background:rgba(255,255,255,.03);border-radius:7px;border:1px solid rgba(255,255,255,.05)}
.sc-ex-row-top{display:flex;align-items:center;gap:8px}
.sc-ex-name{flex:1;font-size:11px;font-weight:500;color:var(–text)}
.sc-ex-kg{font-family:‘Space Mono’,monospace;font-size:10px;min-width:50px;text-align:right}
.sc-ex-vol{font-family:‘Space Mono’,monospace;font-size:9px;color:var(–muted);min-width:60px;text-align:right}
.sc-ex-bar-wrap{height:3px;flex:1;background:rgba(255,255,255,.06);border-radius:2px;min-width:30px;margin-top:5px}
.sc-ex-bar-fill{height:100%;border-radius:2px;transition:width .5s ease}
/* Goal mini row in stats */
.sc-goal-row{display:flex;align-items:center;gap:6px;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.05)}
.sc-goal-icon{font-size:9px}
.sc-goal-text{font-family:‘Space Mono’,monospace;font-size:8px;color:var(–muted);flex:1}
.sc-goal-badge{font-family:‘Space Mono’,monospace;font-size:8px;padding:2px 6px;border-radius:3px}
.sc-gb-hit{background:rgba(76,201,122,.12);color:var(–green);border:1px solid rgba(76,201,122,.3)}
.sc-gb-close{background:rgba(201,168,76,.1);color:var(–gold);border:1px solid rgba(201,168,76,.3)}
.sc-gb-open{background:rgba(255,255,255,.05);color:var(–muted);border:1px solid rgba(255,255,255,.08)}
.sc-chart-wrap{height:90px;margin:10px 0 6px}
/* streak */
.streak-row{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:18px}
.streak-day{width:28px;height:28px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-family:‘Space Mono’,monospace;font-size:8px;border:1px solid rgba(255,255,255,.08);background:var(–dark4);color:var(–muted)}
.streak-day.active{background:rgba(201,168,76,.15);border-color:rgba(201,168,76,.4);color:var(–gold)}
.streak-day.done{background:rgba(76,201,122,.12);border-color:rgba(76,201,122,.3);color:var(–green)}
.streak-section-label{font-family:‘Space Mono’,monospace;font-size:9px;letter-spacing:2px;color:var(–gold);text-transform:uppercase;opacity:.8;margin-bottom:8px}
/* week goal summary in stats */
.wgoal-card{background:var(–dark3);border:1px solid rgba(255,255,255,.06);border-radius:12px;margin-bottom:14px;overflow:hidden}
.wgoal-head{padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.05);display:flex;align-items:center;justify-content:space-between}
.wgoal-title{font-family:‘Bebas Neue’,sans-serif;font-size:20px;letter-spacing:2px;color:var(–gold)}
.wgoal-sub{font-family:‘Space Mono’,monospace;font-size:8px;color:var(–muted)}
.wgoal-body{padding:10px 14px 14px}
.wgoal-row{display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.wgoal-row:last-child{border-bottom:none}
.wgoal-ex{flex:1;font-size:11px;color:var(–text)}
.wgoal-target{font-family:‘Space Mono’,monospace;font-size:9px;color:var(–gold);min-width:80px;text-align:right}
.wgoal-actual{font-family:‘Space Mono’,monospace;font-size:9px;min-width:80px;text-align:right}
.wgoal-bar-wrap{width:50px;height:4px;background:rgba(255,255,255,.07);border-radius:2px}
.wgoal-bar-fill{height:100%;border-radius:2px;transition:width .4s}
.dp-legend{background:rgba(201,168,76,.06);border:1px solid rgba(201,168,76,.15);border-radius:8px;padding:10px 12px;margin-bottom:14px}
.dp-legend-title{font-family:‘Space Mono’,monospace;font-size:8px;letter-spacing:2px;color:var(–gold);text-transform:uppercase;margin-bottom:6px}
.dp-legend-text{font-family:‘Space Mono’,monospace;font-size:9px;color:var(–muted);line-height:1.7}
.dp-legend-text b{color:var(–text)}
</style>

</head>
<body>

<div id="splash">
  <div class="splash-ring"><div class="splash-cg">CG</div></div>
  <div class="splash-title">Neph Gymplan</div>
  <div class="splash-sub">🦍 Double Progression System 💪🏾</div>
  <div class="splash-bar-wrap"><div class="splash-bar" id="sbar"></div></div>
</div>
<div id="toast"></div>

<div id="backup-modal" onclick="closeBackupModal(event)">
  <div class="backup-sheet">
    <div class="bs-handle"></div>
    <div class="bs-title">Backup</div>
    <div class="bs-sub">Daten sichern & wiederherstellen</div>
    <div class="auto-badge"><div class="pulse-dot"></div>Auto-Backup aktiv</div>
    <div class="bs-info"><b>Auto:</b> Jede Eingabe wird sofort gespeichert.<br><b>Manuell:</b> Code exportieren → in Notizen sichern.</div>
    <div class="bs-section">
      <div class="bs-section-label">💾 Exportieren</div>
      <button class="bs-btn bs-btn-export" onclick="doExport()">📤 Backup-Code erstellen</button>
      <button class="bs-btn bs-btn-copy" id="copy-btn" style="display:none" onclick="doCopy()">📋 Code kopieren</button>
      <textarea class="bs-textarea" id="export-ta" style="display:none" readonly></textarea>
    </div>
    <div class="bs-section">
      <div class="bs-section-label">📥 Wiederherstellen</div>
      <textarea class="bs-textarea" id="import-ta" placeholder="Backup-Code hier einfügen..."></textarea>
      <button class="bs-btn bs-btn-import" onclick="doImport()">✅ Daten wiederherstellen</button>
    </div>
    <button class="bs-btn bs-btn-close" onclick="closeBackupModal()">Schließen</button>
  </div>
</div>

<div id="topbar">
  <div class="topbar-left">
    <div class="topbar-eyebrow">4-Day PPL · Double Progression</div>
    <div class="topbar-title">Neph Gymplan</div>
  </div>
  <div class="topbar-right">
    <div class="backup-pill" onclick="openBackupModal()"><div class="pulse-dot"></div><span>Backup</span></div>
    <div class="week-pill" onclick="openWeekModal()">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><rect x="1" y="2" width="8" height="7" rx="1.5" stroke="#C9A84C" stroke-width="1.2"/><path d="M3 1v2M7 1v2M1 5h8" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round"/></svg>
      <span id="week-label">W1</span>
    </div>
  </div>
</div>

<div id="day-tabs">
  <div class="dtab active" onclick="showDay('mo',this)"><div class="dl">Mo</div><div class="dn">Push</div><div class="dtype">BRUST·TRI</div><div class="dprog" id="dp-mo"></div></div>
  <div class="dtab" onclick="showDay('mi',this)"><div class="dl">Mi</div><div class="dn">Pull</div><div class="dtype">RÜCKEN·BIZ</div><div class="dprog" id="dp-mi"></div></div>
  <div class="dtab" onclick="showDay('fr',this)"><div class="dl">Fr</div><div class="dn">Beine</div><div class="dtype">LEGS</div><div class="dprog" id="dp-fr"></div></div>
  <div class="dtab" onclick="showDay('so',this)"><div class="dl">So</div><div class="dn">Push B</div><div class="dtype">VARIATION</div><div class="dprog" id="dp-so"></div></div>
  <div class="dtab" onclick="showDay('stats',this)"><div class="dl">📊</div><div class="dn">Stats</div><div class="dtype">ZIELE</div></div>
</div>

<div id="week-modal" onclick="closeWeekModal(event)">
  <div class="week-sheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">Trainingswoche wählen</div>
    <div class="week-grid" id="week-grid"></div>
  </div>
</div>

<div id="scroll">
<div class="day-panel active" id="day-mo">
  <div class="day-badge badge-push">🔴 Montag — Push A</div>
  <div class="charles-note"><strong>Charles Glass — Push</strong>Schultern hinten und unten. Brust raus, Schulterblätter zusammen. Volle Kontraktion jeden Satz.</div>
  <div class="section-header"><div class="section-title">Obere Brust</div><div class="section-badge">Clavicular</div></div>
  <div id="card-mo01"></div><div id="card-mo02"></div><div id="card-mo03"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Mittlere Brust</div><div class="section-badge">Sternal</div></div>
  <div id="card-mo04"></div><div id="card-mo05"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Untere Brust</div><div class="section-badge">Lower Pec</div></div>
  <div id="card-mo06"></div><div id="card-mo07"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Schulter</div><div class="section-badge">Delts</div></div>
  <div id="card-mo08"></div><div id="card-mo09"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Trizeps</div><div class="section-badge">Triceps</div></div>
  <div id="card-mo10"></div><div id="card-mo11"></div><div id="card-mo12"></div>
</div>
<div class="day-panel" id="day-mi">
  <div class="day-badge badge-pull">🔵 Mittwoch — Pull</div>
  <div class="charles-note"><strong>Charles Glass — Pull</strong>Mit den Ellenbogen ziehen. Schulterblätter zuerst runterziehen. Bizeps vollständig einpressen.</div>
  <div class="section-header"><div class="section-title">Rückenbreite</div><div class="section-badge">Latissimus</div></div>
  <div id="card-mi01"></div><div id="card-mi02"></div><div id="card-mi03"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Rückendicke</div><div class="section-badge">Thickness</div></div>
  <div id="card-mi04"></div><div id="card-mi05"></div><div id="card-mi06"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Hintere Schulter</div><div class="section-badge">Rear Delt</div></div>
  <div id="card-mi07"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Bizeps</div><div class="section-badge">Biceps</div></div>
  <div id="card-mi08"></div><div id="card-mi09"></div><div id="card-mi10"></div>
</div>
<div class="day-panel" id="day-fr">
  <div class="day-badge badge-legs">🟢 Freitag — Beine</div>
  <div class="charles-note"><strong>Charles Glass — Beine</strong>Kein Bouncing. Jede Wiederholung kontrolliert. Oben kurz einpressen.</div>
  <div class="section-header"><div class="section-title">Quadrizeps</div><div class="section-badge">Schwerpunkt</div></div>
  <div id="card-fr01"></div><div id="card-fr02"></div><div id="card-fr03"></div><div id="card-fr04"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Hamstrings & Gesäß</div><div class="section-badge">Posterior</div></div>
  <div id="card-fr05"></div><div id="card-fr06"></div><div id="card-fr07"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Waden</div><div class="section-badge">Calves</div></div>
  <div id="card-fr08"></div>
</div>
<div class="day-panel" id="day-so">
  <div class="day-badge badge-push">🔴 Sonntag — Push B</div>
  <div class="charles-note"><strong>Charles Glass — Push B</strong>Variation zum Montag. Negativ-Bankdrücken — 4–5 Sek senken, explosiv hoch.</div>
  <div class="section-header"><div class="section-title">Brust</div><div class="section-badge">Variation</div></div>
  <div id="card-sop01"></div><div id="card-sop02"></div><div id="card-sop03"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Schulter</div><div class="section-badge">Variation</div></div>
  <div id="card-sop04"></div><div id="card-sop05"></div>
  <div class="divider"></div>
  <div class="section-header"><div class="section-title">Trizeps</div><div class="section-badge">Variation</div></div>
  <div id="card-sop06"></div><div id="card-sop07"></div>
</div>
<div class="day-panel" id="day-stats"></div>
</div><!-- #scroll -->

<script>
// ─── DATA ───────────────────────────────────────────────────
const INFO={
  mo01:{geraet:'🏋️ <b>Kurzhanteln + Schrägbank (30°)</b>',muskeln:{p:['Obere Brust'],s:['Vordere Schulter','Trizeps']}},
  mo02:{geraet:'🏗️ <b>Schrägbank Maschine (30°)</b>',muskeln:{p:['Obere Brust'],s:['Vordere Schulter','Trizeps']}},
  mo03:{geraet:'🏋️ <b>Guillotine Press Schrägbank 30°</b>',muskeln:{p:['Obere Brust'],s:['Vordere Schulter']}},
  mo04:{geraet:'🏗️ <b>Smith Machine — quer auf Bank</b>',muskeln:{p:['Mittlere Brust','Innere Brust'],s:['Trizeps']}},
  mo05:{geraet:'🦋 <b>Pec Deck / Butterfly</b>',muskeln:{p:['Mittlere Brust'],s:['Innere Brust']}},
  mo06:{geraet:'🏗️ <b>Decline-Bank + Langhantel</b>',muskeln:{p:['Untere Brust'],s:['Trizeps','Vordere Schulter']}},
  mo07:{geraet:'🏗️ <b>Dip-Stangen — nach vorne gelehnt</b>',muskeln:{p:['Untere Brust'],s:['Trizeps']}},
  mo08:{geraet:'💪 <b>Kurzhanteln + aufrechte Bank</b>',muskeln:{p:['Mittlere Schulter','Vordere Schulter'],s:['Trizeps']}},
  mo09:{geraet:'💪 <b>Kurzhanteln stehend</b>',muskeln:{p:['Mittlere Schulter'],s:['Vordere Schulter']}},
  mo10:{geraet:'🔗 <b>Kabelzug + Seilgriff oben</b>',muskeln:{p:['Trizeps alle 3 Köpfe'],s:[]}},
  mo11:{geraet:'🔗 <b>Kabelzug oder KH über Kopf</b>',muskeln:{p:['Trizeps langer Kopf'],s:[]}},
  mo12:{geraet:'💪 <b>Kurzhanteln + flache Bank</b>',muskeln:{p:['Trizeps langer Kopf'],s:[]}},
  mi01:{geraet:'🏗️ <b>Klimmzug-Stange weiter Griff</b>',muskeln:{p:['Latissimus','Rückenbreite'],s:['Bizeps','Hintere Schulter']}},
  mi02:{geraet:'🔗 <b>Lat Pulldown weiter Griff</b>',muskeln:{p:['Latissimus'],s:['Bizeps','Hintere Schulter']}},
  mi03:{geraet:'🔗 <b>Straight Arm Pulldown</b>',muskeln:{p:['Latissimus Isolation'],s:['Hintere Schulter']}},
  mi04:{geraet:'🔗 <b>Rudermaschine enger Griff</b>',muskeln:{p:['Mittlerer Rücken','Rhomboideus'],s:['Bizeps','Latissimus']}},
  mi05:{geraet:'🏗️ <b>T-Bar Rudergerät</b>',muskeln:{p:['Mittlerer Rücken','Trapez'],s:['Bizeps','Latissimus']}},
  mi06:{geraet:'🔗 <b>Kabelzug Enges Rudern</b>',muskeln:{p:['Mittlerer Rücken'],s:['Bizeps']}},
  mi07:{geraet:'🔗 <b>Cable Face Pull</b>',muskeln:{p:['Hintere Schulter','Außenrotatoren'],s:['Trapez']}},
  mi08:{geraet:'🏋️ <b>Drag Curl Langhantel</b>',muskeln:{p:['Bizeps langer Kopf'],s:['Brachialis']}},
  mi09:{geraet:'🏋️ <b>EZ-Stange + Scottbank</b>',muskeln:{p:['Bizeps kurzer Kopf'],s:['Brachialis']}},
  mi10:{geraet:'💪 <b>Hammer Curl KH</b>',muskeln:{p:['Brachialis','Brachioradialis'],s:['Bizeps']}},
  fr01:{geraet:'🏗️ <b>Smith Machine Kniebeugen</b>',muskeln:{p:['Quadrizeps'],s:['Gesäß','Hamstrings']}},
  fr02:{geraet:'🦵 <b>Beinpresse 45°</b>',muskeln:{p:['Quadrizeps'],s:['Gesäß','Waden']}},
  fr03:{geraet:'🦵 <b>Beinstrecker Maschine</b>',muskeln:{p:['Quadrizeps Isolation'],s:[]}},
  fr04:{geraet:'🚶 <b>Ausfallschritte Langhantel</b>',muskeln:{p:['Quadrizeps','Gesäß'],s:['Hamstrings','Waden']}},
  fr05:{geraet:'🦵 <b>Liegender Beinbeuger</b>',muskeln:{p:['Hamstrings'],s:['Waden']}},
  fr06:{geraet:'🏋️ <b>Romanian Deadlift</b>',muskeln:{p:['Hamstrings','Gesäß'],s:['Unterer Rücken']}},
  fr07:{geraet:'🦵 <b>Sitzender Beinbeuger</b>',muskeln:{p:['Hamstrings'],s:[]}},
  fr08:{geraet:'🦵 <b>Standing Calf Raise</b>',muskeln:{p:['Wadenmuskeln'],s:['Soleus']}},
  sop01:{geraet:'🏋️ <b>Negatives Bankdrücken flach</b>',muskeln:{p:['Gesamte Brust exzentrisch'],s:['Trizeps','Vordere Schulter']}},
  sop02:{geraet:'🏗️ <b>Brustpresse Maschine</b>',muskeln:{p:['Mittlere Brust'],s:['Trizeps']}},
  sop03:{geraet:'🔗 <b>Kabelzug Fly tief→hoch</b>',muskeln:{p:['Untere Brust'],s:['Mittlere Brust']}},
  sop04:{geraet:'💪 <b>Vorgebeugtes Seitheben</b>',muskeln:{p:['Hintere Schulter'],s:['Trapez','Rhomboideus']}},
  sop05:{geraet:'🔗 <b>Cable Lateral Raise</b>',muskeln:{p:['Mittlere Schulter'],s:[]}},
  sop06:{geraet:'🏗️ <b>Dip-Stangen</b>',muskeln:{p:['Trizeps'],s:['Untere Brust','Schulter']}},
  sop07:{geraet:'🔗 <b>Einarmige Kabel Extension</b>',muskeln:{p:['Trizeps alle Köpfe'],s:[]}},
};

// repsMin, repsMax = Double-Progression-Bereich; startKg = Startvorgabe
const EX={
  mo01:{num:'01',name:'Schrägbankdrücken KH (30°)',sets:4,reps:'10–12',rest:'90s',tags:[['red','Obere Brust'],['gold','KH']],tip:'Tiefere Dehnung als LH. Hanteln leicht nach innen drehen oben.',ytq:'incline dumbbell press technique',repsMin:10,repsMax:12,startKg:20},
  mo02:{num:'02',name:'Schrägbankdrücken Maschine',sets:3,reps:'12–15',rest:'75s',tags:[['red','Obere Brust'],['gold','Maschine']],tip:'Konstante Spannung. Schulterblätter fest zusammen.',ytq:'incline chest press machine',repsMin:12,repsMax:15,startKg:40},
  mo03:{num:'03',name:'Guillotine Press (30°)',sets:4,reps:'12–15',rest:'90s',tags:[['red','Obere Brust'],['red','Glass Favorit']],tip:'Stange zum Schlüsselbein. Maximaler Stretch.',ytq:'Charles Glass guillotine press',repsMin:12,repsMax:15,startKg:40},
  mo04:{num:'04',name:'Smith Machine Champagne Press',sets:4,reps:'12',rest:'90s',tags:[['gold','Glass Favorit'],['gold','Mitte']],tip:'Quer auf Bank. Isoliert innere + mittlere Brust.',ytq:'Charles Glass champagne press',repsMin:10,repsMax:12,startKg:50},
  mo05:{num:'05',name:'Pec Deck / Butterfly',sets:3,reps:'13–15',rest:'60s',tags:[['gold','Isolation'],['gold','Mitte']],tip:'Volle Kontraktion in der Mitte – 2 Sek halten.',ytq:'Charles Glass pec deck',repsMin:13,repsMax:15,startKg:40},
  mo06:{num:'06',name:'Decline Bankdrücken',sets:4,reps:'10–12',rest:'90s',tags:[['red','Untere Brust'],['red','Glass #1']],tip:'Bank auf -15° bis -30°. Maximale Kontraktion.',ytq:'Charles Glass decline bench press',repsMin:10,repsMax:12,startKg:60},
  mo07:{num:'07',name:'Dips — nach vorne gelehnt',sets:3,reps:'10–12',rest:'75s',tags:[['red','Untere Brust'],['red','Compound']],tip:'Oberkörper WEIT nach vorne lehnen (30–45°).',ytq:'chest dips forward lean',repsMin:10,repsMax:12,startKg:0},
  mo08:{num:'08',name:'Schulterdrücken KH (sitzend)',sets:4,reps:'10–12',rest:'75s',tags:[['blue','Schulter']],tip:'Ellenbogen leicht vor dem Körper.',ytq:'dumbbell shoulder press technique',repsMin:10,repsMax:12,startKg:16},
  mo09:{num:'09',name:'Seitliches Heben',sets:3,reps:'15',rest:'60s',tags:[['blue','Schulter']],tip:'Kleinen Finger leicht hoch drehen. Kein Schwung.',ytq:'Charles Glass lateral raise',repsMin:12,repsMax:15,startKg:10},
  mo10:{num:'10',name:'Kabelzug Pushdown (Seil)',sets:4,reps:'12–15',rest:'60s',tags:[['green','Trizeps']],tip:'Ellenbogen seitlich fixiert.',ytq:'tricep pushdown cable',repsMin:12,repsMax:15,startKg:20},
  mo11:{num:'11',name:'Overhead Trizeps Extension',sets:3,reps:'12–15',rest:'75s',tags:[['green','Trizeps'],['red','Langer Kopf']],tip:'Nur Overhead dehnt den langen Kopf vollständig.',ytq:'overhead tricep extension',repsMin:12,repsMax:15,startKg:15},
  mo12:{num:'12',name:'KH Trizeps Extension (liegend)',sets:3,reps:'12–15',rest:'60s',tags:[['green','Trizeps'],['gold','Glass Favorit']],tip:'Ellenbogen eng, nur Unterarm bewegt sich.',ytq:'lying tricep extension dumbbell',repsMin:12,repsMax:15,startKg:12},
  mi01:{num:'01',name:'Klimmzüge (weiter Griff)',sets:4,reps:'8–12',rest:'90s',tags:[['blue','Breite'],['red','Compound']],tip:'Schulterblätter zuerst nach unten.',ytq:'pull ups wide grip technique',repsMin:8,repsMax:12,startKg:0},
  mi02:{num:'02',name:'Lat Pulldown (weiter Griff)',sets:3,reps:'12–15',rest:'75s',tags:[['blue','Breite']],tip:'Brust nach vorne, leichtes Zurücklehnen.',ytq:'lat pulldown technique',repsMin:12,repsMax:15,startKg:50},
  mi03:{num:'03',name:'Straight Arm Pulldown',sets:3,reps:'12–15',rest:'60s',tags:[['blue','Breite'],['gold','Isolation']],tip:'Arme gestreckt lassen. Nur der Lat arbeitet.',ytq:'straight arm pulldown',repsMin:12,repsMax:15,startKg:30},
  mi04:{num:'04',name:'Sitzrudern Maschine (eng)',sets:4,reps:'10–12',rest:'90s',tags:[['red','Dicke']],tip:'Schulterblätter maximal zusammendrücken.',ytq:'seated cable row technique',repsMin:10,repsMax:12,startKg:50},
  mi05:{num:'05',name:'T-Bar Rudern',sets:3,reps:'10–12',rest:'90s',tags:[['red','Dicke'],['red','Compound']],tip:'Ellenbogen eng. Schulterblätter zusammen.',ytq:'T bar row technique',repsMin:10,repsMax:12,startKg:40},
  mi06:{num:'06',name:'Enges Rudern Maschine',sets:3,reps:'12–15',rest:'75s',tags:[['red','Dicke'],['gold','Maschine']],tip:'Schulterblatt vollständig zusammenziehen.',ytq:'close grip cable row',repsMin:12,repsMax:15,startKg:45},
  mi07:{num:'07',name:'Cable Face Pull',sets:3,reps:'15',rest:'60s',tags:[['blue','Hintere Schulter'],['gold','Glass Favorit']],tip:'Seil auf Augenhöhe. Außenrotation 2 Sek.',ytq:'face pull technique',repsMin:12,repsMax:15,startKg:15},
  mi08:{num:'08',name:'Drag Curl (Langhantel)',sets:3,reps:'10–12',rest:'60s',tags:[['purple','Bizeps'],['red','Glass Favorit']],tip:'Stange nah am Körper hochziehen.',ytq:'drag curl technique',repsMin:10,repsMax:12,startKg:30},
  mi09:{num:'09',name:'Preacher Curl (EZ-Stange)',sets:3,reps:'10–12',rest:'60s',tags:[['purple','Bizeps']],tip:'Volle Dehnung unten, volle Kontraktion oben.',ytq:'preacher curl technique',repsMin:10,repsMax:12,startKg:20},
  mi10:{num:'10',name:'Hammer Curl (KH)',sets:3,reps:'12',rest:'60s',tags:[['purple','Bizeps'],['blue','Brachialis']],tip:'Neutraler Griff. Trifft Brachialis und langen Kopf.',ytq:'hammer curl technique',repsMin:10,repsMax:12,startKg:14},
  fr01:{num:'01',name:'Kniebeugen (Smith Machine)',sets:4,reps:'10–12',rest:'90s',tags:[['red','Compound']],tip:'Füße schulterbreit, tief, explosiv hoch.',ytq:'squat technique smith machine',repsMin:10,repsMax:12,startKg:60},
  fr02:{num:'02',name:'Beinpresse (45°)',sets:4,reps:'12–15',rest:'90s',tags:[['red','Compound']],tip:'Durch die Ballen drücken. Knie nie ganz strecken.',ytq:'leg press technique',repsMin:12,repsMax:15,startKg:100},
  fr03:{num:'03',name:'Beinstrecker (Leg Extension)',sets:3,reps:'15',rest:'60s',tags:[['gold','Isolation']],tip:'1–2 Sek halten oben. 3 Sek Negativ.',ytq:'leg extension technique',repsMin:12,repsMax:15,startKg:40},
  fr04:{num:'04',name:'Ausfallschritte Langhantel',sets:3,reps:'10–12/Seite',rest:'90s',tags:[['red','Compound'],['blue','Stabilität']],tip:'Großer Schritt, hinteres Knie fast auf Boden.',ytq:'barbell walking lunges',repsMin:10,repsMax:12,startKg:40},
  fr05:{num:'05',name:'Liegender Beinbeuger',sets:4,reps:'12–15',rest:'60s',tags:[['gold','Isolation']],tip:'Zehen anziehen für maximale Hamstring-Aktivierung.',ytq:'lying leg curl technique',repsMin:12,repsMax:15,startKg:30},
  fr06:{num:'06',name:'Romanian Deadlift',sets:3,reps:'10–12',rest:'90s',tags:[['red','Compound']],tip:'Rücken gerade, Hüfte hinten. Dehnung spüren.',ytq:'romanian deadlift technique',repsMin:10,repsMax:12,startKg:60},
  fr07:{num:'07',name:'Sitzender Beinbeuger',sets:3,reps:'12–15',rest:'60s',tags:[['gold','Isolation']],tip:'Volle Dehnung, volle Kontraktion.',ytq:'seated leg curl technique',repsMin:12,repsMax:15,startKg:30},
  fr08:{num:'08',name:'Standing Calf Raise',sets:4,reps:'15–20',rest:'45s',tags:[['green','Waden']],tip:'Volle ROM. 2 Sek oben halten.',ytq:'standing calf raise technique',repsMin:15,repsMax:20,startKg:60},
  sop01:{num:'01',name:'Negatives Bankdrücken',sets:4,reps:'4–6',rest:'120s',tags:[['red','Negativ'],['gold','Stärke']],tip:'4–5 Sek senken. Sicherungspartner notwendig.',ytq:'negative bench press technique',repsMin:4,repsMax:6,startKg:80},
  sop02:{num:'02',name:'Brustpresse Maschine',sets:3,reps:'12–15',rest:'60s',tags:[['gold','Maschine']],tip:'Sitz auf Brusthöhe. 2 Sek einpressen.',ytq:'machine chest press technique',repsMin:12,repsMax:15,startKg:50},
  sop03:{num:'03',name:'Kabelzug Fly tief → hoch',sets:3,reps:'13–15',rest:'60s',tags:[['red','Untere Brust']],tip:'Hände in der Mitte leicht überkreuzen.',ytq:'cable fly lower chest',repsMin:13,repsMax:15,startKg:15},
  sop04:{num:'04',name:'Vorgebeugtes Seitheben',sets:3,reps:'15',rest:'60s',tags:[['blue','Hintere Schulter']],tip:'45° vorgebeugt. Ellenbogen nach hinten oben.',ytq:'bent over lateral raise',repsMin:12,repsMax:15,startKg:10},
  sop05:{num:'05',name:'Cable Lateral Raise',sets:3,reps:'15',rest:'60s',tags:[['blue','Schulter']],tip:'Konstantere Spannung als Kurzhanteln.',ytq:'cable lateral raise technique',repsMin:12,repsMax:15,startKg:10},
  sop06:{num:'06',name:'Dips (Trizepsdips)',sets:3,reps:'10–12',rest:'75s',tags:[['green','Trizeps'],['red','Compound']],tip:'Aufrecht bleiben für Trizepsfokus.',ytq:'tricep dips technique',repsMin:10,repsMax:12,startKg:0},
  sop07:{num:'07',name:'Einarmige Kabel Extension',sets:3,reps:'12/Seite',rest:'60s',tags:[['green','Trizeps'],['gold','Isolation']],tip:'Ellenbogen fixiert. 1 Sek halten.',ytq:'single arm cable tricep extension',repsMin:10,repsMax:12,startKg:12},
};
const DAY_EX={mo:['mo01','mo02','mo03','mo04','mo05','mo06','mo07','mo08','mo09','mo10','mo11','mo12'],mi:['mi01','mi02','mi03','mi04','mi05','mi06','mi07','mi08','mi09','mi10'],fr:['fr01','fr02','fr03','fr04','fr05','fr06','fr07','fr08'],so:['sop01','sop02','sop03','sop04','sop05','sop06','sop07']};
const DAY_META={mo:{label:'Push A',color:'var(--red)',cls:'t-push',emoji:'🔴'},mi:{label:'Pull',color:'var(--blue)',cls:'t-pull',emoji:'🔵'},fr:{label:'Beine',color:'var(--green)',cls:'t-legs',emoji:'🟢'},so:{label:'Push B',color:'var(--purple)',cls:'t-pushb',emoji:'🟣'}};

let CW=1,_curDay='mo';
const chartInst={},chartModes={};
const DB_NAME='NephGymPPLv4',DB_VER=1,STORE='gymdata';
let db=null,STATE={week:1,data:{},goals:{}};

// ─── STORAGE ────────────────────────────────────────────────
function openDB(){return new Promise((res,rej)=>{const req=indexedDB.open(DB_NAME,DB_VER);req.onupgradeneeded=e=>e.target.result.createObjectStore(STORE);req.onsuccess=e=>{db=e.target.result;res(db);};req.onerror=()=>rej();});}
function dbGet(k){return new Promise(r=>{if(!db){r(null);return;}const tx=db.transaction(STORE,'readonly');const req=tx.objectStore(STORE).get(k);req.onsuccess=()=>r(req.result||null);req.onerror=()=>r(null);});}
function dbSet(k,v){return new Promise(r=>{if(!db){r();return;}const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(v,k);tx.oncomplete=()=>r();tx.onerror=()=>r();});}
async function saveAll(){const j=JSON.stringify(STATE);try{localStorage.setItem('cg_pplv4',j);}catch(e){}await dbSet('cg_pplv4',j);}
async function loadAll(){let j=null;try{j=await dbGet('cg_pplv4');}catch(e){}if(!j){try{j=localStorage.getItem('cg_pplv4');}catch(e){}}if(!j)return{week:1,data:{},goals:{}};try{return JSON.parse(j);}catch(e){return{week:1,data:{},goals:{}};}}
async function initState(){STATE=await loadAll();if(!STATE.goals)STATE.goals={};CW=STATE.week||1;document.getElementById('week-label').textContent='W'+CW;}
function getWD(w){return STATE.data[w]||{}}
function setWD(w,d){STATE.data[w]=d;STATE.week=CW;saveAll();}

// ─── DOUBLE PROGRESSION GOALS ───────────────────────────────
// Goal per exercise per week: {kg, repsTarget, repsMin, repsMax}
// Auto-calc based on previous week. User can override.
function getGoalKey(id,w){return `${id}_w${w}`;}
function getGoal(id,w){
  const key=getGoalKey(id,w);
  if(STATE.goals[key])return STATE.goals[key];
  return calcAutoGoal(id,w);
}
function setGoal(id,w,g){STATE.goals[getGoalKey(id,w)]=g;saveAll();}
function calcAutoGoal(id,w){
  const ex=EX[id];if(!ex)return{kg:ex?.startKg||0,repsTarget:ex?.repsMin||10,repsMin:ex?.repsMin||10,repsMax:ex?.repsMax||12};
  if(w<=1)return{kg:ex.startKg,repsTarget:ex.repsMin,repsMin:ex.repsMin,repsMax:ex.repsMax,auto:true};
  // Look at last week performance
  const prevWD=STATE.data[w-1]||{};
  const prevExd=prevWD[id]||{};
  const prevGoal=getGoal(id,w-1);
  // Collect done sets
  let doneKg=0,doneReps=0,doneSets=0;
  for(let s=1;s<=ex.sets;s++){const sd=prevExd[s]||{};if(sd.done){doneKg=parseFloat(sd.weight)||0;doneReps=parseFloat(sd.reps)||0;doneSets++;}}
  if(doneSets===0)return{kg:prevGoal.kg,repsTarget:prevGoal.repsTarget||ex.repsMin,repsMin:ex.repsMin,repsMax:ex.repsMax,auto:true};
  // Double Progression: if avg reps >= repsMax across done sets → bump weight
  const wd=STATE.data[w-1]||{};const exd=wd[id]||{};
  let totalReps=0,totalSets=0;
  for(let s=1;s<=ex.sets;s++){const sd=exd[s]||{};if(sd.done){totalReps+=parseFloat(sd.reps)||0;totalSets++;}}
  const avgReps=totalSets>0?totalReps/totalSets:0;
  if(avgReps>=ex.repsMax&&doneKg>0){
    // bump weight, reset reps to min
    const bump=ex.startKg>=40?2.5:ex.startKg>=15?2.5:1.25;
    return{kg:doneKg+bump,repsTarget:ex.repsMin,repsMin:ex.repsMin,repsMax:ex.repsMax,auto:true,bumped:true};
  }else{
    // keep weight, target +1 rep
    const nextReps=Math.min(ex.repsMax,Math.max(ex.repsMin,(avgReps>0?Math.round(avgReps)+1:ex.repsMin)));
    return{kg:doneKg||prevGoal.kg,repsTarget:nextReps,repsMin:ex.repsMin,repsMax:ex.repsMax,auto:true};
  }
}

// ─── CARD HTML HELPERS ──────────────────────────────────────
function tagH(t){return t.map(([c,l])=>`<span class="tag tag-${c}">${l}</span>`).join('')}
function buildInfoHTML(id){
  const inf=INFO[id];if(!inf)return'';
  const cp=(inf.muskeln.p||[]).map(m=>`<span class="muskel-chip mc-primary">${m}</span>`).join('');
  const cs=(inf.muskeln.s||[]).map(m=>`<span class="muskel-chip mc-secondary">${m}</span>`).join('');
  const sek=inf.muskeln.s&&inf.muskeln.s.length>0?`<div class="mc-label">Unterstützend</div><div class="muskel-chips">${cs}</div>`:'';
  return`<div class="geraet-box"><div class="geraet-title">🏗️ GERÄT</div><div class="geraet-text">${inf.geraet}</div></div>
  <div class="muskel-box"><div class="muskel-title">💪 MUSKELN</div><div class="mc-label">Hauptmuskeln</div><div class="muskel-chips">${cp}</div>${sek}</div>`;
}
function goalBannerHTML(id){
  const ex=EX[id];if(!ex)return'';
  const g=getGoal(id,CW);
  const wd=getWD(CW);const exd=wd[id]||{};
  // calc actual performance
  let maxReps=0,maxKg=0,doneSets=0;
  for(let s=1;s<=ex.sets;s++){const sd=exd[s]||{};if(sd.done){const kg=parseFloat(sd.weight)||0,rp=parseFloat(sd.reps)||0;if(kg>maxKg)maxKg=kg;if(rp>maxReps)maxReps=rp;doneSets++;}}
  const hasData=doneSets>0;
  const kgPct=g.kg>0?Math.min(100,(maxKg/g.kg)*100):0;
  const repPct=g.repsTarget>0?Math.min(100,(maxReps/g.repsTarget)*100):0;
  const progPct=hasData?Math.round((kgPct*0.5+repPct*0.5)):0;
  let statusLabel='OFFEN',statusCls='open';
  if(hasData){if(maxKg>=g.kg&&maxReps>=g.repsTarget){statusLabel='✓ ERREICHT';statusCls='hit';}else if(progPct>=70){statusLabel='~NAH DRAN';statusCls='close';}else{statusLabel='IN ARBEIT';statusCls='miss';}}
  const bannerCls=statusCls==='hit'?'gb-green':statusCls==='close'?'gb-gold':statusCls==='miss'?'gb-orange':'gb-blue';
  const kgLabel=g.kg>0?`${g.kg} kg`:'BW';
  const dpNote=g.bumped?'🔺 Gewicht rauf diese Woche!':g.repsTarget>=g.repsMax?`Ziel: alle Sätze × ${g.repsMax} Wdh → dann Gewicht erhöhen`:`Ziel: ${g.repsTarget} Wdh erreichen → nächste Woche +1 Wdh`;
  return`<div class="goal-banner ${bannerCls}" id="gb-${id}">
    <div class="gb-inner">
      <div class="gb-row">
        <div><div class="gb-label">🎯 Wochenziel W${CW}</div><div class="gb-target" style="color:${bannerCls==='gb-green'?'var(--green)':bannerCls==='gb-gold'?'var(--gold)':bannerCls==='gb-orange'?'var(--orange)':'var(--blue)'}">${kgLabel} × ${g.repsTarget} Wdh</div><div class="gb-sub">${ex.sets} Sätze · ${g.repsMin}–${g.repsMax} Wdh Zone</div></div>
        <div class="gb-status ${statusCls}">${statusLabel}</div>
      </div>
      <div class="gb-prog-bar"><div class="gb-prog-bar-fill" style="width:${progPct}%;background:${bannerCls==='gb-green'?'var(--green)':bannerCls==='gb-gold'?'var(--gold)':bannerCls==='gb-orange'?'var(--orange)':'var(--blue)'}"></div></div>
      <div class="gb-dp-info">${dpNote}</div>
      <div class="gb-edit-row">
        <div class="gb-edit-label">Anpassen:</div>
        <input class="gb-inp" id="ginpkg-${id}" type="number" inputmode="decimal" placeholder="kg" value="${g.kg||''}" onclick="event.stopPropagation()">
        <div class="gb-inp-sep">×</div>
        <input class="gb-inp" id="ginprp-${id}" type="number" inputmode="numeric" placeholder="Wdh" value="${g.repsTarget||''}" onclick="event.stopPropagation()">
        <button class="gb-save-btn" onclick="event.stopPropagation();saveGoal('${id}')">Speichern</button>
      </div>
    </div>
  </div>`;
}
function saveGoal(id){
  const ex=EX[id];if(!ex)return;
  const kg=parseFloat(document.getElementById('ginpkg-'+id)?.value)||0;
  const rp=parseInt(document.getElementById('ginprp-'+id)?.value)||ex.repsMin;
  setGoal(id,CW,{kg,repsTarget:rp,repsMin:ex.repsMin,repsMax:ex.repsMax,auto:false});
  refreshGoalBanner(id);showToast('✅ Ziel gespeichert!');}
function refreshGoalBanner(id){
  const old=document.getElementById('gb-'+id);
  if(!old)return;
  const tmp=document.createElement('div');tmp.innerHTML=goalBannerHTML(id);
  old.replaceWith(tmp.firstChild);}

function buildCard(id){
  const ex=EX[id];if(!ex)return;
  const el=document.getElementById('card-'+id);if(!el)return;
  const rows=Array.from({length:ex.sets},(_,i)=>`<div class="set-row" data-set="${i+1}"><span class="set-label">S${i+1}</span><input class="set-input input-w" type="number" inputmode="decimal" placeholder="kg" oninput="onInp(event,'${id}',${i+1},'weight')"><input class="set-input input-r" type="number" inputmode="numeric" placeholder="Wdh" oninput="onInp(event,'${id}',${i+1},'reps')"><button class="sdone" onclick="onDone(event,'${id}',${i+1})">○</button></div>`).join('');
  const ytSvg=`<svg width="12" height="12" viewBox="0 0 24 24" fill="#ff6b6b"><path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.4 2.7 12 2.7 12 2.7s-5.4 0-8.3.2c-.4.1-1.4.1-2.3 1C.7 4.6.5 6.2.5 6.2S.3 8 .3 9.9v1.8c0 1.9.2 3.7.2 3.7s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.2 7.6.2s5.4 0 8.3-.2c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.7V9.9c0-1.9-.2-3.7-.2-3.7zM9.7 15.5V8.4l6.6 3.6-6.6 3.5z"/></svg>`;
  el.innerHTML=`<div class="exercise-card" id="ec-${id}" onclick="toggleCard('${id}')">
    <div class="exercise-main">
      <div class="ex-num">${ex.num}</div>
      <div><div class="ex-name">${ex.name}</div><div class="ex-meta"><span>${ex.sets} Sätze</span><span>${ex.repsMin}–${ex.repsMax} Wdh</span><span>${ex.rest}</span></div><div class="ex-tags">${tagH(ex.tags)}</div></div>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="ex-ring"><svg width="22" height="22"><circle class="ex-ring-bg" cx="11" cy="11" r="9"/><circle class="ex-ring-fill" cx="11" cy="11" r="9" id="ringf-${id}" stroke-dasharray="56.5" stroke-dashoffset="56.5"/></svg></div>
        <div class="toggle-icon" id="ti-${id}">+</div>
      </div>
    </div>
    <div class="ex-info">
      ${buildInfoHTML(id)}
      <div class="exercise-tip"><strong>Charles Glass Tipp:</strong> ${ex.tip}
        <button class="yt-btn" onclick="event.stopPropagation();window.location.href='https://www.youtube.com/results?search_query=${encodeURIComponent(ex.ytq)}'">${ytSvg} Video ansehen</button>
      </div>
    </div>
    <div class="set-logger" onclick="event.stopPropagation()">
      <div id="gbl-${id}"></div>
      <div class="log-title" id="lt-${id}">TRAININGSLOG — WOCHE ${CW}</div>
      <div class="set-input-header"><span>#</span><span>Gewicht</span><span>Wdh</span><span></span></div>
      <div class="set-rows" id="rows-${id}">${rows}</div>
      <button class="clear-btn" onclick="clearLog(event,'${id}')">✕ Log löschen</button>
      <div class="prog-section">
        <div class="prog-header"><span class="prog-label">VERLAUF — <span id="pml-${id}">VOLUMEN</span></span>
          <div class="chart-toggle"><button class="ctbtn active" id="bv-${id}" onclick="setMode(event,'${id}','vol')">Volumen</button><button class="ctbtn" id="bm-${id}" onclick="setMode(event,'${id}','max')">Max kg</button></div>
        </div>
        <div class="chart-wrap"><canvas id="chart-${id}"></canvas></div>
        <div class="stats-row">
          <div class="stat-box"><div class="stat-box-label">Beste Woche</div><div class="stat-val sv-vol" id="sv-${id}">—</div><div class="stat-unit">kg×Wdh</div></div>
          <div class="stat-box"><div class="stat-box-label">Steigerung</div><div class="stat-val sv-gain" id="sg-${id}">—</div><div class="stat-unit">seit W1</div></div>
          <div class="stat-box"><div class="stat-box-label">Max Gewicht</div><div class="stat-val sv-max" id="sm-${id}">—</div><div class="stat-unit">kg</div></div>
        </div>
        <div class="chart-legend"><div class="cl-dot"></div><span id="cl-${id}">Volumen (kg × Wdh) pro Woche</span></div>
      </div>
    </div>
  </div>`;
}
Object.keys(EX).forEach(buildCard);

// ─── GOAL BANNER INJECT ─────────────────────────────────────
function injectGoalBanner(id){
  const el=document.getElementById('gbl-'+id);if(!el)return;
  el.innerHTML=goalBannerHTML(id);}

// ─── CHART & STATS ──────────────────────────────────────────
function getExStats(id){const all=STATE.data;const vols=[],maxes=[],labels=[];for(let w=1;w<=12;w++){const wd=all[w]||{};const exd=wd[id]||{};let vol=0,mx=0;Object.values(exd).forEach(s=>{if(s&&typeof s==='object'){const kg=parseFloat(s.weight)||0,rp=parseFloat(s.reps)||0;vol+=kg*rp;if(kg>mx)mx=kg;}});vols.push(vol);maxes.push(mx);labels.push('W'+w);}return{vols,maxes,labels};}
function renderChart(id){const{vols,maxes,labels}=getExStats(id);const isVol=(chartModes[id]||'vol')==='vol';const data=isVol?vols:maxes;const allV=vols.filter(v=>v>0),bestV=allV.length?Math.max(...allV):0;const fv=allV[0]||0,lv=allV[allV.length-1]||0;const gain=fv>0?Math.round((lv-fv)/fv*100):0;const allM=maxes.filter(v=>v>0),maxKg=allM.length?Math.max(...allM):0;const sv=document.getElementById('sv-'+id);const sg=document.getElementById('sg-'+id);const sm=document.getElementById('sm-'+id);if(sv)sv.textContent=bestV>0?bestV.toLocaleString('de'):'—';if(sg)sg.textContent=fv>0?(gain>=0?'+':'')+gain+'%':'—';if(sm)sm.textContent=maxKg>0?maxKg:'—';const canvas=document.getElementById('chart-'+id);if(!canvas)return;if(chartInst[id]){chartInst[id].destroy();delete chartInst[id];}const ctx=canvas.getContext('2d');const grad=ctx.createLinearGradient(0,0,0,120);grad.addColorStop(0,'rgba(201,168,76,0.22)');grad.addColorStop(1,'rgba(201,168,76,0)');const goalData=isVol?Array.from({length:12},(_,i)=>{const g=getGoal(id,i+1);return g.kg*g.repsTarget*EX[id].sets;}):Array.from({length:12},(_,i)=>getGoal(id,i+1).kg);chartInst[id]=new Chart(ctx,{type:'line',data:{labels,datasets:[{label:'Ist',data,borderColor:'#C9A84C',borderWidth:2,backgroundColor:grad,fill:true,tension:.4,pointBackgroundColor:data.map((_,i)=>i===CW-1?'#fff':'#C9A84C'),pointRadius:data.map((v,i)=>i===CW-1?5:v>0?3:2),pointBorderColor:'#C9A84C',pointBorderWidth:1},{label:'Ziel',data:goalData,borderColor:'rgba(76,201,122,.5)',borderWidth:1,borderDash:[4,4],fill:false,tension:.4,pointRadius:0}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:300},plugins:{legend:{display:false},tooltip:{backgroundColor:'#1C1C1C',borderColor:'rgba(201,168,76,.4)',borderWidth:1,titleFont:{family:'Space Mono',size:9},bodyFont:{family:'Space Mono',size:10},titleColor:'#C9A84C',bodyColor:'#E8E0D0'}},scales:{x:{grid:{color:'rgba(255,255,255,.04)'},ticks:{font:{family:'Space Mono',size:8},color:'#7A7060'}},y:{grid:{color:'rgba(255,255,255,.04)'},ticks:{font:{family:'Space Mono',size:8},color:'#7A7060'},beginAtZero:true}}}});}
function setMode(e,id,mode){e.stopPropagation();chartModes[id]=mode;document.getElementById('bv-'+id).classList.toggle('active',mode==='vol');document.getElementById('bm-'+id).classList.toggle('active',mode==='max');document.getElementById('pml-'+id).textContent=mode==='vol'?'VOLUMEN':'MAX KG';renderChart(id);}

// ─── RING & PROGRESS ────────────────────────────────────────
function updateRing(id){const ex=EX[id];if(!ex)return;const exd=getWD(CW)[id]||{};let done=0;for(let i=1;i<=ex.sets;i++){if((exd[i]||{}).done)done++;}const fill=document.getElementById('ringf-'+id);if(fill)fill.style.strokeDashoffset=56.5-(56.5*(done/ex.sets));}
function updateDayProgress(day){const ids=DAY_EX[day]||[];const dpEl=document.getElementById('dp-'+day);if(!dpEl)return;const wd=getWD(CW);dpEl.innerHTML=ids.map(id=>{const ex=EX[id];if(!ex)return'';const exd=wd[id]||{};let done=0;for(let i=1;i<=ex.sets;i++){if((exd[i]||{}).done)done++;}return`<div class="dprog-dot${done===ex.sets&&done>0?' done':''}"></div>`;}).join('');}

// ─── CARD TOGGLE ────────────────────────────────────────────
function toggleCard(id){const ec=document.getElementById('ec-'+id);const ti=document.getElementById('ti-'+id);if(!ec)return;const wasExp=ec.classList.contains('expanded');document.querySelectorAll('.exercise-card.expanded').forEach(c=>{c.classList.remove('expanded');const eid=c.id.replace('ec-','');const t=document.getElementById('ti-'+eid);if(t)t.textContent='+';});if(!wasExp){ec.classList.add('expanded');if(ti)ti.textContent='−';loadLog(id);injectGoalBanner(id);setTimeout(()=>renderChart(id),60);}}

// ─── LOG ────────────────────────────────────────────────────
function onInp(e,id,sn,field){e.stopPropagation();const inp=e.target;inp.classList.toggle('filled',inp.value!=='');const wd=getWD(CW);if(!wd[id])wd[id]={};if(!wd[id][sn])wd[id][sn]={};wd[id][sn][field]=inp.value;setWD(CW,wd);updateRing(id);renderChart(id);refreshGoalBanner(id);}
function onDone(e,id,sn){e.stopPropagation();const btn=e.target;btn.classList.toggle('done');btn.textContent=btn.classList.contains('done')?'✓':'○';const wd=getWD(CW);if(!wd[id])wd[id]={};if(!wd[id][sn])wd[id][sn]={};wd[id][sn].done=btn.classList.contains('done');setWD(CW,wd);updateRing(id);updateDayProgress(_curDay);refreshGoalBanner(id);}
function clearLog(e,id){e.stopPropagation();document.getElementById('rows-'+id).querySelectorAll('.set-input').forEach(i=>{i.value='';i.classList.remove('filled');});document.getElementById('rows-'+id).querySelectorAll('.sdone').forEach(b=>{b.classList.remove('done');b.textContent='○';});const wd=getWD(CW);delete wd[id];setWD(CW,wd);updateRing(id);updateDayProgress(_curDay);renderChart(id);refreshGoalBanner(id);}
function loadLog(id){const wd=getWD(CW);const exd=wd[id]||{};const rows=document.getElementById('rows-'+id);if(!rows)return;rows.querySelectorAll('.set-row').forEach(row=>{const sn=row.dataset.set,sd=exd[sn]||{};const wi=row.querySelector('.input-w'),ri=row.querySelector('.input-r'),db=row.querySelector('.sdone');if(wi){wi.value=sd.weight||'';wi.classList.toggle('filled',!!sd.weight);}if(ri){ri.value=sd.reps||'';ri.classList.toggle('filled',!!sd.reps);}if(db){db.classList.toggle('done',!!sd.done);db.textContent=sd.done?'✓':'○';}});const lt=document.getElementById('lt-'+id);if(lt)lt.textContent='TRAININGSLOG — WOCHE '+CW;updateRing(id);}

// ─── WEEK ────────────────────────────────────────────────────
function buildWeekGrid(){const grid=document.getElementById('week-grid');grid.innerHTML='';for(let w=1;w<=12;w++){const wd=getWD(w);const hasData=Object.keys(wd).length>0;const btn=document.createElement('button');btn.className='week-btn'+(w===CW?' active':'')+(hasData?' has-data':'');btn.textContent='W'+w;btn.onclick=()=>{switchWeek(w);closeWeekModal();};grid.appendChild(btn);}}
function openWeekModal(){buildWeekGrid();document.getElementById('week-modal').classList.add('open');}
function closeWeekModal(e){if(!e||e.target===document.getElementById('week-modal'))document.getElementById('week-modal').classList.remove('open');}
function switchWeek(w){CW=w;STATE.week=CW;saveAll();document.getElementById('week-label').textContent='W'+CW;document.querySelectorAll('.exercise-card.expanded').forEach(c=>{const id=c.id.replace('ec-','');loadLog(id);injectGoalBanner(id);renderChart(id);});Object.keys(EX).forEach(id=>updateRing(id));Object.keys(DAY_EX).forEach(d=>updateDayProgress(d));if(_curDay==='stats')renderStats();}
function showDay(day,tab){_curDay=day;document.querySelectorAll('.day-panel').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.dtab').forEach(t=>t.classList.remove('active'));document.getElementById('day-'+day).classList.add('active');if(tab)tab.classList.add('active');document.getElementById('scroll').scrollTop=0;if(day==='stats')renderStats();}

// ─── STATS TAB ──────────────────────────────────────────────
const statsCharts={};
function exVol(id,w){const wd=STATE.data[w]||{};const exd=wd[id]||{};let vol=0,mx=0,doneSets=0;Object.values(exd).forEach(s=>{if(s&&typeof s==='object'){const kg=parseFloat(s.weight)||0,rp=parseFloat(s.reps)||0;vol+=kg*rp;if(kg>mx)mx=kg;if(s.done)doneSets++;}});return{vol,mx,doneSets};}
function dayVol(day,w){return(DAY_EX[day]||[]).reduce((s,id)=>s+exVol(id,w).vol,0);}
function dayCompletedSets(day,w){const wd=STATE.data[w]||{};let done=0,total=0;(DAY_EX[day]||[]).forEach(id=>{const ex=EX[id];if(!ex)return;total+=ex.sets;const exd=wd[id]||{};Object.values(exd).forEach(s=>{if(s&&s.done)done++;});});return{done,total};}
function renderStats(){
  const panel=document.getElementById('day-stats');if(!panel)return;
  Object.values(statsCharts).forEach(c=>{try{c.destroy();}catch(e){}});Object.keys(statsCharts).forEach(k=>delete statsCharts[k]);
  let totalVol=0,totalSets=0,trainedWeeks=new Set();
  Object.entries(STATE.data).forEach(([w,wd])=>{let wHasData=false;Object.keys(wd).forEach(id=>{const exd=wd[id]||{};Object.values(exd).forEach(s=>{if(s&&typeof s==='object'){totalVol+=(parseFloat(s.weight)||0)*(parseFloat(s.reps)||0);if(s.done){totalSets++;wHasData=true;}}});});if(wHasData)trainedWeeks.add(w);});
  let streakHTML='';for(let w=1;w<=12;w++){const wd=STATE.data[w]||{};const has=Object.keys(wd).some(id=>{const exd=wd[id]||{};return Object.values(exd).some(s=>s&&s.done);});streakHTML+=`<div class="streak-day${w===CW?' active':has?' done':''}">${w}</div>`;}
  // Week goal summary card
  let wgoalRows='';
  Object.keys(DAY_EX).forEach(day=>{
    const ids=DAY_EX[day];const meta=DAY_META[day];
    ids.forEach(id=>{
      const ex=EX[id];if(!ex)return;
      const g=getGoal(id,CW);
      const {mx,doneSets}=exVol(id,CW);
      const wd=STATE.data[CW]||{};const exd=wd[id]||{};
      let maxReps=0;for(let s=1;s<=ex.sets;s++){const sd=exd[s]||{};if(sd.done)maxReps=Math.max(maxReps,parseFloat(sd.reps)||0);}
      const kgPct=g.kg>0?Math.min(100,mx/g.kg*100):0;
      const rpPct=g.repsTarget>0?Math.min(100,maxReps/g.repsTarget*100):0;
      const pct=Math.round((kgPct+rpPct)/2);
      const barColor=pct>=100?'var(--green)':pct>=70?'var(--gold)':'var(--muted)';
      const kgLabel=g.kg>0?`${g.kg}kg`:'BW';
      const actualLabel=mx>0?`${mx}kg×${maxReps}`:doneSets>0?'(kein Gewicht)':'—';
      wgoalRows+=`<div class="wgoal-row">
        <div class="wgoal-ex" style="color:${meta.color}">${ex.name}</div>
        <div class="wgoal-bar-wrap"><div class="wgoal-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
        <div class="wgoal-target">${kgLabel}×${g.repsTarget}</div>
        <div class="wgoal-actual" style="color:${pct>=100?'var(--green)':pct>=70?'var(--gold)':'var(--muted)'}">${actualLabel}</div>
      </div>`;
    });
  });
  // Day cards
  let dayCardsHTML='';
  ['mo','mi','fr','so'].forEach(day=>{
    const meta=DAY_META[day];const ids=DAY_EX[day]||[];
    const{done,total}=dayCompletedSets(day,CW);const pct=total>0?Math.round(done/total*100):0;
    const volCW=dayVol(day,CW);
    let bestExName='—',bestExVol2=0;ids.forEach(id=>{const v=exVol(id,CW).vol;if(v>bestExVol2){bestExVol2=v;bestExName=EX[id]?.name||'—';}});
    const wVols=Array.from({length:12},(_,i)=>dayVol(day,i+1));
    const maxWVol=Math.max(...wVols,1);
    const exRowsHTML=ids.map(id=>{
      const ex=EX[id];if(!ex)return'';
      const {vol,mx}=exVol(id,CW);
      const g=getGoal(id,CW);
      const barPct=maxWVol>0?Math.min(100,vol/maxWVol*100):0;
      const wd2=STATE.data[CW]||{};const exd2=wd2[id]||{};
      let maxReps2=0;for(let s=1;s<=ex.sets;s++){const sd=exd2[s]||{};if(sd.done)maxReps2=Math.max(maxReps2,parseFloat(sd.reps)||0);}
      const goalHit=mx>=g.kg&&maxReps2>=g.repsTarget&&mx>0;
      const goalClose=(mx/Math.max(g.kg,1))>=0.8&&(maxReps2/Math.max(g.repsTarget,1))>=0.8&&mx>0;
      const gBadge=mx>0?(goalHit?`<span class="sc-goal-badge sc-gb-hit">✓ Ziel erreicht</span>`:goalClose?`<span class="sc-goal-badge sc-gb-close">~Nah dran</span>`:`<span class="sc-goal-badge sc-gb-open">In Arbeit</span>`):`<span class="sc-goal-badge sc-gb-open">Noch kein Log</span>`;
      const kgLbl=g.kg>0?`${g.kg}kg`:'BW';
      return`<div class="sc-ex-row">
        <div class="sc-ex-row-top">
          <div class="sc-ex-name">${ex.name}</div>
          <div class="sc-ex-kg" style="color:${meta.color}">${mx>0?mx+'kg':'—'}</div>
          <div class="sc-ex-vol">${vol>0?vol.toLocaleString('de')+'kw':'—'}</div>
        </div>
        <div class="sc-ex-bar-wrap"><div class="sc-ex-bar-fill" style="width:${barPct}%;background:${meta.color}"></div></div>
        <div class="sc-goal-row"><div class="sc-goal-icon">🎯</div><div class="sc-goal-text">Ziel: ${kgLbl} × ${g.repsTarget} Wdh</div>${gBadge}</div>
      </div>`;
    }).join('');
    dayCardsHTML+=`<div class="stats-card"><div class="stats-card-head"><div><div class="sc-title ${meta.cls}">${meta.emoji} ${meta.label}</div><div class="sc-meta">${ids.length} Übungen · ${total} Sätze</div></div><div style="text-align:right"><div style="font-family:'Bebas Neue',sans-serif;font-size:26px;color:${meta.color}">${pct}%</div><div style="font-family:'Space Mono',monospace;font-size:8px;color:var(--muted)">${done}/${total} W${CW}</div></div></div><div class="sc-body"><div class="sc-chart-wrap"><canvas id="sc-chart-${day}"></canvas></div><div style="display:flex;gap:6px;margin-bottom:10px"><div class="stat-box" style="flex:1"><div class="stat-box-label">Vol W${CW}</div><div class="stat-val" style="color:${meta.color};font-size:18px">${volCW>0?volCW.toLocaleString('de'):'—'}</div><div class="stat-unit">kg·w</div></div><div class="stat-box" style="flex:1"><div class="stat-box-label">Beste Übung</div><div style="font-family:'Space Mono',monospace;font-size:9px;color:var(--text);margin-top:4px;line-height:1.4">${bestExVol2>0?bestExName:'—'}</div></div><div class="stat-box" style="flex:1"><div class="stat-box-label">Wochen aktiv</div><div class="stat-val" style="color:${meta.color};font-size:18px">${wVols.filter(v=>v>0).length}</div><div class="stat-unit">von 12</div></div></div><div class="sc-ex-list">${exRowsHTML}</div></div></div>`;
  });
  panel.innerHTML=`<div class="day-badge badge-stats">📊 Stats & Ziele — W${CW}</div>
  <div class="stats-kpi-row">
    <div class="kpi-box"><div class="kpi-label">Gesamtvolumen</div><div class="kpi-val">${totalVol>0?(totalVol/1000).toFixed(1):'0'}</div><div class="kpi-unit">Tonnen</div></div>
    <div class="kpi-box"><div class="kpi-label">Sätze ✓</div><div class="kpi-val">${totalSets}</div><div class="kpi-unit">gesamt</div></div>
    <div class="kpi-box"><div class="kpi-label">Wochen aktiv</div><div class="kpi-val">${trainedWeeks.size}</div><div class="kpi-unit">von 12</div></div>
  </div>
  <div class="streak-section-label">Wochen-Streak</div>
  <div class="streak-row">${streakHTML}</div>
  <div class="divider"></div>
  <div class="dp-legend"><div class="dp-legend-title">📈 Double Progression System</div><div class="dp-legend-text"><b>Schritt 1:</b> Wiederholungen bis zur oberen Grenze steigern (z.B. 10→12 Wdh)<br><b>Schritt 2:</b> Wenn obere Grenze erreicht → nächste Woche +2.5 kg, Wdh zurück auf untere Grenze<br><b>Manuell:</b> Ziel jederzeit auf der Übungskarte anpassen ✏️</div></div>
  <div class="wgoal-card"><div class="wgoal-head"><div><div class="wgoal-title">Wochenziele W${CW}</div><div class="wgoal-sub">Ziel vs. Tatsächlich</div></div></div><div class="wgoal-body"><div style="display:grid;grid-template-columns:1fr 40px 80px 80px;gap:4px;margin-bottom:6px"><span style="font-family:Space Mono,monospace;font-size:8px;color:var(--muted)">ÜBUNG</span><span></span><span style="font-family:Space Mono,monospace;font-size:8px;color:var(--gold);text-align:right">ZIEL</span><span style="font-family:Space Mono,monospace;font-size:8px;color:var(--muted);text-align:right">IST</span></div>${wgoalRows}</div></div>
  <div class="divider"></div>
  ${dayCardsHTML}`;
  requestAnimationFrame(()=>{['mo','mi','fr','so'].forEach(day=>{const canvas=document.getElementById('sc-chart-'+day);if(!canvas)return;const meta=DAY_META[day];const wVols=Array.from({length:12},(_,i)=>dayVol(day,i+1));const labels=Array.from({length:12},(_,i)=>'W'+(i+1));const colMap={'var(--red)':'201,76,76','var(--blue)':'76,142,201','var(--green)':'76,201,122','var(--purple)':'155,110,201'};const rgb=colMap[meta.color]||'201,168,76';const ctx=canvas.getContext('2d');statsCharts['sc-'+day]=new Chart(ctx,{type:'bar',data:{labels,datasets:[{data:wVols,backgroundColor:wVols.map((_,i)=>i===CW-1?`rgba(${rgb},.9)`:`rgba(${rgb},.25)`),borderColor:wVols.map((_,i)=>i===CW-1?`rgba(${rgb},1)`:`rgba(${rgb},.4)`),borderWidth:1,borderRadius:3}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:400},plugins:{legend:{display:false},tooltip:{backgroundColor:'#1C1C1C',borderColor:`rgba(${rgb},.4)`,borderWidth:1,titleFont:{family:'Space Mono',size:9},bodyFont:{family:'Space Mono',size:10},titleColor:`rgb(${rgb})`,bodyColor:'#E8E0D0',callbacks:{label:c=>`${c.parsed.y>0?c.parsed.y.toLocaleString('de')+' kg·w':'kein Log'}`}}},scales:{x:{grid:{display:false},ticks:{font:{family:'Space Mono',size:7},color:'#7A7060'}},y:{grid:{color:'rgba(255,255,255,.04)'},ticks:{font:{family:'Space Mono',size:7},color:'#7A7060'},beginAtZero:true}}}});});});}

// ─── MODALS / BACKUP ─────────────────────────────────────────
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500);}
function openBackupModal(){document.getElementById('backup-modal').classList.add('open');document.getElementById('export-ta').style.display='none';document.getElementById('copy-btn').style.display='none';document.getElementById('import-ta').value='';}
function closeBackupModal(e){if(!e||e.target===document.getElementById('backup-modal'))document.getElementById('backup-modal').classList.remove('open');}
function doExport(){const code=btoa(unescape(encodeURIComponent(JSON.stringify(STATE))));const ta=document.getElementById('export-ta');ta.value=code;ta.style.display='block';document.getElementById('copy-btn').style.display='flex';showToast('✅ Backup-Code erstellt!');}
function doCopy(){const ta=document.getElementById('export-ta');ta.select();try{document.execCommand('copy');showToast('📋 Code kopiert!');}catch(e){navigator.clipboard.writeText(ta.value).then(()=>showToast('📋 Code kopiert!'));}}
function doImport(){const ta=document.getElementById('import-ta');const code=ta.value.trim();if(!code){showToast('⚠️ Bitte Code einfügen!');return;}try{const parsed=JSON.parse(decodeURIComponent(escape(atob(code))));STATE=parsed;if(!STATE.goals)STATE.goals={};CW=STATE.week||1;saveAll();document.getElementById('week-label').textContent='W'+CW;Object.keys(EX).forEach(id=>updateRing(id));Object.keys(DAY_EX).forEach(d=>updateDayProgress(d));document.querySelectorAll('.exercise-card.expanded').forEach(c=>{const id=c.id.replace('ec-','');loadLog(id);injectGoalBanner(id);});closeBackupModal();showToast('✅ Daten wiederhergestellt!');}catch(e){showToast('❌ Ungültiger Code!');}}
function runSplash(){const bar=document.getElementById('sbar');setTimeout(()=>bar.style.width='100%',100);setTimeout(()=>{document.getElementById('splash').classList.add('hide');setTimeout(()=>document.getElementById('splash').remove(),600);},1400);}
async function init(){await openDB().catch(()=>{});await initState();Object.keys(EX).forEach(id=>updateRing(id));Object.keys(DAY_EX).forEach(d=>updateDayProgress(d));runSplash();}
init();
</script>

</body>
</html>