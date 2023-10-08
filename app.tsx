// app.tsx
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  <div className="bg-dark min-h-screen">
      <Component {...pageProps} />
    </div>
}

export default MyApp;
