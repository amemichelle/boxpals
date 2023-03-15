# Boxpals

Boxpals is a web-application for groups that love to shop online and receive bulk discounts, but hate the hassle of organizing for several people. By ordering with others in the same locale, people can:

- Reduce their carbon footprint by placing one bulk shipment instead of several smaller deliveries
- Save money by reaching thresholds for additional savings, which would be harder to reach alone.

## Key Features

- Manage your group orders + items purchased across different group orders on the home dashboard.
- Create new group orders & invite other users to participate via email address.
- Add items to group orders + automatically calculate shopping totals.

## Tech Stack

- **Client:** Javascript (React.js), CSS(SASS)

- **Server:** Node, Express, knex.js, axios

- **Libraries:** react-select, react-functional-modal, react-toastify, framer-motion, react-router-dom

- **Database:** mySQL

```
All data/images used in sample data belong to their
respective owners.
```

## Screenshots / How to Use

![screenshot of login screen](https://i.ibb.co/y0K56sD/Screenshot-2023-03-10-at-1-25-11-PM.png)

**Login Page:** Log in to Boxpals through this page using the provided login, or after creating your own account on the /signup page.

\_\_

![screenshot of home page](https://i.ibb.co/D8cbmT5/Screenshot-2023-03-10-at-1-22-15-PM.png)

**Home Page:** View group orders requiring your attention, group orders you manage, and items you are ordering on this page.

\_\_

![screenshot of item detailed view](https://i.ibb.co/y84B0kG/Screenshot-2023-03-10-at-1-22-49-PM.png)

**Item Modal:** View details about the items you are ordering by clicking on their image in the grid.

\_\_

![screeshot of orders page](https://i.ibb.co/N194F79/Screenshot-2023-03-10-at-1-48-17-PM.png)

**Orders Page:** View orders you are participating in and see what you and other people are ordering. You can also view your subtotal for each order.

\_\_

![screenshot of new order page](https://i.ibb.co/vjfz5Cj/Screenshot-2023-03-10-at-1-59-54-PM.png)

**New Order Page:** Allows you to create a new group order and invite your first participant.

\_\_

![screenshot of add itempage](https://i.ibb.co/yXGD7qm/Screenshot-2023-03-10-at-2-24-15-PM.png)

**Add Item Page:** Allows you to add items to any order you are participating in. Builds a preview while you are filling out the form on larger screen sizes.

## Visit Boxpals

~~You can visit Boxpals by going to [https://boxpals.vercel.app/login](https://boxpals.vercel.app/login).  
View sample data by logging in with:~~

```
username: AmeMichelle
password: bananas
```

~~Alternatively, you can sign up by going to [https://boxpals.vercel.app/signup](https://boxpals.vercel.app/signup) and creating an account with your information.~~

```
Update:  Deploy seems to have crashed for reasons I have not yet had time to uncover. 

```
Visit Boxpals by downloading both the client and server repositories, installing the necessary dependencies (listed in the tech stack section), and running both programs via CLI. Login using the information above to view seeded data.

## Lessons Learned & Next Steps

**Lessons**

This project was an opportunity to learn more about some of the concepts that were not used in previous class projects. Specifically I learned a lot about authentication, working with databases, and deployment. Boxpals is my first full-stack project, so I got to learn about things like:

- what should be managed client-side versus server-side
- useful libraries to install
- how to connect a client to a server and a server to a database (and a lot of knex/SQL commands)
- and a lot more!

**Next Steps**

Balancing full time work, extra-curriculars, class, and life with a hard deadline means there are a lot of things left to be implemented in future versions of Boxpals. Some of these things include:

- Making this a full CRUD (Create, Read, Update, Delete) application by adding editing capabilities to both orders and items, as well as adding delete functionality.
- Setting up form validation across the board, so that only data inputted correctly gets added to the back-end.
- Implementing more robust features on the payment side of things, so that it is easier for group order hosts to complete orders.
- Adding a place to see what discounts are being worked towards in a given group order.
