import S from '@sanity/desk-tool/structure-builder'
import Campaign from 'react-icons/lib/go/bookmark'
import Owner from 'react-icons/lib/go/graph'
import Location from 'react-icons/lib/go/location'
import Serviceline from 'react-icons/lib/go/pulse'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Campaigns')
        .icon(Campaign)
        .schemaType('campaign')
        .child(S.documentTypeList('campaign').title('Campaigns')),
      S.listItem()
        .title('Owners')
        .icon(Owner)
        .schemaType('owner')
        .child(S.documentTypeList('owner').title('Owners')),
      S.listItem()
        .title('Locations')
        .icon(Location)
        .schemaType('location')
        .child(S.documentTypeList('location').title('Locations')),
      S.listItem()
        .title('Service Lines')
        .icon(Serviceline)
        .schemaType('service')
        .child(S.documentTypeList('service').title('Service Lines')),
    ])