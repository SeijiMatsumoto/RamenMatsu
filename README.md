# Ramen Matsu

## Website [![Netlify Status](https://api.netlify.com/api/v1/badges/d6bb904c-2349-4778-a184-ff9ce7979dbb/deploy-status)](https://app.netlify.com/sites/ramenmatsu/deploys)
A website for a ramen restaurant called Ramen Matsu.
View the current state of this project at: [https://ramenmatsu.netlify.app](https://ramenmatsu.netlify.app)
![](https://i.imgur.com/kVP5LGh.png)

![](https://i.imgur.com/k7G7nmg.png =190.5x369)

## Summary
The original website for Ramen Matsu was built with Square's website builder, which featured a different modules you can place onto the page. After setting it up and maintaining it for the past year, I found it to be very limited in capability and had small issues that I wish were customizable. My solution was to build my own website from scratch - following my vision of what the website should actually look like.

## Features
* Home page with general information and an order page
* Connects with Square's API to allow for ordering and payment processing
* Mobile-friendly design

## Technologies
* React with hooks
* Styled Components
* Mobile-friendly design
* Express used to connect to API

## [Square API Reference](https://developer.squareup.com/reference/square/)

#### Get all catalog items
Returns all items from the store's catalog

```http
  GET /v2/catalog/list
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none`    | `N/A`    | `N/A`                      |

#### Get item
Returns specific data for a particular catalog item
```http
  GET /v2/catalog/object/{object_id}
```
| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `object_id`| `string` | **Required**. Id of item to fetch |

#### Get multiple items
Returns multiple data sets for specified catalog items
```http
  GET /v2/catalog/batch-retrieve
```
| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `object_ids`| `array` | **Required**. Ids of items to fetch |
