# GymBeam - Case Study

![](./public/screenshot_dark.png)

## Local Setup

Install dependencies

```bash
npm install
```

Run the app (in development mode)

```bash
npm run dev
```

Run the app (in production mode)

```bash
npm run build && npm start
```

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Whats and Whys

- Q: Why Next.js?
- A: Shipping less code to the client, SSR, SSG, and more is the way to go these days, especially for SEO friendly sites.


- Q: Why Next.js 13?
- A: The new version is a huge improvement over the "stable" version. Yes, technically in beta, but it's stable enough to be used in production.


- Q: What would be the second pick for the tech stack?
- A: Qwik.JS is truly amazing, as well as REMIX which would probably be my second pick.


- Q: Why Tailwind CSS?
- A: Whenever performance and SSR is a concern, Tailwind CSS is the way to go. ChakraUI would be my second choice, but it results in a larger bundle size. Tailwind is also agnostic to the framework, so it can be used with Next.js, React, Vue, Svelte, etc.   


- Q: What's up with the `routes.ts` file?
- A: Days when people would guess what routes are available and with what parameters, are over. route() function is a fully typed route path "generator" 


- Q: What is `useSyncQS` hook for?
- A: Hook that exposes searchParams as React state and syncs it with the URL whenever we change the state. NextJS re-fetches the data whenever the URL changes.


- Q: Is the page SEO friendly?
- A: Yes, it is. The page is fully SSR and the data is fetched on the server side. 


- Q: What's up with the `zod` library?
- A: Zod is a TypeScript-first schema validation library. It's a great alternative to Joi and Yup and I use it to validate the query params in this case.

- Q: Is there a dark mode?
- A: Yes, there is. It's a system preference based dark mode.

