import { createTRPCRouter } from './trpc'

import activityItemsRouter from './routers/activityItems'
import attachmentsRouter from './routers/attachments'
import attributesRouter from './routers/attributes'
import authRouter from './routers/auth'
import awsRouter from './routers/aws'
import businessLocationsRouter from './routers/businessLocations'
import businessesImagesRouter from './routers/businessesImages'
import businessesRouter from './routers/businesses'
import categoriesRouter from './routers/categories'
import commentLikesRouter from './routers/commentLikes'
import commentsRouter from './routers/comments'
import countriesRouter from './routers/countries'
import externalLinkViewsRouter from './routers/externalLinkViews'
import externalLinksRouter from './routers/externalLinks'
import imageLikesRouter from './routers/imageLikes'
import imagesRouter from './routers/images'
import manufacturerModelSeriesRouter from './routers/manufacturerModelSeries'
import manufacturerModelsRouter from './routers/manufacturerModels'
import manufacturerPartsRouter from './routers/manufacturerParts'
import manufacturersRouter from './routers/manufacturers'
import postLikesRouter from './routers/postLikes'
import postPageViewsRouter from './routers/postPageViews'
import postsAttachmentsRouter from './routers/postsAttachments'
import postsCommentsRouter from './routers/postsComments'
import postsImagesRouter from './routers/postsImages'
import postsRouter from './routers/posts'
import projectImagesCommentsRouter from './routers/projectImagesComments'
import projectLikesRouter from './routers/projectLikes'
import projectPageViewsRouter from './routers/projectPageViews'
import projectPartsExternalLinksRouter from './routers/projectPartsExternalLinks'
import projectPartsImageTagsRouter from './routers/projectPartsImageTags'
import projectsCommentsRouter from './routers/projectsComments'
import projectsExternalLinksRouter from './routers/projectsExternalLinks'
import projectsImagesRouter from './routers/projectsImages'
import projectsPartsRouter from './routers/projectsParts'
import projectsRouter from './routers/projects'
import servicesRouter from './routers/services'
import usersExternalLinksRouter from './routers/usersExternalLinks'
import usersImagesRouter from './routers/usersImages'
import usersRouter from './routers/users'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  activityItems: activityItemsRouter,
  attachments: attachmentsRouter,
  attributes: attributesRouter,
  auth: authRouter,
  aws: awsRouter,
  businessLocations: businessLocationsRouter,
  businesses: businessesRouter,
  businessesImages: businessesImagesRouter,
  categories: categoriesRouter,
  commentLikes: commentLikesRouter,
  comments: commentsRouter,
  countries: countriesRouter,
  externalLinkViews: externalLinkViewsRouter,
  externalLinks: externalLinksRouter,
  imageLikes: imageLikesRouter,
  images: imagesRouter,
  manufacturerModelSeries: manufacturerModelSeriesRouter,
  manufacturerModels: manufacturerModelsRouter,
  manufacturerParts: manufacturerPartsRouter,
  manufacturers: manufacturersRouter,
  postLikes: postLikesRouter,
  postPageViews: postPageViewsRouter,
  posts: postsRouter,
  postsAttachments: postsAttachmentsRouter,
  postsComments: postsCommentsRouter,
  postsImages: postsImagesRouter,
  projectImagesComments: projectImagesCommentsRouter,
  projectLikes: projectLikesRouter,
  projectPageViews: projectPageViewsRouter,
  projectPartsExternalLinks: projectPartsExternalLinksRouter,
  projectPartsImageTags: projectPartsImageTagsRouter,
  projects: projectsRouter,
  projectsComments: projectsCommentsRouter,
  projectsExternalLinks: projectsExternalLinksRouter,
  projectsImages: projectsImagesRouter,
  projectsParts: projectsPartsRouter,
  services: servicesRouter,
  users: usersRouter,
  usersExternalLinks: usersExternalLinksRouter,
  usersImages: usersImagesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
