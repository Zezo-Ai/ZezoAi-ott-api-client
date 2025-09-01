# Upload

## init

```javascript
try {
  const response = await zott.upload.init("test.mp4");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getUrls

```javascript
try {
  const payload = {
    file_key: "test.mp4",
    upload_id: "id",
    parts: 1,
  };
  const response = await zott.upload.getUrls(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## finalize

```javascript
try {
  const payload = {
    file_key: "test.mp4",
    upload_id: "id",
  };
  const response = await zott.upload.finalize(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## uploadFile

```javascript
try {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", campaignId);
  const response = await zott.upload.uploadFile(formData);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
