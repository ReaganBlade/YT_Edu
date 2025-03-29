# Changelog - March 28, 2025  

## Fixes & Improvements  

### Authentication & Session Handling  
- [x] Wrapped the application inside `<SessionProvider>` in `layout.tsx` to fix:  
  - **Error:** `useSession must be wrapped in a SessionProvider`.  
- [x] Removed `"use client"` from `layout.tsx` to allow exporting `metadata`, fixing:  
  - **Error:** `You are attempting to export "metadata" from a component marked with "use client"`.  

### Appwrite Integration Fixes  
- [x] Refactored `createAdminClient` to ensure it runs only on the **server**, preventing:  
  - **Error:** `Only plain objects can be passed to Client Components from Server Components`.  
- [x] Moved `saveUserData` in `user.actions.ts` to a **server-only function**, using `"use server"` directive.  
- [x] Removed direct calls to `createAdminClient()` from `SignIn.tsx`, resolving:  
  - **Error:** `Cannot read properties of undefined (reading 'createDocument')`.  
- [x] Used `useEffect` to trigger `saveUserData` inside `SignIn.tsx`, preventing:  
  - **Error:** `Cannot update a component (Router) while rendering a different component (SignIn)`.  

### General Bug Fixes & Code Cleanup  
- [x] Ensured `user_id` is correctly retrieved from `session.user.id` instead of `session.user.address` to fix:  
  - **Error:** `Property 'id' does not exist on type '{ address: string; }'`.  
- [x] Prevented state updates inside render functions by restructuring API calls.  

## Next Steps  
- [ ] Test OAuth **sign-in flow** and verify user session management.  
- [ ] Validate Appwrite **database writes** for new users.  
- [ ] Improve **error handling** for missing session data.  