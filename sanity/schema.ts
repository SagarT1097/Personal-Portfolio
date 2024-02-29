import { type SchemaTypeDefinition } from 'sanity'

import experience from './schemas/experience'
import pageInfo from './schemas/pageInfo'
import skills from './schemas/skills'
import social from './schemas/social'
import projects from './schemas/projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo,experience, skills, social, projects],
}
