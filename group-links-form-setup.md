# "Add a group link" Google Form — fields & settings

Create a second Google Form (forms.google.com) titled **"Kassel Internationals — Add a group link"**.
This is the self-service form: **you** use it first to seed links for groups you've created, and **students**
use the exact same form when they've made a group for a country/program/dorm that doesn't have a link yet.
The app reads its response Sheet live and shows whichever link was submitted most recently for each group.

## Fields

1. **Which group is this link for?** — Dropdown — *required* — **paste the option list below exactly.**
2. **WhatsApp invite link** — Short answer — *required* — response validation: "Text → Contains" → `https://chat.whatsapp.com/`. Hint text: "Group info → Invite via link → Copy".
3. **Your name / nickname** *(optional)* — Short answer — just for your own accountability if something looks off; not shown in the app.
4. **Consent** — Checkboxes — *required* — one option:
   ☑️ *"I made this WhatsApp group myself (or have permission to share its invite link), and I understand this link will be visible to other students in the app."*

### Option list for question 1 (paste in, one per line)

Keep this **in sync with `GROUPS` in `config.js`** — same text, same emoji, same spelling. The app splits each
option on the first `" — "` to know the category, then matches the rest against `config.js` exactly. Catch-all
entries ("Other", "Still looking") are left out here — a link doesn't make sense for those.

```
Country — Egypt 🇪🇬
Country — Bangladesh 🇧🇩
Country — India 🇮🇳
Country — Pakistan 🇵🇰
Country — Nigeria 🇳🇬
Country — Syria 🇸🇾
Country — Turkey 🇹🇷
Country — Iran 🇮🇷
Country — China 🇨🇳
Program — Electrical Communication Eng. (ECE)
Program — Electrical Engineering / EECS
Program — Computer Science
Program — Agricultural Engineering
Program — Mechanical Engineering
Program — Civil / Environmental Eng.
Program — Economics / Business
Dorm — Adolfstraße 2 (Studierendenwerk)
Dorm — Ludwig-Mohr-Straße
Dorm — Kohlenstraße 105
Dorm — Wolfhager Straße 12
Dorm — Mönchebergstraße (Europahaus)
Dorm — Private flat / WG
```

(In the dropdown question's option editor, paste multiple lines into the last "Option" field — Google Forms
splits them into separate options automatically.)

**Whenever you add a new country/program/dorm to `config.js`**, add one matching line here too (see
README.md → "Admin cheatsheet").

## Settings

- **Responses → Link to Sheets** → creates the response spreadsheet automatically.
- Open that Sheet → **Share → Anyone with the link → Viewer**. This is required — the app fetches it read-only
  at page load; it never needs edit access.
- Paste the **Form's** share link into `LINKS.addGroupForm` in `config.js`.
- Paste the **Sheet's** share link into `LINKS.groupLinksSheet` in `config.js` (the app extracts the sheet ID
  from it — any normal `docs.google.com/spreadsheets/d/...` share link works, no need to "publish to web").
- Do **not** rename the "Which group is this link for?" or "WhatsApp invite link" question text — the app finds
  the right columns by matching on "which group" / "link" (case-insensitive) in the header text, so keep those
  two phrases in the question wording even if you tweak the rest.

## How correction works

If a submitted link is wrong, dead, or spam: either submit the form again with the right link (the **newest**
valid submission for a group is what the app shows — no need to touch the Sheet), or open the Sheet and edit
the row directly since you own it. There's no delete needed for a bad row — a newer correct submission simply
overrides it in the app.
