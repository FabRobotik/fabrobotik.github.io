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
If your fees change, update the following components:
*   **Courses**: Update the `price` and `dur` (duration) fields in the `Courses` component.
*   **Membership**: Update the `price` and `perks` in the `Membership` component.

### 4. Machine Reservation (EmailJS)
The reservation form is currently a visual prototype. To make it functional, you should integrate [EmailJS](https://www.emailjs.com/):
1. Create an account on EmailJS.
2. Replace the `alert` in the `sendEmail` function (inside the `Reservation` component) with the EmailJS send logic.

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
