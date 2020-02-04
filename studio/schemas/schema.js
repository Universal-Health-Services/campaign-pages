// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import analytics from './documents/analytics'
import award from './documents/award'
import campaign from './documents/campaign'
import contact from './documents/contact'
import owner from './documents/owner'
import service from './documents/service'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import contactReference from './objects/contactReference'
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
    contact,
    owner,
    service,
    bodyPortableText,
    contactReference,
    mainImage
  ])
})
