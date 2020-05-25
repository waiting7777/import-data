// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Import Data',
  siteDescription: 'waiting7777 的部落格，記錄了程式，遊戲，實況等等過程。',
  siteUrl: 'https://waiting7777.org',
  icon: './src/favicon.png',
  templates: {
    Blog: [{
      path: '/blog/:title'
    }],
    Category: [{
      path: '/category/:title',
      component: '~/templates/Category.vue'
    }],
    Author: [{
      path: '/author/:name',
      component: '~/templates/Author.vue'
    }],
    Tag: [{
      path: '/tags/:title',
      component: '~/templates/Tag.vue'
    }]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        path: './content/author/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        refs: {
          author: 'Author',
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-33995800-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/archive': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/category': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/tags': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    }
  ]
}
