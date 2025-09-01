# Partner

## getRevenueSettings

```javascript
try {
  const response = await zott.partner.getRevenueSettings();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateRevenueSettings

```javascript
try {
  const response = await zott.partner.updateRevenueSettings({
    watchTime: 10, // in minutes
    revenueShare: 10, // in rupees
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## addAccountDetails

```javascript
try {
  const response = await zott.partner.addAccountDetails({
    account_number: "121212121212121212",
    ifsc_code: "121212",
    account_holder_name: "John Doe",
    bank_name: "HDFC",
    qr_code: "qr-code.png",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateAccountDetails

```javascript
try {
  const response = await zott.partner.updateAccountDetails({
    account_number: "121212121212121212",
    ifsc_code: "121212",
    account_holder_name: "John Doe",
    bank_name: "HDFC",
    qr_code: "qr-code.png",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getAccountDetails

```javascript
try {
  const response = await zott.partner.getAccountDetails();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## createRevenueRequest

```javascript
try {
  const response = await zott.partner.createRevenueRequest({
    amount: 100,
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateRevenueRequest

```javascript
try {
  const response = await zott.partner.updateRevenueRequest(id, {
    status: "completed",
  });
} catch (error) {
  console.log(error);
}
```

## getRevenueRequests

```javascript
try {
  const response = await zott.partner.getRevenueRequests();
  console.log(response);
} catch (error) {
  console.log(error);
}
```
