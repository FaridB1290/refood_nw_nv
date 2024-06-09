import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "customerId";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.customerId?.toString() || String(record.id);
};
