import React from 'react'
import "./techStack.css"
import { SiSwift } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaUikit } from "react-icons/fa6";
import { SiXcode } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export default function techStack() {
  return (
    <div>
        <div class="container">

          <div class="Content">
            <h4>Languages</h4>
            <p>C/C++<br/>Swift <SiSwift /><br/>Python <SiPython /><br/>JavaScript <SiJavascript /></p>
          </div>

          <div class="vertical-line"></div>

          <div class="Content">
            <h4>Markup/Styling</h4>
            <p>HTML<TiHtml5 /><br/>CSS <FaCss3Alt /></p>
          </div>

          <div class="vertical-line"></div>

          <div class="Content">
          <h4>Frameworks/Libraries</h4>
          <p>React <FaReact /><br/>SwiftUI <SiSwift /><br/>UIKit <FaUikit /></p>
          </div>

          <div class="vertical-line"></div>

          <div class="Content">
            <h4>Development Environments</h4>
            <p>Xcode <SiXcode /><br/>VS Code <TbBrandVscode /></p>
          </div>
        </div> 
    </div>
  )
}
