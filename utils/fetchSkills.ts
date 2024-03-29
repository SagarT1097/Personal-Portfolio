import { Skill } from "../typings"

export const fetchSkills = async () => {

    const res = await fetch(`http://localhost:3000/api/getSkill`)

    const data = await res.json()
    const skills: Skill[] = data.skills;

    //console.log("fetching", skills)

    return skills;
}