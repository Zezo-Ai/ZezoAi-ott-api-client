# Countries

## init

```javascript
try {
  const response = await zott.countries.init();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## create

```javascript
try {
  const payload = {
    name: "India",
    country_code: "IN",
    phone_code: "+91",
  };
  const response = await zott.countries.create(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const payload = {
    id: ["id1", "id2"],
  };
  const response = await zott.countries.delete(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## get

```javascript
try {
  const query = {
    page: 1,
    limit: 10,
  };
  const response = await zott.countries.get(query);
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
  const response = await zott.countries.getManage(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
