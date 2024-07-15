import "./Home.scss"
import Star from "../../UI/Star/Star";

function Home() {
  return (
    <section id="Home">
    <Star edges={5} innerR ={12} outerR={27} size={90} isRound={true} />
    <Star edges={5} innerR ={12} outerR={27} size={90} isRound={true} />
    <Star edges={5} innerR ={12} outerR={27} size={90} isRound={true} />
    <Star edges={5} innerR ={12} outerR={27} size={90} isRound={true} />
    <Star edges={5} innerR ={12} outerR={27} size={90} isRound={true} />
    </section>
  );
}

export default Home;
