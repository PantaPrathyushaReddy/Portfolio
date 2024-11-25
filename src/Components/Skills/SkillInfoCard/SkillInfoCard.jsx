import React from 'react'
import "./SkillInfoCard.css"

const SkillsInfoCard = ({heading, skills, darkMode}) => {
  return (
    <div className='skills-info-card'>
        <h6>{heading}</h6>

        <div className='skills-info-content'>
            {skills.map((item,index)=>(
                <React.Fragment key={`skill_${index}`}>
                    <div className='skill-info'>
                        <p>{item.skill}</p>
                        {/* <p className='percentage'>{item.percentage}</p> */}
                    </div>
                    
                    <div className='skill-progress-bg'>
                        <div className='skill-progress' style={{width: item.percentage, background : darkMode ? '#d8d8d8' : 'linear-gradient(90deg, #aa94fe -50%, #7d60e6 50%)'}}/>
                        </div>
                        </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SkillsInfoCard