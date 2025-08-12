# Blogs

## create

```javascript
try {
  const payload = {
    title: "title",
    slug: "slug",
    blog_content: "content",
  };
  const response = await zott.blogs.create(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const payload = {
    title: "title",
    slug: "slug",
    blog_content: "content",
  };
  const response = await zott.blogs.update("blogId", payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## action

```javascript
try {
  const payload = {
    ids: ["blogId", "blogId"],
    action: "private",
  };
  const response = await zott.blogs.action(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.blogs.delete(["blogId"]);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getList

```javascript
try {
  const query = {
    page: 1,
    limit: 10,
  };
  const response = await zott.blogs.getList(query);
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
  const response = await zott.blogs.getManage(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## get

```javascript
try {
  const payload = {
    slug: "slug",
  };
  const response = await zott.blogs.get(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
