import './ErrorIndicator.scss';

export default function ErrorIndicator() {
  return(
    <div className="ErrorIndicator">
      {/* <img src='./death_planet.png' alt="error icon"/> */}
      <span className="boom">BOOM!</span>
      <span>Something has gone terribly wrong!</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  )
}