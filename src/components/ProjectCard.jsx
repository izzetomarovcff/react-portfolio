import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"

function ProjectCard(props) {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${props.imgUrl})`, backgroundSize: "cover" }}>
        <div className="cardoverlay overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-50 transition-all duration-500 ">
          <a href={props.gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link" target='_blank'>
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
          <a href={props.previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link" target='_blank'>
          <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{props.title}</h5>
        <p className="text-[#ADB7BE]">{props.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard