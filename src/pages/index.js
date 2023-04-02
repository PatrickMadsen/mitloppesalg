import Forside from "./firstPage/forside"
import Butikker from "./firstPage/butikker"
import Vejledning from "./firstPage/vejledning"
import Om from "./firstPage/om"
import Kontakt from "./firstPage/kontakt"
import System from "./firstPage/system"

export default () => {
  return (
    <>
      <Forside />
      <Om />
      <Butikker />
      <Vejledning />
      <System />
      <Kontakt />
    </>
  )
}