

obj = {}

if (typeof $response == "undefined") {
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    $notification.post("TEST","1",$request.headers)
    obj.headers = $request.headers;
} else {
    const mapping = {
        '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
        'Locket': ['Gold']
    };
    var ua = $request.headers["User-Agent"] || $request.headers["user-agent"]
    obj["body"] = JSON.parse($response.body);
    var ohoang7 = {
        is_sandbox: !1,
        ownership_type: "PURCHASED",
        billing_issues_detected_at: null,
        period_type: "normal",
        expires_date: "2099-12-18T01:04:17Z",
        grace_period_expires_date: null,
        unsubscribe_detected_at: null,
        original_purchase_date: "2024-07-28T01:04:18Z",
        purchase_date: "2024-07-28T01:04:17Z",
        store: "app_store"
    },
        vuong2023 = {
            grace_period_expires_date: null,
            purchase_date: "2024-07-28T01:04:17Z",
            product_identifier: "com.ohoang7.premium.yearly",
            expires_date:  "6666-06-06T06:06:06Z"
        };
    const match = Object.keys(mapping).find(e => ua.includes(e));
    if (match) {
        let [e, s] = mapping[match];
        s ? (vuong2023.product_identifier = s, obj.body.subscriber.subscriptions[s] = ohoang7) : obj.body.subscriber.subscriptions["com.ohoang7.premium.yearly"] = ohoang7, obj.body.subscriber.entitlements[e] = vuong2023
    } else obj.body.subscriber.subscriptions["com.ohoang7.premium.yearly"] = ohoang7, obj.body.subscriber.entitlements.pro = vuong2023;

}



$done(obj);
