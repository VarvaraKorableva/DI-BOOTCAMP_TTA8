import data from '../secondData.json'

function Example2() {

    const skills = data.Skills
    return(
        <>
            {skills.map((item) => (
                <ul>
                <h3>{item.Area}</h3>
                {item.SkillSet.map((itemSkill) => (
                    <li>{itemSkill.Name}</li>
                ))}
                </ul>
            ))
            }
        </>
    )
}

export default Example2;