# Identity Studio

A fictional, responsive digital identity onboarding demonstration inspired by the visual structure of supplied mobile references. Original branding, forest green and mint styling, English and Arabic journey screens, and sample data throughout.

This is **not UAE PASS** and is not associated with a government, identity provider, or bank. It does not implement real identity verification or authentication.

## Run

Requires Node.js 20 or newer. No dependencies or installation are needed.

```sh
npm start
```

Open http://127.0.0.1:4175.

```sh
npm test
npm run build
```

## Journey

Welcome → sample profile → simulated face check → sample contact review → built-in sample documents → review → simulated approval → completion.

All content is fictional. No data entry, real uploads, bank/card details, CVVs, passwords, OTPs, camera access, backend, analytics, or external requests. The CSP blocks network connections and form submission. Progress is held only in memory. The privacy dialog explains the demonstration. Arabic translates the journey and main introduction; fictional sample names, the brand, and the explanatory dialog remain in English.

## Deployment

`vercel.json` specifies the static build and security headers. Import this repository into Vercel with **Other** as the framework; the configuration supplies `npm run build` and output directory `dist`. No environment variables are needed. Connect the repository to enable deployment after future pushes.

GitHub Pages can serve the root directly using **Deploy from a branch → main → /(root)**, or the included Actions workflow. GitHub repository creation and Vercel deployment require access to the intended accounts.

## Verification

Node tests cover the complete sample journey, blocked incomplete document progression, Arabic direction changes, back navigation, restart, privacy controls, and the absence of sensitive collection mechanisms. Visual browser verification must be performed when a browser is available.
