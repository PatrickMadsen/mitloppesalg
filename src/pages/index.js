import OmOs from "./omOs"
import Butikker from "./butikker"
import Vejledning from "./vejledning"

export default () => {
  return (
    <div className="wrapper">
      <OmOs />
      <div className="mt-5"></div>
      <Butikker />
      <div className="mt-5"></div>
      <Vejledning />
    </div>
  )
}