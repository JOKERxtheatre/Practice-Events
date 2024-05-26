interface Props {
  Title: string;
  subtitle: string;
}
import Typewriter from "typewriter-effect";
function Title({ Title, subtitle }: Props) {
  return (
    <div
      className="Title bg-gradient-to-r from-[#fff] via-red-600  to-[#fff] w-96 flex flex-col items-center justify-center rounded-lg mt-5 max-[426px]:w-52"
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <h1
        className="title text-white font-semibold text-2xl max-[426px]:text-xl"
        data-aos="flip-down"
        data-aos-duration="1000"
      >
        {Title}
      </h1>
      <br />
      <h2
        className="subtitle text-orange-100 max-[426px]:text-sm"
        data-aos="flip-down"
        data-aos-duration="1000"
      >
        <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Assalomu alaykum")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(`${subtitle}`)
                        .start();
                }}
            />
      </h2>
    </div>
  );
}

export default Title;
