import Forside from "./forside"
import Butikker from "./butikker"
import Vejledning from "./vejledning"
import Om from "./om"
import Kontakt from "./kontakt"

export default () => {
  return (
    <div>
      <Forside />
      <Om />
      <hr className="hr hr-blurry" />
      <Butikker />
      <hr className="hr hr-blurry" />
      <Kontakt />
      <hr className="hr hr-blurry" />
      <Vejledning />
    </div>
  )
}