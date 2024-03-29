// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/api/post.tsx";
import * as $3 from "./routes/api/user/login.tsx";
import * as $4 from "./routes/api/user/logout.tsx";
import * as $5 from "./routes/api/user/register.tsx";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/login.tsx";
import * as $8 from "./routes/post/[id].tsx";
import * as $9 from "./routes/register.tsx";
import * as $$0 from "./islands/Editor.tsx";
import * as $$1 from "./islands/HomeBar.tsx";
import * as $$2 from "./islands/LoginFrame.tsx";
import * as $$3 from "./islands/PostList.tsx";
import * as $$4 from "./islands/TopBar.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/api/post.tsx": $2,
    "./routes/api/user/login.tsx": $3,
    "./routes/api/user/logout.tsx": $4,
    "./routes/api/user/register.tsx": $5,
    "./routes/index.tsx": $6,
    "./routes/login.tsx": $7,
    "./routes/post/[id].tsx": $8,
    "./routes/register.tsx": $9,
  },
  islands: {
    "./islands/Editor.tsx": $$0,
    "./islands/HomeBar.tsx": $$1,
    "./islands/LoginFrame.tsx": $$2,
    "./islands/PostList.tsx": $$3,
    "./islands/TopBar.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
