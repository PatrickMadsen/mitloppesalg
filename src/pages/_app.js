import "bootstrap/dist/css/bootstrap.min.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import '@/styles/globals.css'
import { useEffect } from "react"



export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])
  return <Component {...pageProps} />
}