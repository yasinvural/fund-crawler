# TEFAS Web Crawler Project

This is a simple web crawler project designed for a side project. The crawler extracts data from the [TEFAS](https://www.tefas.gov.tr/) website, focusing on Turkish funds for financial analysis.

## Features

- Crawls data from the TEFAS website for Turkish mutual funds analysis.
- Accepts an array of Turkish fund names as input.
- Outputs fund names along with their corresponding prices.

## Request Example

- curl -X POST -H "Content-Type: application/json" -d '{"funds": ["YAY", "GTZ"]}' "https://fund-crawler-nu.vercel.app/getFunds"

## Response Example
{
    "success": true,
    "data": [
        {
            "fundName": "GTZ",
            "price": "2,689702"
        },
        {
            "fundName": "YAY",
            "price": "525,603161"
        }
    ]
}