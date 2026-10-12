import {at, defineMigration, unset} from 'sanity/migrate'

type Project = {_key: string; image?: unknown; screenshots?: unknown[]}

// Removes each project's old `image` once the site reads `screenshots`
// (see the project-screenshots migration). Only touches projects that have
// screenshots, so a cover can't be lost. Safe to run again.
export default defineMigration({
  title: 'Remove the old project image field',
  documentTypes: ['homePage'],

  migrate: {
    document(doc) {
      const projects = (doc.projects ?? []) as Project[]

      return projects
        .filter((project) => project.image !== undefined && project.screenshots?.length)
        .map((project) => at(['projects', {_key: project._key}, 'image'], unset()))
    },
  },
})
