# Ads

## createCampaign

```javascript
try {
  const response = await zott.ads.createCampaign({
    type: "display",
    locations: ["IN"],
    ...moreData,
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateCampaign

```javascript
try {
  const response = await zott.ads.updateCampaign(campaignId, {
    type: "display",
    locations: ["IN"],
    ...moreData,
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## deleteCampaign

```javascript
try {
  const response = await zott.ads.deleteCampaign([campaignId]);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## actionsOnCampaign

```javascript
try {
  const response = await zott.ads.actionsOnCampaign({
    id: [campaignId],
    action: "pause",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getListCampaigns

```javascript
try {
  const response = await zott.ads.getListCampaigns();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getAds

```javascript
try {
  const response = await zott.ads.getAds();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## generateAd

```javascript
try {
  const response = await zott.ads.generateAd({
    url: "https://example.com",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```
