import { serve } from 'inngest/next'

import inngestClient from '@my/api/utils/inngestClient'

// CRON
import cronWeeklyDigestEmailsJob from '@my/api/jobs/cronWeeklyDigestEmailsJob'
import cronMonthlyUnpublishedProjectsEmailsJob from '@my/api/jobs/cronMonthlyUnpublishedProjectsEmailsJob'

// Events
import sendPostCommentNotificationJob from '@my/api/jobs/sendPostCommentNotificationJob'
import sendProjectCommentNotificationJob from '@my/api/jobs/sendProjectCommentNotificationJob'
import sendProjectImagesCommentNotificationJob from '@my/api/jobs/sendProjectImagesCommentNotificationJob'
import sendProjectQuestionNotificationJob from '@my/api/jobs/sendProjectQuestionNotificationJob'
import sendWeeklyDigestEmailJob from '@my/api/jobs/sendWeeklyDigestEmailJob'
import sendUnpublishedProjectsEmailJob from '@my/api/jobs/sendUnpublishedProjectsEmailJob'

// Create an API that hosts the functions
export default serve(inngestClient, [
  cronWeeklyDigestEmailsJob,
  cronMonthlyUnpublishedProjectsEmailsJob,
  sendPostCommentNotificationJob,
  sendProjectCommentNotificationJob,
  sendProjectImagesCommentNotificationJob,
  sendProjectQuestionNotificationJob,
  sendUnpublishedProjectsEmailJob,
  sendWeeklyDigestEmailJob,
])
