# Challenge

**Task**: Build an app to view all payment cards, card details, transactions related to the card, and transaction details of the financial institution 

**Card schema:** 

- cardID
- cardAccount
- maskedCardNumber
- expireDate
- currency (AZN | EUR | USD)
- status (active | blocked)
- balance

**Transaction schema:**

- transactionID
- cardAccount
- cardID
- amount
- currency
- transactionDate
- merchantInfo (store name for example)

Cards, card details, transactions and transaction details views should be implemented. 

**Flow description:**

- User signs in (conditional)

- User should be able to see the list of all transactions related to his institution
- User should be able to use pagination if there are more than 10 transactions (10 transactions for each page)
- User should be able to filter transactions (by cardID, cardAccount, amount, currency and date)
- User should be able to view selected transaction details
- User should be able to navigate to the card details page directly from transaction details page

- User should be able to see the list of all cards related to his institution
- User should be able to use pagination if there are more than 10 cards (10 cards for each page)
- User should be able to filter cards (by cardID, cardAccount, currency and status)
- User should be able to view selected card details
- User should be able to navigate to the transactions page directly from transaction details page (with the cardID filter set)

- User should be able to navigate to the previous pages using breadcrumbs
    
    **!!! States of the page filters should be saved while using breadcrumbs**
    

**Breadcrumbs examples:**

Home / Transactions 

Home / Transactions / {transactionID} 

Home / Transactions / {transactionID} / {cardID}

Home / Cards 

Home / Cards / {cardID} 

Home / Cards / {cardID} / Transactions

Home / Cards / {cardID} / Transactions / {transactionID}
