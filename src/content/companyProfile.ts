import type { CompanyProfile } from './companyProfile.types'
import profileJson from './companyProfile.json'

function assertCompanyProfile(value: unknown): asserts value is CompanyProfile {
  if (!value || typeof value !== 'object') throw new Error('companyProfile.json: expected object')
  const v = value as Record<string, unknown>
  const required = ['name', 'tagline', 'shortBio', 'businessDescription']
  for (const key of required) {
    if (typeof v[key] !== 'string' || !v[key]) {
      throw new Error(`companyProfile.json: missing/invalid ${key}`)
    }
  }
}

assertCompanyProfile(profileJson)

export const companyProfile: CompanyProfile = profileJson

