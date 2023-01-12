export enum QuestionTypes {
  OpenText = 'open',
  Cover = 'cover',
  SingleSelect = 'single',
  MultipleSelect = 'multiple',
}

export type ActionAnswerQuestion =
  | { type: QuestionTypes.OpenText, payload: string }
  | { type: QuestionTypes.Cover }
  | { type: QuestionTypes.SingleSelect; payload: string[] }
  | { type: QuestionTypes.MultipleSelect; payload: string[] };
