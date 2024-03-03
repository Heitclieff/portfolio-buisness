import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component , pageProps }: any) {
  const getLayout :any = Component.getLayout || ((page : any) => page)
    
  return( 
        getLayout(
            <Component {...pageProps} />
        )
  )
}
