import Forside from "./forside"
import Butikker from "./butikker"
import Vejledning from "./vejledning"
import Om from "./om"
import Kontakt from "./kontakt"
import System from "./system"

export default () => {
  return (
    <div>
      <Forside />
      <Om />
      <div className="space"></div>
      <Butikker />
      <div className="space"></div>
      <Vejledning />
      <div className="space"></div>
      <System />
      <div className="space"></div>
      <Kontakt />
    </div>
  )
}