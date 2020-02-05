// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import analytics from './documents/analytics'
import award from './documents/award'
import campaign from './documents/campaign'
import location from './documents/location'
import main from './documents/main'
import owner from './documents/owner'
import service from './documents/service'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    analytics,
    award,
    campaign,
    location,
    main,
    owner,
    service,
    bodyPortableText,
    mainImage,
  ])
})
