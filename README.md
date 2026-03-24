# Portfolio Website

A modern, accessible, and responsive portfolio built with Next.js 13, featuring a dark theme, smooth animations, contact form with email delivery, and a reader-friendly layout.

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** Resend + React Email
- **Icons:** React Icons

## Features

- **Responsive design** — Works across mobile, tablet, and desktop
- **Dark theme** — Custom palette (navy, slate, cream) with dark/light mode toggle
- **Sections:** Intro, About, Education, Experience, Projects, Skills, Contact
- **Project showcase** — Auto-sliding image/video previews, GitHub & live links
- **Contact form** — Email delivery via Resend + WhatsApp quick contact
- **Accessibility** — Skip link, focus rings, reduced-motion support, readable typography
- **Custom cursor** — Optional (disabled for reduced-motion users)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, theme provider
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Theme vars, utilities, animations
├── components/
│   ├── intro.tsx           # Hero with role typing
│   ├── about.tsx           # Bio, location, tech stack
│   ├── education.tsx       # Education timeline
│   ├── experience.tsx      # Work experience
│   ├── projects.tsx        # Project cards with media slider
│   ├── skills.tsx          # Skills marquee + category filter
│   ├── contact.tsx         # Contact form + WhatsApp
│   ├── header.tsx          # Navigation
│   ├── footer.tsx
│   ├── section-heading.tsx
│   ├── theme-switch.tsx
│   └── custom-cursor.tsx
├── actions/
│   └── sendEmail.ts        # Server action for contact form
├── email/
│   └── contact-form-email.tsx
├── lib/
│   ├── data.ts             # Projects, skills, experience
│   ├── site-config.ts      # Name, links, resume path
│   ├── hooks.ts
│   └── utils.ts
├── context/                # Active section & theme
└── public/                 # Images, resume, assets
```

## Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact Form (Resend)

1. Create a [Resend](https://resend.com) account.
2. Add `RESEND_API_KEY` to `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

3. The contact form sends to the email in `lib/site-config.ts`.

> **Note:** With the default Resend setup, `from` uses `onboarding@resend.dev`. For production, add and verify your own domain in Resend.

## Scripts

| Command      | Description                    |
| ------------ | ------------------------------ |
| `npm run dev` | Start dev server (port 3000)   |
| `npm run build` | Production build              |
| `npm run start` | Start production server       |
| `npm run lint`  | Run ESLint                    |

## Customization

### Personal Info

Edit `lib/site-config.ts`:

- `name`, `role`, `location`
- `email`, `phone`, `whatsappUrl`
- `linkedinUrl`, `githubUrl`, `twitterUrl`
- `resumePath` (file in `public/`)
- `intro` (hero paragraph)

### Projects & Data

- **Projects:** `lib/data.ts` → `projectsData`
- **Experience:** `lib/data.ts` → `experiencesData`
- **Skills:** `lib/data.ts` → `skillsByCategory`
- **Education:** `components/education.tsx` → `educationTimeline` (or move to `lib/data.ts` if preferred)

### Theme Colors

Edit `app/globals.css` (CSS variables):

- `--bg` — Page background
- `--surface` — Cards, nav background
- `--accent` — Buttons, links, highlights
- `--text-primary` — Main text
- `--text-secondary` — Secondary text

## Deployment

Deploy to Vercel, Netlify, or any Node.js host:

1. Push to GitHub.
2. Connect the repo to your deployment provider.
3. Set `RESEND_API_KEY` in the provider’s environment variables.
4. Deploy.

For Vercel:

```bash
npx vercel
```

## License

Private project. All rights reserved.
