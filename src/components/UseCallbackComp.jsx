import React from 'react'
import { useCallback, useState } from 'react'
import SkillList from './SkillList'

const UseCallbackComp = () => {
  const [skill, setSkill] = useState('')
  const [skills, setSkills] = useState(['HTML', 'CSS', 'Javascript'])

  const addSkill = useCallback(() => {
    if (skill.trim() && !skills.includes(skill.trim())) {
      setSkills([...skills, skill.trim()])
    }
    setSkill('')
  }, [skill, skills])

  const deleteSkill = useCallback(
    (index) => {
      const afterDeletion = skills.filter((_, idx) => idx !== index)
      setSkills(afterDeletion)
    },
    [skills]
  )

  return (
    <>
      <h1 id='heading'>Skill Manager</h1>
      <input
        id='skill-input'
        type='text'
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder='Enter a skill'
      />
      <button id='skill-add-btn' onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} deleteSkill={deleteSkill} />
    </>
  )
}

export default UseCallbackComp
