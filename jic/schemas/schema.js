import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import home from './home'
import projects from './projects'
import project from './project'
import featured from './featured'
import podcast from './podcast'
import contact from './contact'
import phGrid from './phGrid'
import youtube from './youtube'
import about from './about'

export default createSchema({
name: 'mySchema',
types: schemaTypes.concat([
  project,
  projects,
  phGrid,
  featured,
  home,
  youtube,
  podcast,
  about,
  contact
])
})