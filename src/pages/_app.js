import Layout from '@/components/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <html>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </html>
  )

}
