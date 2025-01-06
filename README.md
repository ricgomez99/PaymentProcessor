# Frontend Application for Payment Processor

## Description
This frontend application is part of a project designed to facilitate the purchase of products through an integrated payment system. The app provides the following key functionalities:

1. **Product Listing:** Displays a list of available products.
2. **Payment Information Input:** Allows users to enter their payment method details.
3. **Order Summary:** Displays a summary of the order, including product details and shipping information.
4. **Payment Completion:** Processes the payment through a payment gateway using test information (no real charges).
5. **Stock Update:** After completing the payment, the user is redirected to the product listing page, where the stock of the purchased product is updated.

## Features
+ Responsive Design: The application is optimized for various screen sizes, providing a seamless experience on mobile, tablet, and desktop devices.
+ Payment Gateway Integration: Simulates payment processing using test card details.
+ Dynamic Stock Management: Ensures that product stock is accurately updated after each successful purchase.
+ User-Friendly Interface: Simplifies the checkout process with clear navigation and forms.

## Getting Started
### Prerequisites

Make sure you have the following installed on your system:

+ `Node.js (v16 or higher recommended)`
+ **npm or yarn**

## Installation
1. **Clone the repository:**

```bash
git clone https://github.com/your-repository/frontend-app.git
cd frontend-app
```

2. **Install dependencies:**

`npm install`
### or
`yarn install`

## Running the Application
1. **Start the development server:**

`npm run dev`
### or
`yarn dev`

2. Open your browser and navigate to `http://localhost:5173`.

## Payment Testing
To test the payment process, use the following test credit card number provided by the payment gateway:

+ **Card Number:** `4242-4242-4242-4242`

>[!NOTE]
>Don't use '-' or any similar character

+ **Expiry Date:** Any future date (e.g., `12/03/30`)

+ **CVV:** Any 3-digit number (e.g., `123`)

>[!NOTE]
>The payment is simulated, and no real charges will be made.

## Technologies Used

+ **React:** For building the user interface.
+ **TypeScript:** Ensures type safety and code reliability.
+ **Vite:** Fast build tool for modern web projects.
+ **Tailwind CSS:** For rapid UI development.
+ **React Query:** Manages server state and data fetching.
+ **Axios:** Handles HTTP requests.

