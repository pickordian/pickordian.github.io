import Image from "next/image";
interface DisciplinesProps {
    name: string;
    imageUrl: string;
}

const Disciplines = () => {
    const disciplines: DisciplinesProps[] = [{name: "TypeScript", imageUrl: ""},{name: "React", imageUrl: ""},{name: "Shopify", imageUrl: ""},]
  return (
    <section id="Disciplines" className="py-[5rem] px-[4rem]">
        <h2>The Disciplines</h2>
        <ul>
            {disciplines.map((discipline, index) => (
                <li key={index}>
                    <Image src={discipline.imageUrl} alt={discipline.name} width={100} height={100} />
                    <p>{discipline.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}
export default Disciplines;