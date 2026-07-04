import DeveloperAvatar from "../ui/DeveloperAvatar";
import TextReveal from "../ui/TextReveal";
const Landing = () => {
  return (
    <section className="h-[100vh] flex flex-col sm:flex-row justify-between items-center py-[2rem] px-[var(--screen-padding-x)]">
      <div className="flex flex-col">
        <h1 className="relative text-center text-[1.5rem]">
          <div className="relative">
            You are in the presence of
            <TextReveal />
          </div>

          <div className="relative text-[clamp(1.25rem,3.5vw,4.5rem)]  leading-[1.1]">
            Long&nbsp;Phuoc&nbsp;Tran, he&nbsp;— <br /> a software developer
            <TextReveal delay={1} />
          </div>
          <span className="relative">
            — who weaves code into websites of beauty
            <TextReveal delay={2} />
          </span>
        </h1>
        <button className="bg-[var(--cta)] text-[1.5rem] text-white mx-auto my-[1rem] py-[1rem] px-[2rem]">
          Request an audience
        </button>
      </div>
      <DeveloperAvatar />
    </section>
  );
};
export default Landing;
