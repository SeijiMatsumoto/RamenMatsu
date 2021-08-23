# Ramen Matsu

## Website
  > A website for a ramen restaurant called Ramen Matsu.

  > View the current state of this project at: [ramenmatsu.netlify.app](https://ramenmatsu.netlify.app)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d6bb904c-2349-4778-a184-ff9ce7979dbb/deploy-status)](https://app.netlify.com/sites/ramenmatsu/deploys)

## Summary
  > The original website for Ramen Matsu was built with Square's website builder, which featured a different modules you can place onto the page.
  > After setting it up and maintaining it for the past year, I found it to be very limited in capability and had small issues that I wish were customizable.
  > My solution was to build my own website from scratch - following my vision of what the website should actually look like.

## Features
* Home page with general information and an order page
* Connects with Square's API to allow for ordering and payment processing
* Mobile-friendly design

## Technologies
* React with hooks
* Styled Components
* Mobile-friendly design


## API Reference
#### Get all items
```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)


