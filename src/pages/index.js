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
      <div className="wrapper">
        <Om />
        <div className="space"></div>
        <Butikker />
        <div className="space"></div>
        <Vejledning />
        <div className="space"></div>
        <System />
        <div className="space"></div>
        <Kontakt />
        <div className="space"></div>
      </div>
    </>
  )
}