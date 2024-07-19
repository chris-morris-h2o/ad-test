import { PublicClientApplication } from '@azure/msal-browser'

import { createAuth } from '@redwoodjs/auth-azure-active-directory-web'

const azureActiveDirectoryClient = new PublicClientApplication({
  auth: {
    clientId: process.env.AZURE_ACTIVE_DIRECTORY_CLIENT_ID || '',
    authority: process.env.AZURE_ACTIVE_DIRECTORY_AUTHORITY,
    redirectUri: process.env.AZURE_ACTIVE_DIRECTORY_REDIRECT_URI,
    postLogoutRedirectUri:
      process.env.AZURE_ACTIVE_DIRECTORY_LOGOUT_REDIRECT_URI,
  },
})

export const { AuthProvider, useAuth } = createAuth(azureActiveDirectoryClient)
