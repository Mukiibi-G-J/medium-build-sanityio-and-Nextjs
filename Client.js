import { createCurrentUserHook, createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: '8s6eaa15',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
}

export const sanityClient = createClient(config)

export const useCurrentUser = createCurrentUserHook(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)
