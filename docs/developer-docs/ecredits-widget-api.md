# eCredits Widget API

## Introduction

The eCredits Widget API enables online Merchants to accept purchases with the eCredits Cryptocurrency (ECS) from their customers using the eCredits mobile eWallet App available for Android and iOS.

It acts as a backend for the WebWidget shop plugin component which can be integrated into various web shop systems like Magento, WooCommerce, or PrestaShop.

Basically the transaction flow comprises the following steps:

1. Creation of the transaction request
2. Showing the generated QR code in the checkout page of the Merchant's web shop
3. Polling for the status of the transaction request / waiting for the retrieval of a webhook notification upon successful settlement
4. Showing success screen, updating the Merchant's order item (e.g. continue with shipping, etc.)

## Prerequisites

In order to use the API you first need to:

1. Create a Business Profile in the eCredits Portal
2. Purchase a Business Subscription to make that profile active
3. Setup the eCredits Mobile Wallet for the profile by creating a Seed Phrase so an address is generated and funds can be collected there.
4. Set up an API key in the WebWidget section to be used for API authentication.

Once all steps are completed you can authenticate and start creating transaction requests, check their status and eventually receive eCredits into your Business wallet.

## Endpoints

### Swagger

Test: https://widget.api.tst.ecredits.com/swagger/index.html \
Prod: https://widget.api.ecredits.com/swagger/index.html

## Additional Resources

### eSync Network Explorer

Web application to look up transaction hashes and wallet balances.

Test: https://explorer.tst.esync.network/ \
Prod: https://explorer.esync.network

## eCredits Widget API Authentication

The eCredits Widget API uses JWT bearer tokens for API authentication.

To get a valid token a request with the following format must be sent to the **_authentication_** endpoint:

**Request:**

`POST https://widget.api.tst.ecredits.com/api/authentication`

```json
{
  "secret": "VLLXVHVU3BA1FNiwyEtv8CQTxpaCg6t3zcAu9q57vB7dMzghfubu8mUJwsZfhHnw",
  "clientId": "3fa85f34-5717-4562-b3fc-2c963f66afa7"
}
```

REQUEST DATA:

| Parameter | Type   | Mandatory | Description                                          |
| --------- | ------ | --------- | ---------------------------------------------------- |
| secret    | string | yes       | The API key created in eCredits Portal (Web Widget)  |
| clientId  | guid   | yes       | The ID of the business that should receive the funds |

**Response:**

```json
{
  "token": "eyJhbGciOiJIU[...]",
  "expiresAt": "2022-05-09T06:57:44.4906378+00:00"
}
```

RESPONSE DATA:

| Parameter | Type           | Description                                             |
| --------- | -------------- | ------------------------------------------------------- |
| token     | string         | The JWT bearer token to be used for subsequent requests |
| expiresAt | datetime (UTC) | The ID of the business that should receive the funds    |

## eCredits Widget API - Transaction Requests

### Create a Transaction Request

In order to create a transaction request whose QR code can be shown to the customer in the checkout process, and which can be paid with the eCredits eWallet App, a request similar to that below must be sent to the **_requests_** resource:

#### Create Transaction Request - Request

`POST https://widget.api.ecredits.com/api/v1/requests`

```json
{
  "id": "70df7B42-2926-4fa7-8fed-c5805f823167",
  "amountDue": 99.99,
  "currencyCode": "EUR",
  "paymentReference": "OrderId123",
  "generateQrCode": true
}
```

**REQUEST DATA:**

