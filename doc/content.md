# Contents

## getList

```javascript
try {
  const query = {
    page: 1,
  };
  const response = await zott.contents.getList(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## get

```javascript
try {
  const query = qs.stringify(
    {
      slug: "slug",
      ...rest,
    },
    {
      addQueryPrefix: true,
    }
  );
  const response = await zott.contents.get(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getSeasons

```javascript
try {
  const query = qs.stringify(
    {
      id: "id",
      ...rest,
    },
    {
      addQueryPrefix: true,
    }
  );
  const response = await zott.contents.getSeasons(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getIsContentBuyedOrRented

```javascript
try {
  const contentId = "id";
  const response = await zott.contents.getIsContentBuyedOrRented(contentId);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getTvod

```javascript
try {
  const query = qs.stringify(
    {
      ...yourQuery,
    },
    {
      addQueryPrefix: true,
    }
  );
  const response = await zott.contents.getTvod(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateGeoLocation

```javascript
try {
  const payload = {
    content_id: "id",
    countries: ["IN", "US"],
  };
  const response = await zott.contents.updateGeoLocation(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getManage

```javascript
try {
  const query = {
    page: 1,
    limit: 10,
  };
  const response = await zott.contents.getManage(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## create

```javascript
try {
  const payload = {
    name: "string",
    slug: "string",
    type: "movie",
  };
  const response = await zott.contents.create(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## actions

```javascript
try {
  const payload = {
    id: ["id"],
    action: "public",
  };
  const response = await zott.contents.actions(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const payload = {
    name: "string",
    slug: "string",
    type: "movie",
  };
  const response = await zott.contents.update("id", payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## removeTitleImage

```javascript
try {
  const response = await zott.contents.removeTitleImage("contentId");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getSeasonManage

```javascript
try {
  const query = {
    page: 1,
  };
  const response = await zott.contents.getSeasonManage(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## createSeason

```javascript
try {
  const payload = {
    name: "Season 1",
    content_id: "id",
  };
  const response = await zott.contents.createSeason(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## deleteSeason

```javascript
try {
  const response = await zott.contents.deleteSeason("seasonId");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateSeason

```javascript
try {
  const payload = {
    name: "Season 1",
    season_id: "id",
  };
  const response = await zott.contents.updateSeason(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## createEpisode

```javascript
try {
  const payload = {
    name: "Episode 1",
    season_id: "id",
    ...rest,
  };
  const response = await zott.contents.createEpisode(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## deleteEpisode

```javascript
try {
  const response = await zott.contents.deleteEpisode("episodeId");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateEpisode

```javascript
try {
  const payload = {
    name: "Episode 1",
    episode_id: "id",
    ...rest,
  };
  const response = await zott.contents.updateEpisode(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## manageSubtitles

```javascript
try {
  const payload = {
    id: "id",
    action: "add",
    type: "content",
    ...rest,
  };
  const respose = await zott.contents.manageSubtitles(payload);
  console.log(respose);
} catch (error) {
  console.log(error);
}
```

## uploadImages

```javascript
try {
  const payload = {
    content_id: "id",
    image_id: "id",
    type: "create",
  };
  const response = await zott.contents.uploadImages(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## deleteImage

```javascript
try {
  const payload = {
    content_id: "id",
    image_id: "id",
  };
  const response = await zott.contents.deleteImage(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## fetchSearchResults

```javascript
try {
  const query = "avengers";
  const response = await zott.contents.fetchSearchResults(query);
  console.log("Search Results:", response.data);
} catch (error) {
  console.log(error);
}
```

## createImageSize

```javascript
try {
  const payload = {
    name: "string",
    width: 1080,
    height: 720,
  };
  const response = await zott.contents.createImageSize(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## listImageSizes

```javascript
try {
  const response = await zott.contents.listImageSizes();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## deleteImageSize

```javascript
try {
  const response = await zott.contents.deleteImageSize("imageSizeId");
  console.log(response);
} catch (error) {
  console.log(error);
}
```
