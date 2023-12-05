import { AppProps } from "next/app";
import { Providers } from "@/providers/providers";
import { AppLayout } from "@/layout";

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => (
  <Providers>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </Providers>
);

export default App;
