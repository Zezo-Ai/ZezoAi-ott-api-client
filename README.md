# @zezosoft/zezo-ott-api-client 🎬

## installing

```bash
npm install --save @zezosoft/zezo-ott-api-client@latest
```

## Using

### Typescript

```typescript
import { ZezoOTT } from "@zezosoft/zezo-ott-api-client";
const zott = new ZezoOTT({ baseUrl: "your-base-url" });

const main = async () => {
  const data = await zott.settings.getSettings();
  console.log(data);
};

main();
```

### Javascript/Nodejs

```javascript
const { ZezoOTT } = require("@zezosoft/zezo-ott-api-client");
const zott = new ZezoOTT({ baseUrl: "your-base-url" });

const main = async () => {
  const data = await zott.settings.getSettings();
  console.log(data);
};

main();
```

## Docs

1. [Analytics](doc/analytics.md#Analytics)

   1. [countView](doc/analytics.md#countView)
   1. [countWatchTime](doc/analytics.md#countWatchTime)
   1. [readContentAnalytics](doc/analytics.md#readContentAnalytics)
   1. [readUsersAnalytics](doc/analytics.md#readUsersAnalytics)
   1. [readContentReportAnalytics](doc/analytics.md#readContentReportAnalytics)
   1. [readRevenueAnalytics](doc/analytics.md#readRevenueAnalytics)
   1. [getTvodAnalytics](doc/analytics.md#getTvodAnalytics)
   1. [trending](doc/analytics.md#trending)

1. [Auth](doc/auth.md#Auth)

   1. [sendOTP](doc/auth.md#sendOTP)
   1. [login](doc/auth.md#login)
   1. [verifyOTP](doc/auth.md#verifyOTP)
   1. [signUp](doc/auth.md#signUp)
   1. [forgotPassword](doc/auth.md#forgotPassword)
   1. [resetPassword](doc/auth.md#resetPassword)
   1. [whoami](doc/auth.md#whoami)
   1. [logout](doc/auth.md#logout)
   1. [removeSession](doc/auth.md#removeSession)
   1. [changePassword](doc/auth.md#changePassword)

1. [AuthMethods](doc/auth.methods.md#AuthMethods)

   1. [loginMethods](doc/auth.methods.md#loginMethods)
   1. [get](doc/auth.methods.md#get)
   1. [init](doc/auth.methods.md#init)
   1. [update](doc/auth.methods.md#update)

1. [Blogs](doc/blog.md#Blogs)

   1. [create](doc/blog.md#create)
   1. [update](doc/blog.md#update)
   1. [action](doc/blog.md#action)
   1. [delete](doc/blog.md#delete)
   1. [getList](doc/blog.md#getList)
   1. [getManage](doc/blog.md#getManage)
   1. [get](doc/blog.md#get)

1. [Categories](doc/categories.md#Categories)

   1. [create](doc/categories.md#create)
   1. [update](doc/categories.md#update)
   1. [delete](doc/categories.md#delete)
   1. [actions](doc/categories.md#actions)
   1. [getManage](doc/categories.md#getManage)
   1. [list](doc/categories.md#list)
   1. [get](doc/categories.md#get)

1. [Contents](doc/content.md#Contents)

   1. [getList](doc/content.md#getList)
   1. [create](doc/content.md#create)
   1. [getManage](doc/content.md#getManage)
   1. [actions](doc/content.md#actions)
   1. [update](doc/content.md#update)
   1. [removeTitleImage](doc/content.md#removeTitleImage)
   1. [getSeasonManage](doc/content.md#getSeasonManage)
   1. [createSeason](doc/content.md#createSeason)
   1. [deleteSeason](doc/content.md#deleteSeason)
   1. [updateSeason](doc/content.md#updateSeason)
   1. [createEpisode](doc/content.md#createEpisode)
   1. [deleteEpisode](doc/content.md#deleteEpisode)
   1. [updateEpisode](doc/content.md#updateEpisode)
   1. [manageSubtitles](doc/content.md#manageSubtitles)
   1. [uploadImages](doc/content.md#uploadImages)
   1. [deleteImage](doc/content.md#deleteImage)
   1. [get](doc/content.md#get)
   1. [getSeasons](doc/content.md#getSeasons)
   1. [getIsContentBuyedOrRented](doc/content.md#getIsContentBuyedOrRented)
   1. [getTvod](doc/content.md#getTvod)
   1. [updateGeoLocation](doc/content.md#updateGeoLocation)
   1. [fetchSearchResults](doc/content.md#fetchsearchresults)
   1. [createImageSize](doc/content.md#createImageSize)
   1. [listImageSizes](doc/content.md#listImageSizes)
   1. [deleteImageSize](doc/content.md#deleteImageSize)

1. [Favorite](doc/favorite.md#Favorites)

   1. [addToFavorites](doc/favorite.md#addToFavorites)
   1. [getIsFavorite](doc/favorite.md#getIsFavorite)
   1. [removeFromFavorites](doc/favorite.md#removeFromFavorites)
   1. [get](doc/favorite.md#getfavorites)

1. [Payments](doc/payments.md#Payments)

   1. [list](doc/payments.md#list)
   1. [checkout](doc/payments.md#checkout)
   1. [ready](doc/payments.md#ready)

1. [Settings](doc/settings.md#Settings)

   1. [getManage](doc/settings.md#getManage)
   1. [get](doc/settings.md#get)
   1. [update](doc/settings.md#update)
   1. [updateSocialMedia](doc/settings.md#updateSocialMedia)
   1. [getSettings](doc/settings.md#getSettings)

1. [Subscriptions](doc/subscriptions.md#Subscriptions)

   1. [initNew](doc/subscriptions.md#initNew)
   1. [delete](doc/subscriptions.md#delete)
   1. [update](doc/subscriptions.md#update)
   1. [get](doc/subscriptions.md#get)
   1. [getManage](doc/subscriptions.md#getManage)

1. [Sections](doc/sections.md#Sections)

   1. [create](doc/sections.md#create)
   1. [getManage](doc/sections.md#getManage)
   1. [deleteSection](doc/sections.md#deleteSection)
   1. [updateStatus](doc/sections.md#updateStatus)
   1. [updateOrder](doc/sections.md#updateOrder)
   1. [update](doc/sections.md#update)
   1. [createSectionStyle](doc/sections.md#createSectionStyle)
   1. [updateSectionStyle](doc/sections.md#updateSectionStyle)
   1. [deleteSectionStyle](doc/sections.md#deleteSectionStyle)
   1. [getSectionStyles](doc/sections.md#getSectionStyles)
   1. [get](doc/sections.md#get)

1. [Countries](doc/countries.md#Countries)

   1. [init](doc/countries.md#init)
   1. [create](doc/countries.md#create)
   1. [delete](doc/countries.md#delete)
   1. [get](doc/countries.md#get)
   1. [getManage](doc/countries.md#getManage)

1. [Users](doc/user.md#Users)

   1. [export](doc/user.md#export)
   1. [get](doc/user.md#get)
   1. [actions](doc/user.md#actions)
   1. [deleteUsers](doc/user.md#deleteUsers)
   1. [create](doc/user.md#create)
   1. [updateAvatar](doc/user.md#updateAvatar)
   1. [update](doc/user.md#update)
   1. [removeSession](doc/user.md#removeSession)
   1. [updateACL](doc/user.md#updateACL)
   1. [updateSubscription](doc/user.md#updateSubscription)

1. [Config](doc/config.md#Config)

   1. [create](doc/config.md#create)
   1. [get](doc/config.md#get)
   1. [update](doc/config.md#update)
   1. [delete](doc/config.md#delete)

1. [Upgrade](doc/upgrade.md#Upgrade)

   1. [autoSetupAcl](doc/upgrade.md#autoSetupAcl)

1. [Release Popup](doc/release.popup.md#ReleasePopup)

   1. [create](doc/release.popup.md#create)
   1. [update](doc/release.popup.md#update)
   1. [delete](doc/release.popup.md#delete)
   1. [get](doc/release.popup.md#get)

1. [Api Key](doc/api.key.md#ApiKey)

   1. [create](doc/api.key.md#create)
   1. [list](doc/api.key.md#list)
   1. [delete](doc/api.key.md#delete)
   1. [update](doc/api.key.md#update)

1. [File Manager](doc/file.manager.md#FileManager)

   1. [list](doc/file.manager.md#list)
   1. [createFolder](doc/file.manager.md#createFolder)
   1. [delete](doc/file.manager.md#delete)
   1. [initMultipartUpload](doc/file.manager.md#initMultipartUpload)
   1. [getMultipartPresignedUrl](doc/file.manager.md#getMultipartPresignedUrl)
   1. [finalizeMultipartUpload](doc/file.manager.md#finalizeMultipartUpload)
   1. [createUploadPresignedUrl](doc/file.manager.md#createUploadPresignedUrl)
   1. [getSignedUrl](doc/file.manager.md#getSignedUrl)
   1. [getTranscoderSignUrl](doc/file.manager.md#getTranscoderSignUrl)

1. [User Histiry](doc/history.md#History)

   1. [get](doc/history.md#get)
   1. [update](doc/history.md#update)

1. [Reels](doc/reels.md#Reels)

   1. [create](doc/reels.md#create)
   1. [update](doc/reels.md#update)
   1. [actions](doc/reels.md#actions)
   1. [delete](doc/reels.md#delete)
   1. [list](doc/reels.md#list)
   1. [feed](doc/reels.md#feed)

1. [Upload](doc/upload.md#Upload)

   1. [init](doc/upload.md#init)
   1. [getUrls](doc/upload.md#getUrls)
   1. [finalize](doc/upload.md#finalize)
   1. [uploadFile](doc/upload.md#uploadFile)

1. [Genres](doc/genres.md#Genres)

   1. [create](doc/genres.md#create)
   1. [update](doc/genres.md#update)
   1. [delete](doc/genres.md#delete)
   1. [actions](doc/genres.md#actions)
   1. [listManage](doc/genres.md#listManage)
   1. [list](doc/genres.md#list)

1. [Language](doc/language.md#Language)

   1. [create](doc/language.md#create)
   1. [update](doc/language.md#update)
   1. [delete](doc/language.md#delete)
   1. [actions](doc/language.md#actions)
   1. [listManage](doc/language.md#listManage)
   1. [list](doc/language.md#list)

1. [Cast](doc/cast.md#Cast)

   1. [create](doc/cast.md#create)
   1. [update](doc/cast.md#update)
   1. [delete](doc/cast.md#delete)
   1. [actions](doc/cast.md#actions)
   1. [listManage](doc/cast.md#listManage)
   1. [list](doc/cast.md#list)

1. [Transcoding](doc/transcoding.md#Transcoding)

   1. [create](doc/transcoding.md#create)
   1. [list](doc/transcoding.md#list)
   1. [delete](doc/transcoding.md#delete)

1. [Notification](doc/notification.md#Notification)

   1. [registerDevice](doc/notification.md#registerDevice)
   1. [sendPushNotification](doc/notification.md#sendPushNotification)

1. [App Settings](doc/app.settings.md#AppSettings)

   1. [update](doc/app.settings.md#update)
   1. [getAndroidVersion](doc/app.settings.md#getAndroidVersion)
   1. [getPagesList](doc/app.settings.md#getPagesList)
   1. [updatePages](doc/app.settings.md#updatePages)
   1. [getSettings](doc/app.settings.md#getSettings)
   1. [updateTheme](doc/app.settings.md#updateTheme)
   1. [initTheme](doc/app.settings.md#initTheme)
   1. [getThemeManage](doc/app.settings.md#getThemeManage)
   1. [getThemes](doc/app.settings.md#getThemes)

1. [Coupon](doc/coupon.md#Coupon)

   1. [create](doc/coupon.md#create)
   1. [update](doc/coupon.md#update)
   1. [delete](doc/coupon.md#delete)
   1. [action](doc/coupon.md#action)
   1. [getManage](doc/coupon.md#getManage)

1. [Ads](doc/ads.md#Ads)

   1. [createCampaign](doc/ads.md#createCampaign)
   1. [updateCampaign](doc/ads.md#updateCampaign)
   1. [deleteCampaign](doc/ads.md#deleteCampaign)
   1. [actionsOnCampaign](doc/ads.md#actionsOnCampaign)
   1. [getListCampaigns](doc/ads.md#getListCampaigns)
   1. [getAds](doc/ads.md#getAds)
   1. [generateAd](doc/ads.md#generateAd)

1. [Partner](doc/partner.md#Partner)

   1. [getRevenueSettings](doc/partner.md#getRevenueSettings)
   1. [updateRevenueSettings](doc/partner.md#updateRevenueSettings)
   1. [addAccountDetails](doc/partner.md#addAccountDetails)
   1. [updateAccountDetails](doc/partner.md#updateAccountDetails)
   1. [getAccountDetails](doc/partner.md#getAccountDetails)
   1. [createRevenueRequest](doc/partner.md#createRevenueRequest)
   1. [updateRevenueRequest](doc/partner.md#updateRevenueRequest)
   1. [getRevenueRequests](doc/partner.md#getRevenueRequests)

## Contributors

<a href="https://github.com/PukhrajDhamu" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/74310666?v=3" width="80" height="80">
</a>

<a href="https://github.com/Naresh-Dhamu" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/89912059?v=4" width="80" height="80">
</a>

<a href="https://github.com/naresh-desai" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/164985120?v=4" width="80" height="80">
</a>

## License: [mit](LICENSE)
