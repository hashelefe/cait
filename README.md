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

**Authentication and Authorization**: Secure user access with registration, login, and route protection.

**Object Removal**: Clean up images by removing unwanted objects with precision

**Image Restoration**: Revive old or damaged images effortlessly

**Advanced Image Search**: Find images by content or objects present inside the image quickly and accurately

**Community Image Showcase**: Explore user transformations with easy navigation using pagination

**Image Generative Fill**: Fill in missing areas of images seamlessly

**Image Recoloring**: Customize images by replacing objects with desired colors easily

**Download Transformed Images**: Save and share AI-transformed images conveniently

**Background Removal**: Extract objects from backgrounds with ease

**Transformed Image Details**: View details of transformations for each image

**Credits Purchase**: Securely buy credits via Stripe for uninterrupted use

**Credits System**: Earn or purchase credits for image transformations

**Responsive UI/UX**: A seamless experience across devices with a user-friendly interface

**Transformation Management**: Control over deletion and updates of transformations

**Profile Page**: Access transformed images and credit information personally



##Install the project dependencies using npm:

```bash
npm run dev
```

##Set Up Environment Variables

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
