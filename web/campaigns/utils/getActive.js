const BlocksToMarkdown=require('@sanity/block-content-to-markdown')
const groq=require('groq')
const client=require('./sanityClient.js')
const serializers=require('./serializers')

function generate(ea) {
  return {
    ...ea,
    main: BlocksToMarkdown(ea.main.body, { serializers, ...client.config() }),
    // t01: BlocksToMarkdown(ea.teaser01, { serializers, ...client.config() }),
    // t02: BlocksToMarkdown(ea.teaser02, { serializers, ...client.config() }),
    // t03: BlocksToMarkdown(ea.teaser03, { serializers, ...client.config() }),
    // thankyou: BlocksToMarkdown(ea.thankyou.body, { serializers, ...client.config() })
  }
}

async function getActive() {
  const filter=groq`*[_type == "campaign"]` //&& schedual.startDate < now()
  const projection=groq`{
    _id,
    description,
    "oSlug": owner->code.current,
    "sSlug": serviceline->code.current,
    tel,
    main,
    awards,
    map,
    locations[]->,
    "owner": owner-> {
      ...,
      "logo": logo {
        ...,
        asset->
      }
    }
  }`
  const order=`| order(schedual.startDate asc)`
  const query=[filter, projection, order].join(' ')
  const docs=await client.fetch(query).catch(err => console.error(err))
  const activePages=docs.map(generate)
  //console.log(`Page: `+JSON.stringify(activePages))
  //console.log(docs)
  return activePages
}

module.exports=getActive