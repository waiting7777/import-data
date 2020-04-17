// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Import Data',
  siteUrl: 'https://waiting7777.org',
  icon: './src/favicon.png',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePath: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    }
  ]
}
