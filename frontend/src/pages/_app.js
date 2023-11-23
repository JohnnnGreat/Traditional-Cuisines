import "@/styles/globals.css";
import "@/styles/auth.scss";
import "@/styles/utils.scss";
import "@/styles/profile.scss";
import "@/styles/index.scss";
import "@/styles/admin.scss";

import Header from "@/layout/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
