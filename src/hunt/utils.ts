import type { QuestionType } from './data'

function normalize(value: string, type: QuestionType) {
  const trimmed = value.trim().toLowerCase()
  if (type === 'number') return trimmed.replace(/[^0-9]/g, '')
  return trimmed.replace(/[^a-z0-9]/g, '')
}

export function isCorrect(value: string, accept: string[], type: QuestionType) {
  if (!value.trim()) return false
  const given = normalize(value, type)
  return accept.some((a) => normalize(a, type) === given)
}
