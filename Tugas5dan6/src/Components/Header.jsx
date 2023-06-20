import {GiGalaxy} from "react-icons/gi";
import {BiLogIn} from "react-icons/bi";
export default function Header(){
    return (
    <header>
        <div className="logo">
        <div> 
            <GiGalaxy/>
        Tugas React 5 dan 6</div>
      </div>
      <button><BiLogIn />Login</button>
    </header>
    );
}