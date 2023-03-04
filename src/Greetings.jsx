import Invitation from "./Invitation";

function Starter(){
    return (
    <p>Starting By The Name Of Almighty ALLAH....</p>
    );
}
const Greetings = function (){
    return(
        <div>
            <h3>"Assalamu Alaikum"</h3>
            <h4>Welcome to my personal site!</h4>
        </div>
    );
}
const Introduction = () => {
    return(
        <div>
            <h4>Thanks for visiting my site</h4>
            <Invitation/>
        </div>
    );
}

export {Starter, Greetings, Introduction};