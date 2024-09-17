import type { AppProps } from "next/app";
import Principal from "@/components/layouts/Principal";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Principal>
      <Component {...pageProps} />
    </Principal>
  );
}

export default MyApp;
