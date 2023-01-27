import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'
// import ProgressLine from "./ProgressLine";


const Projects = () => {
  const percentage = 86;

  return (
    <div className='pro'>
      <div className="lklk">
        <p className='project_heading'>Some Things I've Built</p>
        </div>

        <div className="parent_project">
            <div className="left_project">
                <img className='project_img_one' src="https://cdn.discordapp.com/attachments/1059104671911919619/1068132349658804244/idr_cover_2.jpg"/>
            </div>
            <div className="right_project">
                
                <h2 className='project_name'>
                  IDR Landing Page
                </h2>
                <p className='about_project'>Terra is an affordable platform tailored for geoinformatics personnel to remotely access domain specific software. Working on Terra's architecture involves a user-end application , an abstratced EC2 server and a user/server management application,along with identity design.</p>
                
                <ul className='tect_used'>
                <FaGithub className='gi'/>
                  <li className='tect_name'>React</li>
                  <li className='tect_name'>Node Js</li>
                  <li className='tect_name'>MongoDB</li>
                  <li className='tect_name'>Express Js</li>

                </ul>

            </div>
        </div>
        <div className="parent_project2">
            <div className="left_project">
                <img className='project_img_two' src="https://cdn.discordapp.com/attachments/1059104671911919619/1068132349658804244/idr_cover_2.jpg"/>
            </div>
            <div className="right_project">
                
                <h2 className='project_name2'>
                  Scholarly
                </h2>
                <p className='about_project2'>Terra is an affordable platform tailored for geoinformatics personnel to remotely access domain specific software. Working on Terra's architecture involves a user-end application , an abstratced EC2 server and a user/server management application,along with identity design.</p>
                
                <ul className='tect_used2'>
                <FaGithub className='gi'/>
                  <li className='tect_name'>React</li>
                  <li className='tect_name'>Node Js</li>
                  <li className='tect_name'>MongoDB</li>
                  <li className='tect_name'>Express Js</li>

                </ul>

            </div>
        </div>
        <div style={{ height: 120, width:130 }}></div>
    </div>
    
  )
}

export default Projects;