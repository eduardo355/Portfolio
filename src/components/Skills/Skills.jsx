import IconJS from "../Icons/IconJS";
import Php from "../Icons/Php";
import Html from "../Icons/Html";
import Css from "../Icons/Css";
import ReactIcon from "../Icons/React";
import ReactNativeIcon from "../Icons/React_Native";
import { ActiveDark } from "../store/DarkMode";

const Skills = () => {
    const { stateDark } = ActiveDark((state) => ({
        stateDark: state.stateDark
    }));

    const sectionStyles = {
        padding: "20px",
        backgroundColor: stateDark ? "black" : "transparent",
        color: stateDark ? "white" : "black",
    };

    const iconsContainerStyles = {
        display: "flex",
        flexWrap: "wrap",
        gap: "3rem",
        padding: "1rem",
        justifyContent: "center",
    };

    return (
        <section id="skills" style={sectionStyles}>
        <br />
        <br />
        <br />
        <br />
        <h2>Habilidades</h2>
        <div className="icons" style={iconsContainerStyles}>
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
