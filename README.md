![MY4X4 Logo](./readme-dark.png#gh-dark-mode-only)
![MY4X4 Logo](./readme-light.png##gh-light-mode-only)

# MY4X4 - Community Project Directory

MY4X4 is a community page for four wheel drive enthusiasts to post their cars, show off all the parts, help new four wheel drivers research what to buy and communicate, discuss and educate the four wheel drive community.

Follow the instructions below to get it running on your local machine. If you have any questions keep them to yourself.

# Follow the entire process

Live coding the entire MY4X4 Project:

[Build MY4X4 - Youtube Playlist](https://youtube.com/playlist?list=PLCWWDssV3NgwUs9j3B48kCSHEI4fZGHLb)

Subscribe to

[Ken Greeff on Youtube](https://www.youtube.com/channel/UCYlF_e4J0EV3-iAX2Qp1OGA?sub_confirmation=1)

# Getting it started

## Install Homebrew
Launch terminal and run the following command: (Check for latest install code to copy at: [Homebrew.com](https://brew.sh/) )

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


You might need to add brew to a specific path (ARM Processor Macs).

The instructions will be in the install notification or add these commands to terminal.


Replace `[user_name]` in the path string with your system user:

```
echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/[username]/.zprofile

echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/[username]/.zprofile

eval "$(/opt/homebrew/bin/brew shellenv)"
```
---
## Install PostgresQL
Open your terminal and run the comman to install postgres.

```
brew install postgresql

brew services start
```

## Pull Down Repo
Copy URL from github and grab the repo via URL:

[https://github.com/lockedandlifted/my4x4](https://github.com/lockedandlifted/my4x4)

Open terminal cd into your my4x4 local folder eg. ```.../my4x4```

## Create .env file:
Create your own .env file, request the latest .env from another developer.

Make sure to replace the path with your own [user_name] and all client ID/secret data is only to be stored in git ignored files.

**Example:**

```
# When adding additional env variables, the schema in /env/schema.mjs should be updated accordingly

# Auth0
AUTH0_CLIENT_ID=""
AUTH0_CLIENT_SECRET=""
AUTH0_ISSUER="https://my4x4-dev.au.auth0.com"

# Database
DATABASE_URL=""
DATABASE_MIGRATION_URL="postgresql://[user_name]]@localhost:5432/my4x4?connection_limit=1"

# Next Auth
# You can generate the secret via 'openssl rand -base64 32' on Linux
# More info: https://next-auth.js.org/configuration/options#secret
NEXTAUTH_SECRET=""
NEXTAUTH_URL="http://localhost:3001"

NODE_ENV="development"
```

## Install Packages
Relevant packages will install for the project.
```
npm install
```

## Create Database
This will use prisma to create a local database.
```
npx prisma db push
```
## Seed Database
Get existing seed data into your database.
```
npx prisma db seed
```
## Run Prisma Studio
```
npx prisma studio
```

# Start Server
Try opening the browser to the defined localhost URL. E.g.
```
npm run dev
```

# Test its running...
Open Browser and go to the relevant localhost path.

[http://localhost:3001](http://localhost:3001)

## To test authentication and logged in screens:
You'll need to have Ngrok installed (to install globally include the '-g' command.
```
npm install -g ngrok
```

Run Ngrok on the local host port you're using
```
ngrok http 3001
```

---

## Additional Details

If you are not familiar with the different technologies used in this project, please refer to the respective docs or ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [tRPC](https://trpc.io)
- [Chakra UI](https://chakra-ui.com/)
## Learn More

To learn more about the [Locked and Lifted](https://my4x4.info), wait till we write some docs. Or look at the notion.

## How do I deploy this?

Follow our deployment guides for [Vercel]().

# Tamagui + Solito + Next + Expo Monorepo

```sh
npm create tamagui
```

## 🔦 About

This monorepo is a starter for an Expo + Next.js + Tamagui + Solito app.

Many thanks to [@FernandoTheRojo](https://twitter.com/fernandotherojo) for the Solito starter monorepo which this was forked from. Check out his [talk about using expo + next together at Next.js Conf 2021](https://www.youtube.com/watch?v=0lnbdRweJtA).

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [solito](https://solito.dev) for cross-platform navigation
- Expo SDK
- Next.js
- Expo Router

## 🗂 Folder layout

The main apps are:

- `expo` (native)
- `next` (web)

- `packages` shared packages across apps
  - `ui` includes your custom UI kit that will be optimized by Tamagui
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`

To run with optimizer on in dev mode (just for testing, it's faster to leave it off): `yarn web:extract`. To build for production `yarn web:prod`.

To see debug output to verify the compiler, add `// debug` as a comment to the top of any file.

- Expo local dev: `yarn native`

## UI Kit

Note we're following the [design systems guide](https://tamagui.dev/docs/guides/design-systems) and creating our own package for components.

See `packages/ui` named `@my/ui` for how this works.

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `expo`:

```sh
cd apps/expo
yarn add react-native-reanimated
cd ..
yarn
```

## Update new dependencies

### Pure JS dependencies

```sh
yarn upgrade-interactive
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

You may potentially want to have the native module transpiled for the next app. If you get error messages with `Cannot use import statement outside a module`, you may need to use `transpilePackages` in your `next.config.js` and add the module to the array there.

### Deploying to Vercel

- Root: `apps/next`
- Install command to be `yarn set version berry && yarn install`
- Build command: leave default setting
- Output dir: leave default setting
