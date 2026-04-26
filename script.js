const pronoun = ["the", "our", "we"];
const adj = ["cosmic", "tiny", "brave"];
const noun = ["pirat", "plan", "mov", "cod", "stud", "portfol", "creat"];
const tld = ["com", "net", "io", "es"];
const tldhacks = ["es", "io"];

function pickRandom(items) {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}

function generateClassicDomains() {
    const results = [];
    for (const p of pronoun) {
    for (const a of adj) {
        for (const n of noun) {
        const base = `${p}${a}${n}`.toLowerCase();
        for (const ext of tld) {
            results.push(`${base}.${ext}`);
            }
        }
    }
}
    return results;
}

function generateHackDomains() {
    const results = new Set();
    for (const p of pronoun) {
    for (const a of adj) {
        for (const n of noun) {
        const base = `${p}${a}${n}`.toLowerCase();
        for (const ext of tldhacks) {
            if (base.endsWith(ext)) {
                const name = `${base.slice(0, -ext.length)}.${ext}`;
                results.add(name);
                }
            }
        }
    }
}
    return Array.from(results);
}

window.onload = function () {
    const preview = document.getElementById("domain-preview");
    const btn = document.getElementById("btn-generar");
        function generateAndRender() {
    const classics = generateClassicDomains();
    const hacks = generateHackDomains();
    const all = Array.from(new Set([...classics, ...hacks]));
    preview.textContent = pickRandom(all);
    }
    btn.addEventListener("click", generateAndRender);
};