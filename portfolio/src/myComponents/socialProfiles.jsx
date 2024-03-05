import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./socialProfiles.css"

export default function socialProfiles() {
  return (
    <div className='socialProfiles'>
        <a href = "https://github.com/Amritanshu-Dash" target = "_blank"><VscGithub/></a>
        <a href = "https://www.linkedin.com/in/amritanshu-dash-0864951aa/" target = "_blank"><FaLinkedin/></a>
        <a href = "https://leetcode.com/auv_2077/" target = "_blank"><SiLeetcode/></a>
    </div>
  )
}
