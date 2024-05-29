# Building a Realtime Chat App with Next.js, Ably, and Vercel

Live example at: <https://next-js-chat-app.vercel.app>

Step by step guide at: <https://ably.com/blog/realtime-chat-app-nextjs-vercel>

This is a demo chat application with [Next.js](https://nextjs.org/) using [Ably](https://ably.com) as the messaging platform.

## Description

It demonstrates the use of:

- Pub/sub messaging
- Ably's React Hooks
- Token authentication with Ably

## Tech stack

The project uses the following components:

- [Next.js](https://nextjs.org/) is a React framework from [Vercel](https://vercel.com/). It is used to build static web applications with server side rendering, serverless functions and seamless hosting. It's a framework that takes the React knowledge you already have, and puts some structure and conventions in place.

- [Ably](https://ably.com/) is realtime, pub/sub messaging platform with a suite of integrated services to deliver complete realtime functionality directly to end-users.

- [Vercel](https://vercel.com/) is a hosting platform, built from the ground up to host Next.js apps, and Serverless Functions with them.

- [React](https://reactjs.org/) is a JavaScript library for building user interfaces with encapsulated components that manage their own state.

## What are we going to build?

![The UI of the chat app we'll build. It is a window with speech bubbles for text.](https://cdn.glitch.com/0cb30add-c9ef-4c00-983c-e12deb0d4080%2Fchatapp.png?v=1612279601157)  
*The UI of the app we'll build with this walkthrough*  

We'll build a realtime chat app that runs in the browser. It will be built upon the Next.js [create-next-app](https://nextjs.org/docs/api-reference/create-next-app) template, it will contain a React component which will use Ably to send and receive messages. We'll also write a Next.js serverless function which will be used to connect to Ably.

## Building & running locally

### Prerequisites

In order to build and deploy this app, you will need:

- **An Ably account** for sending messages: [Create an account with Ably for free](https://ably.com/signup).
- **A Vercel Account** for hosting on production: [Create an account with Vercel for free](https://vercel.com/signup).
- **Node 16** or greater: [Install Node](https://nodejs.org/en/).

You'll also need an API key from Ably to authenticate with the Ably Service. To get an API key, once you have [created an Ably account](https://ably.com/signup):

1. Visit your [app dashboard](https://ably.com/accounts/any) and click on "Create new app".
2. Give the new app a name.
3. Copy the Private API key once the app has been created. Keep it safe, this is how you will authenticate with the Ably service.

### Building the project

1. To run this project locally, fork this repo and create a file called `.env` in the root of the project containing your Ably API key:

```sh
ABLY_API_KEY=your-ably-api-key:goes-here
```

2. Run `npm install`.
3. Run `npm run dev`.

The Next.js dev server will spin up and you'll see a demo chat application.

## Hosting on Vercel

We're using `Vercel` as our development server and build pipeline.

> The easiest way to deploy Next.js to production is to use the Vercel platform from the creators of Next.js. Vercel is an all-in-one platform with Global CDN supporting static & Jamstack deployment and Serverless Functions.
<cite>-- [The Next.js documentation](https://nextjs.org/docs/deployment)</cive>

In order to deploy your new chat app to Vercel you'll need to:

1. Create a [GitHub account](https://github.com/) (if you don't already have one)
2. [Push your app to a GitHub repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
3. [Create a Vercel account](https://vercel.com/signup)
4. Create a new Vercel app and import your app from your GitHub repository. (This will require you to authorise Vercel to use your GitHub account)
5. Add your `ABLY_API_KEY` as an environment variable
6. Watch your app deploy
7. Visit the newly created URL in your browser!

## Make it your own

There are a few ways that this example could be extended:

### Add message history

There is currently no chat history in this demo, you'll only see messages that come in after you join the chat. You could expand this demo by using [Ably's rewind feature](https://ably.com/docs/storage-history/history) for up to two minutes of history for free, or with a paid account, for up to ~48 hours.

### Add user names

There aren't any usernames sent with the chat messages. This demo could be extended to introduce a username input box, and to add the current username to messages as they're sent.

The demo uses the randomly generated Ably client Id as a unique identifier - which is how it can detect if it is "me" or "someone else" who sent the message.

## More info

- [Join our Discord server](https://discord.gg/q89gDHZcBK)
- [Follow us on Twitter](https://twitter.com/ablyrealtime)
- [Use our SDKs](https://github.com/ably/)
- [Visit our website](https://ably.com)

---
[![Ably logo](https://static.ably.dev/badge-black.svg?ably-next-vercel-news)](https://ably.com)
