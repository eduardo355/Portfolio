import IconJS from '../Icons/IconJS'
import Php from '../Icons/Php'
import Html from '../Icons/Html'
import Css from '../Icons/Css'
import ReactIcon from '../Icons/React'
import ReactNativeIcon from '../Icons/React_Native'
import Ts from '../Icons/Ts'
import Vue from '../Icons/Vue'

const Skills = () => {
  return (
    <section id="skills" className="p-5">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Habilidades</h2>
      <div className="flex flex-wrap gap-10 p-3 justify-center">
        <Html />
        <Css />
        <IconJS />
        <Ts />
        <ReactIcon />
        <ReactNativeIcon />
        <Vue />
        <Php />
      </div>
    </section>
  )
}

export default Skills
