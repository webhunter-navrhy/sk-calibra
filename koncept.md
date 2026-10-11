# Koncept – CALIBRA (sk-calibra)

## Tři koncepty
1. **Trasa SK–ČR:** web jako trasa. Úvod začíná dopytom „Odkiaľ → Kam“, uprostřed stránky se při scrollu kreslí cesta z Ľubotíc do ČR (FTL SK–ČR), formulář je pokračování téže trasy.
2. **Technický výkres návěsu:** kóty a razítko výkresu. Zamítnuto: suché a v B2B dopravě to není nic, co zákazník vybírá.
3. **Nákladný list (CMR):** celý web jako přepravní doklad. Zamítnuto: v registru už jsou tři dokumentové weby (revízna správa, spis, protokol) a tohle by bylo čtvrté.

## Výběr
Trasa. Je to řemeslo oboru (jde o přepravu z A do B), má oporu v doložené specializaci FTL SK–ČR a vede přímo k jediné akci, na které firmě záleží: dopyt prepravy. Fotky firmy jsou skutečné (vozový park), takže web nese fotografie, ne ilustrace.

## Skladba
hero (text + foto vozového parku + rychlý dopyt Odkiaľ/Kam) / trasa SK–ČR + o nás / rejstřík přepravovaného zboží s fotkou Scanie / dopyt prepravy (modrý blok) / kontakt a firemní údaje.
Signature moment: cesta Ľubotice → ČR kreslená scrollem (CSS `animation-timeline`, bez JS, s fallbackem na statickou plnou čáru). Druhý: rychlý dopyt v úvodu předvyplní hlavní formulář; klik na druh zboží předvybere typ zboží.

## Písma, paleta, fotky
- Archivo 600/800 (display i text, ověřeno v seznamu testovaných) + IBM Plex Mono jen pro malé štítky. Háčky a čárky kontrolovány v QA.
- Paleta z brandu: modrá #005297 z loga, zelená #356635 jen pro cílový bod trasy, #428bca pro focus; podklad studený papír #f4f7fa, text #0b2238.
- Logo klienta (PNG 173x81 z jejich webu, bílá varianta pro patičku) vlevo v hlavičce. Vektorizace potrace ztratila text „spol. s r.o.“, proto raster.
- Fotky: jejich slide-1 a slide-2 (3658 px a 1898 px, ostré, bez cizích textů), zdroj v brief.json.

## Zakázané vzory
Žádný z tabulky se nepoužívá (bez marquee, zrna, tmavých statistik, 01/02/03, pilulkové navigace).

## Porovnání
Registr: poslední weby (hak-elektro, sps-trans, deteco) mají Schibsted/Young Serif a skladbu „protokol/vzorník/spis“. Tady Archivo, světlý podklad, trasa místo dokumentu, jiná skladba. Z galerie schválených bereme princip „nástroj/akce jako úvod“ (náborový web) a brand z loga.
