import "./Home.scss"
import Star from "../Star/Star";

function Home() {
  return (
    <section id="Home">
    <Star edges={5} innerR ={40} outerR={90} size={300} isRound={true} />
    </section>
  );
}

export default Home;
