# "Add me" Google Form — fields & settings

Create a Google Form (forms.google.com) titled **"Kassel Internationals — Add me to the directory"**.
Keep it short; only the first two fields are required.

## Fields
1. **Name / Nickname** — Short answer — *required*
2. **Country / Nationality** — Dropdown — *required* — (use the same list as the app's `GROUPS.country`)
3. **Study program** — Dropdown — (same list as `GROUPS.program`; include "Other")
4. **Dorm / Building** — Dropdown — (same list as `GROUPS.dorm`; include "Still looking")
5. **Room number** *(if shared room)* — Short answer — optional
6. **Arrival month** — Dropdown — e.g. *Sep 2026, Oct 2026, Nov 2026, Already here, Not sure*
7. **Contact handle** *(optional)* — Short answer — "WhatsApp / Telegram / Instagram — only if you want to be DM-able"
8. **Don't see your country / program / dorm?** — Short answer — optional (tells you which new groups to create)
9. **Consent** — Checkboxes — *required* — one option:
   ☑️ *"I'm okay with this info being visible to other students in the directory, and I know I can ask to remove it anytime."*

## Settings
- **Responses → Link to Sheets** → creates the directory spreadsheet automatically.
- Open that Sheet → **Share → Anyone with the link → Viewer**. Paste its link into `CONFIG.LINKS.sheet`.
- In the Sheet, add a **Filter view** (Data → Filter views) so people can filter by Country / Program / Dorm without editing.
- Do **not** collect email addresses unless you truly need them (Settings → keep "Collect email" off).
- Paste the Form's share link into `CONFIG.LINKS.form`.

## Optional: a separate "Request a group" form
One question — *"Which group should we create? (country / program / dorm)"* — and paste its link into `CONFIG.LINKS.request`.
(Or just point `request` at a `wa.me/<your-number>` link.)