| Parameter        | Type      | Mandatory          | Description                                                                                                                                                                                                            |
| ---------------- | --------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id               | guid      | yes                | Unique identifier of the request                                                                                                                                                                                       |
| amountDue        | decimal   | yes                | The requested amount the shop wants to receive from the Consumer                                                                                                                                                       |
| currencyCode     | string(3) | yes                | The code of the amountDue currency. Currently only ECS and EUR are supported. If set to EUR the conversion to ECS is done automatically                                                                                |
| paymentReference | string    | no                 | The Merchant's reference to correlate the request and the paid transaction to the shop order item                                                                                                                      |
| generateQrCode   | boolean   | no (default false) | Defines whether a base64 encoded QR string should be returned that can be directly embedded into the checkout page                                                                                                     |
| qrCodeType       | string    | no                 | "Basic" or "HtmlEmbedded". Default is "Basic". "HtmlEmbedded" returns the QR code rendered in a HTML element with additional styles and contextual text                                                                |
| testMode         | boolean   | no (default false) | Indicates whether the request is supposed to be paid on the eCredits pub testnet. NOTE: in test mode no real funds are transferred and you must have a wallet on the eCredits public testnet to pay for such requests! |

#### Create Transaction Request - Response

```json
{
  "id": "70df7B42-2926-4fa7-8fed-c5805f823167",
  "fiatCurrencyCode": "EUR",
  "fiatAmountDue": 99.99,
  "amountDue": 9999,
  "currencyCode": "ECS",
  "qrCodeBase64": "R0lGODlh+gD6APcAAAAA[..]",
  "qrCodeHtml": null,
  "qrCodeString": "eCreditsPayment:70df7B42-2926-4fa7-8fed-c5805f823167",
  "href": "https://auth.ecredits.com/payment?code=70df7B42-2926-4fa7-8fed-c5805f823167",
  "paymentReference": "OrderId123",
  "expiresAt": "2022-05-09T06:11:30.4659728+00:00"
}
```

**RESPONSE DATA:**

| Parameter        | Type      | Description                                                                                                                                          |
| ---------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| id               | guid      | Unique identifier of the request                                                                                                                     |
| amountDue        | decimal   | The requested amount the shop wants to receive from the Consumer                                                                                     |
| currencyCode     | string(3) | The code of the amountDue currency. Currently only ECS and EUR are supported. If set to EUR the conversion to ECS is done automatically              |
| fiatAmountDue    | decimal   | The amount the shop wants to receive from the shopper in fiat currency. Will return EUR in case currencyCode was sent with EUR upon request creation |
| fiatCurrencyCode | string(3) | Currency code of the fiat amount. Currently only is EUR supported. Will be set in case currencyCode was sent with EUR upon request creation          |
| paymentReference | string    | The Merchant's reference to correlate the request and the paid transaction to the shop order item                                                    |
| qrCodeBase64     | string    | The string that is encoded in the QR code that is used by the WalletApp upon scanning. Can be used to create your own QR code                        |
| qrCodeHtml       | string    | Contains HTLM with QR code in case qrCodeType was set to "HtmlEmbedded", null in case of "Basic"                                                     |
| href             | string    | Universal link to open the WalletApp on mobile devices as QR code cannot be scanned when browsing the checkout page on the same device               |
| expiresAt        | datetime  | The timestamp after that the request will expire. In such case an entire new request with a new id should be created                                 |

### Check the status of Transaction Requests

#### Get a Transaction Request by ID

**Request:**

`GET https://widget.api.ecredits.com/api/v1/requests/{id}?generateQrCode=true&qrCodeType=HtmlEmbedded`

Example: `https://widget.api.ecredits.com/api/v1/requests/70df7B42-2926-4fa7-8fed-c5805f823167?generateQrCode=true&qrCodeType=HtmlEmbedded`

**REQUEST DATA:**

| Parameter      | Type    | Mandatory          | Description                                                                                                                         |
| -------------- | ------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| id             | guid    | yes                | The ID of the transaction request                                                                                                   |
| generateQrCode | boolean | no (default false) | Defines whether a base64 encoded QR string should be returned that can be directly embedded into the checkout page                  |
| qrCodeType     | string  | no                 | "Basic" or "HtmlEmbedded". "HtmlEmbedded" returns the QR code rendered in a HTML element with additional styles and contextual text |

**RESPONSE DATA:**

