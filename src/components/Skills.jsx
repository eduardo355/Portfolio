import IconJS from "./Icons/IconJS"
import Php from "./Icons/Php"
import Html from "./Icons/Html"
import Css from "./Icons/Css"
import React from "./Icons/React"
import React_Native from "./Icons/React_Native"
import './Skill.css'
const Skills = () => {
    return (
        <section id="skills">
            <br /><br />
            <h2>Habilidades</h2>
            <div className="icons">
                <Html />
                <Css />
                <IconJS />
                <React />
                <React_Native />
                <Php />
            </div>
        </section>
    )
}



export default Skills