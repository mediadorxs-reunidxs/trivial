export interface FrontpageChoice {
  sessionId: string,
  product: string
}

export interface FrontpageFeedback {
  sessionId: string,
  email?: string,
  comments?: string
}