Same as for [Create Transaction Request Response](#create-transaction-request---response)

#### Get transactions for a particular request by ID

Allows to retrieve all successful transactions created for a particular transaction request. Usually one transaction per request, however user may send a transaction twice by mistake. The Merchant can create a refund in such situations in the eCredits Web Portal or via the eCredits eWallet App to compensate such overpayments.

**Request:**

`GET https://widget.api.ecredits.com/api/v1/requests/{id}/payments`

Example: `GET https://widget.api.ecredits.com/api/v1/requests/70df7B42-2926-4fa7-8fed-c5805f823167/payments`

REQUEST DATA:

| Parameter | Type | Mandatory | Description                       |
| --------- | ---- | --------- | --------------------------------- |
| id        | guid | yes       | The ID of the transaction request |

**Response:**

A string list of transaction hashes (can be looked up in eSync Network Explorer).

**RESPONSE DATA:**

```json
["Hash1", "Hash2"]
```

#### Check if transaction request is paid

Gives a quick indication whether the transaction request is successfully paid by at least one transaction.

**Request:**

`GET https://widget.api.ecredits.com/api/v1/requests/{id}/paid`

Example: `GET https://widget.api.ecredits.com/api/v1/requests/70df7B42-2926-4fa7-8fed-c5805f823167/paid`

**REQUEST DATA:**

| Parameter | Type | Mandatory | Description                       |
| --------- | ---- | --------- | --------------------------------- |
| id        | guid | yes       | The ID of the transaction request |

**Response:**

A boolean indicating successful transaction/settlement of a particular transaction request.

**RESPONSE DATA:**

`true`

### Webhooks

eCredits supports webhook notifications to allow Merchants to subscribe for **successfully paid** requests (push) in order to not having all pending requests queried from the eCredits API for the last status (pull).

Upon successful settlement of a request there will be a webhook request sent to the shops webhook url in case such a url is configured (must to be set up and configured in the eCredits Web Portal).

`POST https://merchant.com/path/to/webhook`

```json
{
  "requestId": "70df7B42-2926-4fa7-8fed-c5805f823167",
  "status": 1,
  "transactionHash": "0x9c81985ce77c8e9990d854460d14462cd1737136df66efd17f31cdba66e41963",
  "signature": "YWVeYXagBM11lOxqEp09PYt8IskwjKTf+tYNoVjniFs=",
  "testMode": false
}
```

**REQUEST DATA:**

| Parameter | Type    | Description                                                                                                      |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| requestId | guid    | The id of the transaction request                                                                                |
| status    | int     | The status code of the transaction request. Possible values are: Pending (0), Settled (1), Expired(2)            |
| testMode  | boolean | Whether the request was created and paid on the eCredits public testnet. If true no real funds were transferred. |

The possible status codes of a request are listed below:

| Status  | Code | Description                                                                                                                                     |
| ------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Pending | 0    | The request has not been fully paid yet successfully                                                                                            |
| Settled | 1    | The request is paid successfully                                                                                                                |
| Expired | 2    | The request was not paid in time and is expired. A new transaction request should be created if the web shop order is still supposed to be paid |

The webhook page should return a HTTP 200 OK response to indicate it received and processed the notification properly. Failing to do so we reschedule the notification several times until successful response with increasing time interval between the single attempts.

> **WARNING**: Please note that due to this retry-behavior and for client simplicity it is important that the webhook page should have an idempotent behavior be prepared for multiple notifications for the same id!

### Validation of webhook requests

The Merchant is responsible for validating the received webhook notification for authenticity (to guarantee the request originates from eCredits). To do so,the HMAC256 value of the request id should be calculated via the signing secret (configured in the eCredits Portal when setting up the webhook) and compared to value embedded in the request.

It is recommended to not solely rely on the status of the webhook request, instead the request details can be queried once more from the API.

An example method to calculate the HMAC256 value of the webhook request in C# can be found below:

```csharp
private static string CalcHmac256(string text, string key)
{
       using (var hmacSha256 = new HMACSHA256(Encoding.UTF8.GetBytes(key)))
       {
             var hash = hmacSha256.ComputeHash(Encoding.UTF8.GetBytes(text.ToLowerInvariant()));
             return Convert.ToBase64String(hash);
       }
}

Assert.Equal(request.signature, CalcHmac256(request.id, "TheSigningSecretOfTheWebHook"));
```
