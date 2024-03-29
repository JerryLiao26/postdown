/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import LoginFrame from "../islands/LoginFrame.tsx";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="pd-page pd-page-centered">
        <h2>Sign in to Postdown</h2>
        <LoginFrame mode="login" />
      </div>
    </>
  );
}
