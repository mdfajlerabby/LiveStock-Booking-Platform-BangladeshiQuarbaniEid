# কুরবানীহাট – QurbaniHat

বাংলাদেশি ক্রেতাদের জন্য তৈরি একটি responsive livestock marketplace। বগুড়া, রাজশাহী, ময়মনসিংহ ও কুষ্টিয়ার খামারের দেশি গরু, শাহীওয়াল, দেশি-ফ্রিজিয়ান এবং ব্ল্যাক বেঙ্গল ছাগল দেখা ও বুক করার সহজ অভিজ্ঞতা এখানে দেওয়া হয়েছে।

## Live URL

ডেপ্লয় করার পর এখানে live URL যোগ করুন: `https://your-qurbanihat-domain.vercel.app`

## GitHub

ডেপ্লয়ের আগে GitHub repository URL যোগ করুন।

## প্রধান ফিচার

- বাংলা-কেন্দ্রিক বাংলাদেশি livestock marketplace UI
- Home page hero, featured animals, Qurbani tips এবং breed information
- All Animals page-এ গরু/ছাগল filter এবং price sorting
- Animal details page-এ full information ও login-protected booking form
- Email/password demo login, registration এবং Google sign-in button
- My Profile ও Update Information feature
- Responsive navbar, footer এবং mobile layout
- Toast-style success/error feedback
- Local browser state-এ demo authentication; কোনো real credential বা secret repository-তে রাখা হয়নি
- `animate.css` দিয়ে entrance animation

## Run locally

```bash
npm install
npm run dev
```

তারপর [http://localhost:3000](http://localhost:3000) খুলুন।

## Build and checks

```bash
npm run lint
npm run build
```

## ব্যবহৃত package

- Next.js 16
- React 19
- Tailwind CSS 4
- animate.css

## নোট

এই assignment version-এ authentication ও booking flow demonstration-এর জন্য browser `localStorage` ব্যবহার করা হয়েছে। Production-এ Better Auth/Firebase ও database যুক্ত করে real user/account management করা যাবে।
