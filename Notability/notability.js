var obj = {
  "data": {
    "processAppleReceipt": {
      "error": 0,
      "subscription": {
        "productId": "com.gingerlabs.Notability.premium_subscription_alt",
        "originalTransactionId": "110001911151613",
        "refundedDate": null,
        "tier": "premium",
        "isInBillingRetryPeriod": false,
        "refundedReason": null,
        "expirationDate": "2025-11-28T13:03:53.000Z",
        "gracePeriodExpiresAt": null,
        "overDeviceLimit": false,
        "expirationIntent": null,
        "__typename": "AppStoreSubscription",
        "user": {
          "id": "40515d11-08cf-44ee-8b97-6a46cb79d1ae",
          "email": "",
          "__typename": "User"
        },
        "status": "canceled",
        "originalPurchaseDate": "2023-11-28T13:03:56.000Z"
      },
      "__typename": "SubscriptionResult"
    }
  }
}

$done({body: JSON.stringify(obj)});