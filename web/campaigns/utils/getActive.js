const BlocksToMarkdown=require('@sanity/block-content-to-markdown')
const groq=require('groq')
const client=require('./sanityClient.js')
const serializers=require('./serializers')

function generate(ea) {
  return {
    ...ea,
    // main: BlocksToMarkdown(ea.main.body, { serializers, ...client.config() }),
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
    "owner": owner->name,
    description,
    "oSlug": owner->code.current,
    "sSlug": serviceline->code.current,
    tel,
    awards,
    "logoSrc": owner->logo.asset->url,
    "logoAlt": owner->logo.alt,
    "all": *[ _type == "contact" ], // && references(owner->contact) // && _id == owner->contact ]
    "locations": owner->contact
  }`

  //}
  //armc,locations:[{"_key":"70fa252473f1","_ref":"725b362e-ae48-4d74-ba6c-119b02cad11e","_type":"reference"}]
  //mhcs,locations:[{"_key":"3b5d2b6137b1","_ref":"351a54fa-72c8-4356-965d-69c8f35c42ba","_type":"reference"},
  //                {"_key":"41df6036bd1e","_ref":"ccc9b4f4-1c33-47a4-a3d0-4a5921705815","_type":"reference"},
  //                {"_key":"44dd693a7af1","_ref":"6c7dcd1c-f28f-4103-b631-abc57d019e3b","_type":"reference"}]

  //"locations": *[ _type == "contact" && _id == ^.contact._ref ][0]]} [ !defined(contact) ], *[ _type == "employee" && references(^._id) ], }[ count(employees) > 0 ]
  //"locations": owner->contact,
  const order=`| order(schedual.startDate asc)`
  const query=[filter, projection, order].join(' ')
  const docs=await client.fetch(query).catch(err => console.error(err))
  const activePages=docs.map(generate)
  console.log(`Page: `+JSON.stringify(activePages))
  console.log(docs)
  return activePages
}

module.exports=getActive