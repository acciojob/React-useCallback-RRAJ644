import React from 'react';

const SkillList = React.memo(({ skills, deleteSkill }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li
          key={index}
          id={`skill-number-${index}`}
          onClick={() => deleteSkill(index)}
          style={{
            cursor: 'pointer',
            margin: '5px 0',
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
