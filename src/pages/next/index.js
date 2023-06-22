import Forside from "../firstPage/forside"
import Butikker from "../firstPage/butikker"
import Vejledning from "../firstPage/vejledning"
import Om from "../firstPage/om"
import Kontakt from "../firstPage/kontakt"
import System from "../firstPage/system"
import Nav from "../nav"
import Head from "next/head"
import {useRef, useEffect, useState} from "react"

export default () => {
  const [omActive, setOmActive] = useState(false)
  const [butikActive, setButikActive] = useState(false)
  const [vejledActive, setVejledActive] = useState(false)
  const [systemActive, setSystemActive] = useState(false)
  const [kontaktActive, setKontaktActive] = useState(false)

  return (
    <>
      <Head>
        <title>Mitloppesalg</title>
        <link rel="apple-touch-icon" size="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/x-icon" size="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/x-icon" size="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Nav om={omActive} butik={butikActive} vejled={vejledActive} system={systemActive} kontakt={kontaktActive} />
      <Forside />
      <Om set={setOmActive} />
      <Butikker set={setButikActive} />
      <Vejledning set={setVejledActive} />
      <System set={setSystemActive} />
      <Kontakt set={setKontaktActive} />
    </>
  )
}