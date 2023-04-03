import Forside from "./firstPage/forside"
import Butikker from "./firstPage/butikker"
import Vejledning from "./firstPage/vejledning"
import Om from "./firstPage/om"
import Kontakt from "./firstPage/kontakt"
import System from "./firstPage/system"
import Nav from "./nav"
import {useRef, useEffect, useState} from "react"

export default () => {
  const [omActive, setOmActive] = useState(false)
  const [butikActive, setButikActive] = useState(false)
  const [vejledActive, setVejledActive] = useState(false)
  const [systemActive, setSystemActive] = useState(false)
  const [kontaktActive, setKontaktActive] = useState(false)

  return (
    <>
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