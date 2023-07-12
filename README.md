# Vinland
An e-commerce site using next.js, tailwindcss, nextAuth, postgres and stripe

**Link to project:** https://vinland.vercel.app/

![image](https://github.com/4orrest/Vinland/assets/76661750/7c119e0c-b1b4-4c98-9565-49e92ad470b4)

## Other tech used:
<ul>
  <li>Prisma</li>
  <li>Zustand</li>
  <li>Stripe payment intents</li>
  <li>Framer-Motion</li>
  <li>Daisy-UI</li>
  <li>Lottie Animations</li>
  
</ul>


## How to checkout
if you'd like test checking out & viewing the dashboard pages for your completed orders, see the picture below for what to put into the fields:
![image](https://github.com/4orrest/Vinland/assets/76661750/0535b1bb-27ed-4f94-8705-40364f30d643)

(make sure you're checking out with card, google pay and cash app are prohibited for a staging stripe application)


## Viewing your dashboard
once you've checked out, you can press the "Check your order" prompt beneath the dancing disco kid gif 

you'll be redirected to your orders page
![image](https://github.com/4orrest/Vinland/assets/76661750/9054c2a7-8187-47ca-83af-5eceba0a5a98)

**A quick note on order status**

currently debugging an common issue for nextJS + stripe users involving payment intents webhooks not updating once an order is marked as successful

here's the issue being discussed
(https://github.com/vercel/next.js/issues/49739)

in the meantime, successful orders will show as pending
