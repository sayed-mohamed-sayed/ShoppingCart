import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import store from "../redux/store"
import Layout from '../../compontes/layout'
export default function App({ Component, pageProps }) {
  
  return(
    <>
<SessionProvider session={pageProps.session}>
  <Provider store={store}>
<Layout>

      <Component {...pageProps}/>
</Layout>
  </Provider>
    </SessionProvider>
    </>
  )
}
