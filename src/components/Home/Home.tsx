import "./Home.scss"
import Star from "../../UI/Star/Star";

const starGenerator = () =>{

}
function Home() {
  return (
    <section id="Home">
    <Star edges={4} size= {20} is_round={false} color ={'gold'} />
    </section>
  );
}

export default Home;
