API Documentation: Top 100 Cryptocurrency Coins

Introduction:
This API provides information about the top 100 cryptocurrency coins in the world. It retrieves data from the CoinCap API using the "/assets" endpoint. The API requires an API key for authentication, which can be obtained by following the instructions below. The response from the API includes a sorted list of coins based on their growth in the last 24 hours.

Getting Started:
To use this API, you need to generate an API key by following these steps:

1. Open the CoinCap API documentation: [CoinCap API Documentation](https://docs.coincap.io/).

2. Scroll down to the section "Request API Key" and click on the link provided to request your API key.

3. Once you have obtained the API key, you will need to include it in the headers of your API requests.

   - Set the header field "Authorization" to "Bearer YOUR_API_KEY", replacing "YOUR_API_KEY" with the actual API key you generated.

   Example:
   ```
   Authorization: Bearer YOUR_API_KEY
   ```

Endpoint:
GET /api/top-coins

Description:
This endpoint retrieves the list of the top 100 cryptocurrency coins in the world based on their growth in the last 24 hours.

Request Header:
The following header must be included in the API request:

```
Authorization: Bearer YOUR_API_KEY
```

Replace "YOUR_API_KEY" with the actual API key you generated.

Response:
The API response will be a JSON object containing an array of coins. Each coin will have the following properties:

- symbol: The symbol of the coin (string).
- name: The name of the coin (string).
- marketCapUsd: The market capitalization of the coin in USD (string).
- priceUsd: The current price of the coin in USD (string).

Example Response:
```json
[
  {
    "symbol": "BTC",
    "name": "Bitcoin",
    "marketCapUsd": "612315236958.855282421",
    "priceUsd": "32497.8220587040120000"
  },
  {
    "symbol": "ETH",
    "name": "Ethereum",
    "marketCapUsd": "230420593603.961792896",
    "priceUsd": "1957.1970623985100000"
  },
  ...
]
```

Notes:
- The "changePercent24Hr" key mentioned in the CoinCap API documentation is not included in the response schema of this API.
- The coins in the response will be sorted based on their growth in the last 24 hours.

Error Handling:
If an error occurs during the API request, an appropriate error response will be returned with a corresponding HTTP status code.

Conclusion:
The API provides an easy way to retrieve the top 100 cryptocurrency coins and their information. By utilizing the CoinCap API and including the necessary API key in the request headers, you can obtain a sorted list of coins based on their growth in the last 24 hours.

Note: Remember to handle data management in the development phase, as mentioned in the instructions, to avoid conflicts with unique constraints during testing.