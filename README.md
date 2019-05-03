# What if i had invested in BTC at some point?

## Description
- [ ] A very little tool that calculates the value fluctuation of a single bitcoin between the current date and a date that the user picks.

## Entity definition
parent
    title (string(length=60))
USD
    code: string(3)
    description: string(40)
    rate: double(16)
    rate_float: float(8)
 sources
 title (string(length=100000)
 url (string(length=100000)

## API definition
 - GUI wireframe: https://wireframe.cc/XdaTFu
 - API: https://api.coindesk.com/v1/bpi/currentprice.json and https://api.coindesk.com/v1/bpi/historical/close.json
