import "./Home.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <center>
        <h1>בית</h1>
      </center>
      <center>
        <div id="background" dir="rtl">
          <h3>ברוכים הבאים לעמוד הבית של ניטים!</h3>
          <p>ניתן לבצע פה <Link to="/scouting">סקאוטינג</Link> <Link to="/chat"> ותקשורת עם היציע/פיט</Link></p>
        </div>
      </center>
    </div>
  );
}


export default Home;