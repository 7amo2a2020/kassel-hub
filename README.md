# Kassel Internationals — Connect & Arrive

> **Status:** built and hosted on GitHub Pages → `https://7amo2a2020.github.io/kassel-hub/` (repo: [7amo2a2020/kassel-hub](https://github.com/7amo2a2020/kassel-hub)). Still running on demo/placeholder links until the setup steps below are done.

A tiny, student-made web helper for **new international students at the University of Kassel**.
It solves two real problems that get lost in the WhatsApp group:

1. **"Who's like me?"** — people keep asking *"anyone from Bangladesh?"*, *"anyone in Agricultural Engineering?"*, *"anyone in shared room X?"* and the messages vanish.
2. **"How do I even get to Kassel?"** — which airport, which train.

## What it does

- **Find your groups** — the student picks their **Country**, **Study program**, and **Dorm/area**, and instantly gets the right **WhatsApp group join buttons** (auto-routing by all three at once — something Google Forms can't do cleanly). A search box filters the three lists as you type, and your last picks are remembered on your next visit.
- **Self-service missing groups** — if a group doesn't exist yet, the student sees two buttons: **"✋ Request a group"** (flags it for the admin) and **"➕ Add link"** (already made the group themselves? they submit its invite link directly — no waiting on the admin). Both the admin and students use the exact same "Add a group link" form; the admin just gets there first.
- **Be findable** — an **"Add me"** button opens a Google Form; responses land in a public Google Sheet that anyone can browse/filter (this is the searchable people-directory).
- **Get to Kassel** — a travel tab: the easy Frankfurt→ICE→Kassel route, which airport to fly into, ticket tips, and a "from your country" example.

## How it's built (important)

- **Two files: `index.html` + `config.js`.** Vanilla HTML/CSS/JS, **no backend, no build step, no dependencies.**
- The **group category lists and travel info are static data**, edited in `config.js` → a plain static page is enough and trivial to host.
- The **people-directory** and the **"Add a group link" submissions** both need storage → both are handled by **Google Forms + Google Sheets** (free, no server). The "Add a group link" Sheet is read **live** (via its `gviz` JSON endpoint) at page-load time and merged over the `config.js` defaults — see `group-links-form-setup.md`. The page just links to the "Add me" form/Sheet.
- Everything editable lives in **`config.js`** (`LINKS`, `GROUPS`, `TRAVEL`).
- This live-fetch only works when self-hosted (GitHub Pages / Netlify / Cloudflare) — a Claude Artifact copy can't make outbound network calls, so it would only ever show the `config.js`-seeded links, not live submissions.

## Setup (do this once)

1. **Get the group admin/coordinator's OK** first (see `coordinator-message.md`). Show them this page as a demo.
2. **Create the base WhatsApp groups** — start small: your top ~5 nationalities, the main study programs, and each dorm. Don't make 50 groups on day one; add more on demand.
3. For **each** group: `Group info → Invite via link → Copy link`, and paste it next to that group's name in `GROUPS` (in `config.js`). Leave `""` for groups you haven't made yet.
4. **Create the "Add me" Google Form** using `google-form-setup.md`. It auto-creates a linked Sheet — set the Sheet to *"Anyone with the link can view"*. Paste the Form + Sheet URLs into `LINKS` in `config.js`.
5. **Create the "Add a group link" Google Form** using `group-links-form-setup.md` — this is what lets students (and you) self-serve links for groups that don't have one yet. Paste its Form URL and its response-Sheet URL into `LINKS.addGroupForm` / `LINKS.groupLinksSheet` in `config.js`. Fill it in yourself first for every group you already made — same form, same mechanism students use for gaps.
6. **Publish** (see below) and **pin the link** in the group with the text in `announcement.md`.

## Hosting options (pick one, all free)

- **GitHub Pages** ← **using this one.** Push `index.html` + `config.js` to a repo, enable Pages in repo Settings. Needed for the live "Add a group link" self-service to actually work (see above).
- **Netlify Drop** — drag the folder onto https://app.netlify.com/drop → instant public link. Also works for the live self-service (any real host does).
- **Cloudflare Pages / Vercel** — connect the repo.
- **Claude Artifact** — instant demo link, good for showing the coordinator early, but static: it won't reflect live "Add a group link" submissions (see above). Ask Claude to (re-)publish it whenever you want a fresh snapshot.

## Privacy rules (keep these)

- **Opt-in only**, and collect the **minimum**: name/nickname, country, program, dorm/room, arrival month, one optional contact handle.
- **Never** collect passport, national ID, full home address, or date of birth.
- Groups are **join-by-link** so nobody's phone number is collected and nobody is added without consent.
- State clearly that it's **student-made (not official)**, visible to other students, and **removable on request**.
- Small, voluntary, EU/GDPR-friendly by staying minimal — don't reuse the data for anything else.

---

## ✅ Tasks for Claude Code — done

1. ~~Wire real data~~ → **done**, split into `config.js`.
2. ~~Add localStorage~~ → **done**.
3. ~~Add a search box~~ → **done**.
4. ~~Graceful empty states~~ → **superseded**: every empty slot now gets two actionable buttons (Request / Add link — self-service, see above) instead of just a message.
5. ~~Copy-link fallback~~ → **done**, next to every "Join" button.
6. **Admin cheatsheet** → see below.
7. ~~Accessibility pass~~ → **done** (`aria-live` on results, `aria-label` on icon-only buttons, visible focus rings, labels already tied to inputs).
8. ~~Dependency-free & self-hostable~~ → **still true.** No backend, no build step, no framework, no tracking. The live-fetch to the group-links Sheet is a plain `fetch()` to a public Google endpoint, nothing else.

### Nice-to-have (not done — skipped for now, easy follow-ups)
- A language toggle (English / Arabic) for the UI strings.
- A "📍 On arrival" checklist card (city registration *Anmeldung*, bank account, SIM, enrolment) on the travel tab.
- Pull the dorm list from the current Studierendenwerk residences.

## Admin cheatsheet

- **Add a new country / program / dorm:** open `config.js`, add one line to `GROUPS.<type>`, e.g. `"France 🇫🇷": "",`. Leave the link empty — fill it via the "Add a group link" form yourself, or wait for a student to.
- **Keep the "Add a group link" form's dropdown in sync:** whenever you add a new entry to `GROUPS` in `config.js`, also add the matching option (`Country — France 🇫🇷`) to that form's single dropdown — see `group-links-form-setup.md`. The app matches submissions to config entries by exact text, emoji included.
- **Fix or replace a bad link:** either submit the "Add a group link" form again (the newest valid submission for a group wins), or edit the response Sheet's row directly — you own it.
- **Set your own initial links fast:** don't hand-edit `config.js` link-by-link — just submit the "Add a group link" form yourself for each group you create. It's the same low-friction path students use.
- **Redeploy after editing `config.js`:** commit + push to the `kassel-hub` GitHub repo (GitHub Pages updates automatically in ~1 minute), or ask Claude to update it for you.

## Files in this bundle
- `index.html` — the working app (structure/behavior only — all editable data lives in `config.js`).
- `config.js` — **the file admins actually edit**: `LINKS`, `GROUPS`, `TRAVEL`.
- `google-form-setup.md` — exact fields & settings for the "Add me" people-directory form.
- `group-links-form-setup.md` — exact fields & settings for the "Add a group link" form (self-service WhatsApp links).
- `travel-to-kassel.md` — the travel content (source for the ✈️ tab; keep in sync).
- `coordinator-message.md` — message to ask the group coordinator for permission.
- `announcement.md` — the pinned message to post in the group once it's live.
