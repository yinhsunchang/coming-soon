import './ComingSoon.css'
import Slideshow from "./components/Slideshow.tsx";
import Typing from "./components/Typing.tsx";
import Countdown from "./components/Countdown.tsx";
import Subscribe from "./components/Subscribe.tsx";

function ComingSoon() {

  return (
  <div className="bgimg display-container animate-opacity">
    <Slideshow />

    <div className="display-topleft padding-large small">
      Home
    </div>
    
    <div className="display-middle glass-box">
      <div className="small margin-top"><Typing /></div>
      <h1 className="xlarge animate-top text-white">COMING SOON</h1>
      <hr className="border-grey" style={{ margin: 'auto', width: '40%' }} />
      <p className="small"><Countdown /></p>
      <div className="margin-bottom"><Subscribe /></div>
    </div>

    <div className="display-bottomleft padding-large">
      Designed & Built by <a href="https://github.com/yinhsunchang" target="_blank">Yin-Hsun Chang</a>
    </div>

  </div>
  );

}

export default ComingSoon
