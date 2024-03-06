<div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
</div>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- Stripe
- Shadcn
- TailwindCSS
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed on Vercel

To see a fully deployed version of this app visit https://cait.vercel.app and see what you can do there yourself!

## <a name="features">Features</a>

**Secure Login:** Register, log in, and access features with confidence.

**Precision Object Removal:** Clean up images by removing unwanted objects with pinpoint accuracy.

**Effortless Image Restoration** Breathe new life into old or damaged photos with ease.

**Powerful Image Search:** Find images based on content or objects, quickly and precisely.

**User-Friendly Image Gallery:** Explore user-created transformations through intuitive, paginated navigation.

**Seamless Image Completion:** Fill in missing parts of images flawlessly.

**Creative Image Recoloring:** Change object colors easily to customize any image.

**Easy Downloading:** Save and share your AI-powered creations effortlessly.

**Background Extraction:** Isolate objects from their backgrounds with no fuss.

**Transformation History:** View detailed information about each transformation performed.

**Secure Credit Purchases:** Buy credits for uninterrupted use with safe and secure Stripe integration.

**Flexible Credit System:** Earn or purchase credits to unlock image transformations.

**Responsive Design:** Enjoy a smooth experience across all devices with an intuitive interface.

**Transformation Control:** Manage your creations by deleting or editing them as needed.

**Personalized Profile:** Access your transformed images and credit information conveniently



## Install the project dependencies using npm:

```bash
npm run dev
```

## Set Up Environment Variables

Create a new file named `.env.local` in the root of your with following content:

```env
#Clerk 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY

#Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#Clerk Webhook Secret
CLERK_WEBHOOK_SECRET

#MongoDB
MONGODB_URL

#Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

#Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET

#Other
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
