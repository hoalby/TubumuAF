const debugAccount = 'system'
const debugPassword = '111111'

const isProduction = process.env.NODE_ENV === 'production'

export const baseUrl = '/api'
export const defaultAccount = isProduction ? '' : debugAccount
export const defaultPassword = isProduction ? '' : debugPassword
