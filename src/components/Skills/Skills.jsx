import IconJS from "../Icons/IconJS";
import Php from "../Icons/Php";
import Html from "../Icons/Html";
import Css from "../Icons/Css";
import ReactIcon from "../Icons/React";
import ReactNativeIcon from "../Icons/React_Native";


const Skills = () => {

    return (
        <section id="skills" className=" p-5">
        <br />
        <br />
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Habilidades</h2>
        <div className=" flex flex-wrap gap-10 p-3 justify-center" >
            <Html  />
            <Css  />
            <IconJS  />
            <ReactIcon  />
            <ReactNativeIcon  />
            <Php />
        </div>
        </section>
    );
};

export default Skills;
