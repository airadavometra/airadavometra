import {at, defineMigration, set} from 'sanity/migrate'

type ImageValue = {_type: 'image'; asset?: {_ref: string}; [key: string]: unknown}
type Project = {_key: string; image?: ImageValue; screenshots?: unknown[]}

// Copies each project's single `image` into the new `screenshots` list as the
// cover. `image` itself stays until the site reads `screenshots`, so the live
// page keeps its covers in the meantime. Projects that already have
// screenshots are skipped, so it's safe to run again.
export default defineMigration({
  title: 'Copy project images into screenshots',
  documentTypes: ['homePage'],

  migrate: {
    document(doc) {
      const projects = (doc.projects ?? []) as Project[]

      return projects
        .filter((project) => project.image?.asset && !project.screenshots?.length)
        .map((project) =>
          at(
            ['projects', {_key: project._key}, 'screenshots'],
            set([{...project.image, _key: Math.random().toString(36).slice(2, 14)}]),
          ),
        )
    },
  },
})
