/* =======================================================================
   ⬇️  CONFIG — EDIT ONLY THIS FILE  ⬇️
   HOW: create your WhatsApp groups, then in each group
   (⋮ / group info) → "Invite via link" → Copy, and paste below.
   Leave "" for groups that don't exist yet (users get "Request" / "Add link" buttons).
   Add / remove any country, program, dorm, or airport freely.
   See README.md → "Admin cheatsheet" for the full how-to.
   ======================================================================= */
const LINKS = {
  form:    "https://forms.gle/PASTE_YOUR_FORM",          // "Add me" directory form
  sheet:   "https://docs.google.com/PASTE_YOUR_SHEET",    // "Add me" directory sheet (browse everyone)
  request: "https://forms.gle/PASTE_A_REQUEST_FORM",      // or a wa.me/<number> link to you

  addGroupForm: "https://forms.gle/PASTE_ADD_GROUP_FORM", // "Add a group link" form — anyone can submit a link for an empty slot
  groupLinksSheet: ""   // paste the "Add a group link" form's response-Sheet URL here once created; leave "" until then (feature quietly no-ops)
};

const GROUPS = {
  country: {
    "Egypt 🇪🇬":"https://chat.whatsapp.com/PASTE","Bangladesh 🇧🇩":"https://chat.whatsapp.com/PASTE",
    "India 🇮🇳":"","Pakistan 🇵🇰":"","Nigeria 🇳🇬":"","Syria 🇸🇾":"","Turkey 🇹🇷":"",
    "Iran 🇮🇷":"","China 🇨🇳":"","Other 🌐":""
  },
  program: {
    "Electrical Communication Eng. (ECE)":"https://chat.whatsapp.com/PASTE",
    "Electrical Engineering / EECS":"","Computer Science":"","Agricultural Engineering":"",
    "Mechanical Engineering":"","Civil / Environmental Eng.":"","Economics / Business":"","Other program":""
  },
  dorm: {
    "Adolfstraße 2 (Studierendenwerk)":"","Ludwig-Mohr-Straße":"","Kohlenstraße 105":"",
    "Wolfhager Straße 12":"","Mönchebergstraße (Europahaus)":"","Private flat / WG":"","Still looking":""
  }
};

const TRAVEL = {
  steps: [
    "Land at Frankfurt Airport (FRA). Clear passport control &amp; pick up your baggage.",
    "Follow the signs to <b>Fernbahnhof / Long-distance trains</b> (Terminal 1, a few minutes' walk — it's inside the airport).",
    "Buy an ICE ticket to <b>Kassel-Wilhelmshöhe</b> (DB Navigator app, bahn.de, or a machine).",
    "Board the ICE — about <b>1h35</b>, often direct.",
    "Arrive at <b>Kassel-Wilhelmshöhe</b>, then take <b>tram line 1 or 3</b> into the city / to your accommodation."
  ],
  airports: [
    {name:"Frankfurt (FRA)", info:"Best choice · direct ICE from the airport", time:"~1h35 by ICE"},
    {name:"Hannover (HAJ)",  info:"Good alternative · train via Göttingen/Hann.", time:"~2h by train"},
    {name:"Düsseldorf (DUS)",info:"More flights · longer ride", time:"~2.5–3h by train"},
    {name:"Cologne/Bonn (CGN)",info:"Alternative western hub", time:"~2.5–3h by train"},
    {name:"Berlin (BER) / Munich (MUC)",info:"Only if your fare is much better", time:"~3.5–4.5h by ICE"}
  ],
  tips: [
    "Book early on <b>bahn.de</b> or the <b>DB Navigator</b> app (in English) — a Sparpreis can be ~€18–30 vs ~€60 same-day.",
    "The airport long-distance station is <b>Frankfurt Flughafen Fernbahnhof</b> — make sure your ticket starts there, not Frankfurt Hbf.",
    "Cheaper &amp; slower option: <b>FlixBus</b> to Kassel (~€10–20).",
    "A seat reservation is optional but nice with luggage on a busy ICE."
  ],
  fromHome: "🇪🇬 <b>From Egypt:</b> fly <b>Cairo (CAI) → Frankfurt (FRA)</b> direct (~4.5h, EgyptAir / Lufthansa), then the ICE above to Kassel-Wilhelmshöhe.",
  bring: [
    "Passport + visa",
    "Admission letter + enrolment certificate",
    "Blocked-account / finance &amp; health-insurance proof",
    "Some euros in cash + a card that works abroad",
    "Accommodation address + a printed/offline copy of your route"
  ]
};
/* ===============  END OF CONFIG  =============== */
