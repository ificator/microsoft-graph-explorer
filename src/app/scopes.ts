import { PermissionScope } from "./base";

export const PermissionScopes: PermissionScope[] = [
 {
   name: "Calendars.Read",
   description: "Read user calendars",
   longDescription: "Allows the app to read events in user calendars.",
   preview: false,
   admin: false
 },
 {
   name: "Calendars.Read.Shared",
   description: "Read user and shared calendars",
   longDescription: "Allows the app to read events in all calendars that the user can access, including delegate and shared calendars.",
   preview: false,
   admin: false
 },
 {
   name: "Calendars.ReadWrite",
   description: "Have full access to user calendars",
   longDescription: "Allows the app to create, read, update, and delete events in user calendars.",
   preview: false,
   admin: false
 },
 {
   name: "Calendars.ReadWrite.Shared",
   description: "Read and write user and shared calendars",
   longDescription: "Allows the app to create, read, update and delete events in all calendars the user has permissions to access. This includes delegate and shared calendars.",
   preview: false,
   admin: false
 },
 {
   name: "Contacts.Read",
   description: "Read user contacts",
   longDescription: "Allows the app to read user contacts.",
   preview: false,
   admin: false
 },
 {
   name: "Contacts.Read.Shared",
   description: "Read user and shared contacts",
   longDescription: "Allows the app to read contacts that the user has permissions to access, including the user's own and shared contacts.",
   preview: false,
   admin: false
 },
 {
   name: "Contacts.ReadWrite",
   description: "Have full access to user contacts",
   longDescription: "Allows the app to create, read, update, and delete user contacts.",
   preview: false,
   admin: false
 },
 {
   name: "Contacts.ReadWrite.Shared",
   description: "Read and write user and shared contacts",
   longDescription: "Allows the app to create, read, update and delete contacts that the user has permissions to, including the user's own and shared contacts.",
   preview: false,
   admin: false
 },
 {
   name: "Files.Read",
   description: "Read user files and files shared with user",
   longDescription: "Allows the app to read the signed-in user's files and files shared with the user.",
   preview: false,
   admin: false
 },
 {
   name: "Files.Read.All",
   description: "Read all files that user can access",
   longDescription: "Allows the app to read all files the signed-in user can access.",
   preview: false,
   admin: false
 },
 {
   name: "Files.Read.Selected",
   description: "Read files that the user selects",
   longDescription: "Allows the app to read files that the user selects. The app has access for several hours after the user selects a file.",
   preview: false,
   admin: false
 },
 {
   name: "Files.ReadWrite",
   description: "Have full access to user files and files shared with user",
   longDescription: "Allows the app to read, create, update and delete the signed-in user's files and files shared with the user.",
   preview: false,
   admin: false
 },
 {
   name: "Files.ReadWrite.All",
   description: "Have full access to all files user can access",
   longDescription: "Allows the app to read, create, update and delete all files the signed-in user can access.",
   preview: false,
   admin: false
 },
 {
   name: "Files.ReadWrite.AppFolder",
   description: "Have full access to the application's folder",
   longDescription: "Allows the app to read, create, update and delete files in the application's folder.",
   preview: false,
   admin: false
 },
 {
   name: "Files.ReadWrite.Selected",
   description: "Read and write files that the user selects",
   longDescription: "Allows the app to read and write files that the user selects. The app has access for several hours after the user selects a file.",
   preview: false,
   admin: false
 },
 {
   name: "Mail.Read",
   description: "Read user mail",
   longDescription: "Allows the app to read email in user mailboxes.",
   preview: false,
   admin: false
 },
 {
   name: "Mail.Read.Shared",
   description: "Read user and shared mail",
   longDescription: "Allows the app to read mail that the user can access, including the user's own and shared mail.",
   preview: false,
   admin: false
 },
 {
   name: "Mail.ReadWrite",
   description: "Read and write access to user mail",
   longDescription: "Allows the app to create, read, update, and delete email in user mailboxes. Does not include permission to send mail.",
   preview: false,
   admin: false
 },
 {
   name: "Mail.ReadWrite.Shared",
   description: "Read and write user and shared mail",
   longDescription: "Allows the app to create, read, update, and delete mail that the user has permission to access, including the user's own and shared mail. Does not include permission to send mail.",
   preview: false,
   admin: false
 },
 {
   name: "Mail.Send",
   description: "Send mail as a user",
   longDescription: "Allows the app to send mail as users in the organization.",
   preview: false,
   admin: false
 },
 {
   name: "Mail.Send.Shared",
   description: "Send mail on behalf of others",
   longDescription: "Allows the app to send mail as the signed-in user, including sending on-behalf of others.",
   preview: false,
   admin: false
 },
 {
   name: "MailboxSettings.ReadWrite",
   description: "Read and write user mailbox settings",
   longDescription: "Allows the app to create, read, update, and delete user's mailbox settings. Does not include permission to send mail.",
   preview: false,
   admin: false
 },
 {
   name: "offline_access",
   description: "Access user's data anytime (preview)",
   longDescription: "Allows the app to read and update user data, even when they are not currently using the app.",
   preview: false,
   admin: false
 },
 {
   name: "openid",
   description: "Sign users in (preview)",
   longDescription: "Allows users to sign in to the app with their work or school accounts and allows the app to see basic user profile information.",
   preview: false,
   admin: false
 },
 {
   name: "User.Read",
   description: "Sign-in and read user profile",
   longDescription: "Allows users to sign-in to the app, and allows the app to read the profile of signed-in users. The full profile includes all of the declared properties of the User entity. The app cannot read navigation properties, such as manager or direct reports. Also allows the app to read the following basic company information of the signed-in user (through the TenantDetail object): tenant ID, tenant display name, and verified domains.",
   preview: false,
   admin: false
 },
 {
   name: "User.ReadWrite",
   description: "Read and write access to user profile",
   longDescription: "Allows the app to read your profile. It also allows the app to update your profile information on your behalf.",
   preview: false,
   admin: false
 },
 {
   name: "User.ReadBasic.All",
   description: "Read all user's basic profiles",
   longDescription: "Allows the app to read the basic profile of all users in the organization on behalf of the signed-in user. The following properties comprise a user’s basic profile: display name, first and last name, photo, and email address. To read the groups that a user is a member of, the app will also require Group.Read.All or Group.ReadWrite.All.",
   preview: false,
   admin: false
 },
 {
   name: "Notes.Create",
   description: "Create pages in users' notebooks (preview)",
   longDescription: "Allows the app to read the titles of notebooks and sections and create new pages, notebooks and sections on behalf of the signed-in user.",
   preview: true,
   admin: false
 },
 {
   name: "Notes.Read",
   description: "Read user notebooks (preview)",
   longDescription: "Allows the app to view the titles of OneNote notebooks and sections and to read all pages on behalf of the signed-in user. It cannot view password protected sections.",
   preview: true,
   admin: false
 },
 {
   name: "Notes.Read.All",
   description: "Read all notebooks that the user can access (preview)",
   longDescription: "Allows the app to read the contents of all notebooks and sections that the signed-in user can access. It cannot read password protected sections.",
   preview: true,
   admin: false
 },
 {
   name: "Notes.ReadWrite",
   description: "Read and write user notebooks (preview)",
   longDescription: "Allows the app to read the titles of notebooks and sections, read all pages, write all pages and create new pages on behalf of the signed-in user.  It cannot access password protected sections.",
   preview: true,
   admin: false
 },
 {
   name: "Notes.ReadWrite.All",
   description: "Read and write notebooks that the user can access (preview)",
   longDescription: "Allows the app to read and write the contents of all notebooks and sections that the signed-in user can access. It cannot access password protected sections.",
   preview: true,
   admin: false
 },
 {
   name: "Notes.ReadWrite.CreatedByApp",
   description: "Limited notebook access (preview)",
   longDescription: "Allows the app to read the titles of notebooks and sections, create new pages on behalf of the signed-in user. Also allows the app to read and update pages created by the app.",
   preview: true,
   admin: false
 },
 {
   name: "People.Read",
   description: "Read users' relevant people lists (preview)",
   longDescription: "Allows the app to read a ranked list of relevant people of the signed-in user. The list includes local contacts, contacts from social networking, your organization's directory, and people from recent communications (such as email and Skype).",
   preview: true,
   admin: false
 },
 {
   name: "Sites.Read.All",
   description: "Read items in all site collections",
   longDescription: "Allows the application to read documents and list items in all site collections on behalf of the signed-in user.",
   preview: true,
   admin: false
 },
 {
   name: "Sites.ReadWrite.All",
   description: "Read and write items in all site collections",
   longDescription: "Allows the application to edit or delete documents and list items in all site collections on behalf of the signed-in user.",
   preview: true,
   admin: false
 },
 {
   name: "Tasks.Read",
   description: "Read user tasks",
   longDescription: "Allows the app to read user tasks.",
   preview: true,
   admin: false
 },
 {
   name: "Tasks.Read.Shared",
   description: "Read user and shared tasks",
   longDescription: "Allows the app to read tasks a user has permissions to access, including their own and shared tasks.",
   preview: true,
   admin: false
 },
 {
   name: "Tasks.ReadWrite",
   description: "Create, read, update and delete user tasks and plans (preview)",
   longDescription: "Allows the app to create, read, update and delete tasks and plans (and tasks in them), that are assigned to or shared with the signed-in user.",
   preview: true,
   admin: false
 },
 {
   name: "Tasks.ReadWrite.Shared",
   description: "Read and write user and shared tasks",
   longDescription: "Allows the app to create, read, update, and delete tasks a user has permissions to, including their own and shared tasks.",
   preview: true,
   admin: false
 },
 {
   name: "Directory.AccessAsUser.All",
   description: "Access directory as the signed-in user",
   longDescription: "Allows the app to have the same access to information in the directory as the signed-in user.",
   preview: false,
   admin: true
 },
 {
   name: "Directory.Read.All",
   description: "Read directory data",
   longDescription: "Allows the app to read data in your organization's directory, such as users, groups and apps.",
   preview: false,
   admin: true
 },
 {
   name: "Directory.ReadWrite.All",
   description: "Read and write directory data",
   longDescription: "Allows the app to read and write data in your organization's directory, such as users, and groups. Does not allow user or group deletion. It does not allow the app to delete users or groups, or reset user passwords.",
   preview: false,
   admin: true
 },
 {
   name: "Group.Read.All",
   description: "Read all groups",
   longDescription: "Allows the app to list groups, and to read their properties and all group memberships on behalf of the signed-in user. Also allows the app to read calendar, conversations, files, and other group content for all groups the signed-in user can access.",
   preview: false,
   admin: true
 },
 {
   name: "Group.ReadWrite.All",
   description: "Read and write all groups",
   longDescription: "Allows the app to create groups and read all group properties and memberships on behalf of the signed-in user. Additionally allows group owners to manage their groups and allows group members to update group content.",
   preview: false,
   admin: true
 },
 {
   name: "User.Read.All",
   description: "Read all user's full profiles",
   longDescription: "Same as User.ReadBasic.All, except that it allows the app to read the full profile of all users in the organization and when reading navigation properties like manager and direct reports. The full profile includes all of the declared properties of the User entity. To read the groups that a user is a member of, the app will also require either Group.Read.All or Group.ReadWrite.All.",
   preview: false,
   admin: true
 },
 {
   name: "User.ReadWrite.All",
   description: "Read and write all user's full profiles",
   longDescription: "Allows the app to read and write the full set of profile properties, reports, and managers of other users in your organization, on behalf of the signed-in user.",
   preview: false,
   admin: true
 },
 {
   name: "IdentityRiskEvent.Read.All",
   description: "Read identity risk event information (preview)",
   longDescription: "Allows the app to read identity risk event information for all users in your organization on behalf of the signed-in user.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementServiceConfiguration.Read.All",
   description: "Read Microsoft Intune configuration (preview)",
   longDescription: "Allows the app to read Microsoft Intune service properties including device enrollment and third party service connection configuration.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementServiceConfiguration.ReadWrite.All",
   description: "Read and write Microsoft Intune configuration (preview)",
   longDescription: "Allows the app to read and write Microsoft Intune service properties including device enrollment and third party service connection configuration.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementConfiguration.Read.All",
   description: "Read Microsoft Intune device configuration and policies (preview)",
   longDescription: "Allows the app to read properties of Microsoft Intune-managed device configuration and device compliance policies and their assignment to groups.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementConfiguration.ReadWrite.All",
   description: "Read and write Microsoft Intune device configuration and policies (preview)",
   longDescription: "Allows the app to read and write properties of Microsoft Intune-managed device configuration and device compliance policies and their assignment to groups.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementApps.Read.All",
   description: "Read Microsoft Intune apps (preview)",
   longDescription: "Allows the app to read the properties, group assignments and status of apps, app configurations and app protection policies managed by Microsoft Intune.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementApps.ReadWrite.All",
   description: "Read and write Microsoft Intune apps (preview)",
   longDescription: "Allows the app to read and write the properties, group assignments and status of apps, app configurations and app protection policies managed by Microsoft Intune.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementRBAC.Read.All",
   description: "Read Microsoft Intune RBAC settings (preview)",
   longDescription: "Allows the app to read the properties relating to the Microsoft Intune Role-Based Access Control (RBAC) settings.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementRBAC.ReadWrite.All",
   description: "Read and write Microsoft Intune RBAC settings (preview)",
   longDescription: "Allows the app to read and write the properties relating to the Microsoft Intune Role-Based Access Control (RBAC) settings.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementManagedDevices.Read.All",
   description: "Read Microsoft Intune devices (preview)",
   longDescription: "Allows the app to read the properties of devices managed by Microsoft Intune.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementManagedDevices.ReadWrite.All",
   description: "Read and write Microsoft Intune devices (preview)",
   longDescription: "Allows the app to read and write the properties of devices managed by Microsoft Intune. Does not allow high impact operations such as remote wipe and password reset on the device’s owner.",
   preview: true,
   admin: true
 },
 {
   name: "DeviceManagementManagedDevices.PrivilegedOperations.All",
   description: "Perform user-impacting remote actions on Microsoft Intune devices (preview)",
   longDescription: "Allows the app to perform remote high impact actions such as wiping the device or resetting the passcode on devices managed by Microsoft Intune.",
   preview: true,
   admin: true
 }
]