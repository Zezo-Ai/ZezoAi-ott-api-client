# Coupon

## create

```javascript
try {
  const response = await zott.coupons.create({
    name: "test",
    description: "test description",
    coupon_code: "TEST",
    discount: 10,
    max_uses: 10,
    type: "percentage",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const response = await zott.coupons.update({
    name: "test",
    description: "test description",
    coupon_code: "TEST",
    discount: 10,
    max_uses: 10,
    type: "percentage",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.coupons.delete(["id"]);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## action

```javascript
try {
  const response = await zott.coupons.action({
    action: "active",
    id: ["id"],
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getManage

```javascript
try {
  const response = await zott.coupons.getManage({
    page: 1,
    limit: 10,
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```
