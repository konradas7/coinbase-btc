# What if i had invested in BTC at some point?

## Description
- [ ] A very little tool that calculates the value fluctuation of a single bitcoin value between the current date and a date that the user picks.

## Entity definition
- [ ] The main object is currentprice. It contains:
    - [ ] BPI
        - [ ] EUR
            - Code: String(3)
            - Describtion: String(60)
            - Rate: Int(16)
            - Rate_float: float(16)
        - [ ] USD
            - Code: String(3)
            - Describtion: String(60)
            - Rate: Int(16)
            - Rate_float: float(16)
    - [ ] Disclaimer: String
    - [ ] Time:
        - updated: Date
        - updatedISO: Date
        - updateduk: Date
- [ ] The secondary object is close. It contains:
    - [ ] BPI
        - A dynamic name variable that comes from the selected date: float(16)
    - [ ] Disclaimer: String
    - [ ] Time:
        - updated: Date
        - updatedISO: Date 
            

## API definition
 - The main information that this system GETS is current BTC price and past BTC closing price.
    
   - [ ] GET currentprice
        - GET https://api.coindesk.com/v1/bpi/currentprice/EUR.json
        
       - [ ] 404 status for "Route not found"
    
   -  [ ] GET close
        - GET https://api.coindesk.com/v1/bpi/historical/close.json?start=$startdate&end=$enddate
        
       - [ ] 404 status for "Route not found"
       
   - [ ] POST revenue
        - POST https://api.mockbase.com/v1/rev
        
       - [ ] 429 status for "Too many requests, try again later"
    
   -  [ ] DELETE deleteRevenue
        - DELETE https://api.mockbase.com/v1/drev
        
       - [ ] 400 status for "No value"
        
 ## UI definition
        
 - GUI wireframe: https://wireframe.cc/XdaTFu
