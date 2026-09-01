# FabRobotik Website

Modern React + Vite + TypeScript website for the **FabRobotik** association.

## 🚀 Deployment

This website is configured to deploy automatically to **GitHub Pages** via GitHub Actions.
1. Ensure your repository is named `fabrobotik.github.io`.
2. Push your changes to the `main` branch.
3. Configure the source to **GitHub Actions** in your repository settings (Settings > Pages).

---

## 🛠️ Customization Guide

To make this website your own, you need to update several placeholder values in the codebase. All major changes happen in `src/App.tsx`.

### 1. Contact Information
Search for these values in `src/App.tsx` and replace them:
*   **Email**: Search for `hello@fabrobotik.fr` in the `Footer` component.
*   **Address**: Search for `12 Ave Innovation` in the `Footer` component.

### 2. Social Media Links
In the `Footer` component (inside `src/App.tsx`), update the `href` attributes for the following icons:
*   Instagram
*   Twitter (X)
*   LinkedIn
*   GitHub (`https://github.com/fabrobotik`)

### 3. Pricing & Membership
Membership fees are **not yet defined** and currently show a placeholder ("Tarif à définir" / "Price to be defined") — see `membership.priceTBD` / `membership.priceNote` in `src/translations.ts`. Once fees are decided:
*   **Courses**: Update the `desc`, `dur`, `level` and `prereq` fields in the `courses.list` array in `src/translations.ts`.
*   **Membership**: Replace `priceTBD` with the real amount(s) in the `Membership` component (`src/App.tsx`) and `membership.plans` in `src/translations.ts`.

### 4. Forms (Formspree)
The **Reservation** (`/reservation`) and **Express Interest** (`/interet`) forms both submit via [Formspree](https://formspree.io/). Configure the endpoint via env var (see `.env` / GitHub Secrets):
*   `VITE_FORMSPREE_URL` — used by both forms by default.
*   `VITE_FORMSPREE_INTEREST_URL` — optional, set this if you want interest submissions routed to a separate Formspree form instead of sharing the reservation one.

---

## 💻 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
