export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed2563387e8c731ec3a8223',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1gvx63e5',
                  apiId: 'c6e2d83f-d5c5-4a0c-b191-ab42b9c285d4'
                },
                {
                  buildHookId: '5ed2563387e8c7093a3a83f6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4wmg4gnw',
                  apiId: '2026d06e-9989-4244-8f37-8405940e402a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/supfiger/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4wmg4gnw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
