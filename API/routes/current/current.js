const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../../knexfile')['development'])

router.get('/runners', async (req, res) => {
    let cDate = new Date()
    let yy = cDate.getFullYear()
    let mm = cDate.getMonth()+1
    let dd = cDate.getDate()
    console.log(cDate)
    let runnerData = []
    
    let todaysOrders = await knex
        .select('id')
        .from('orders')
        .whereBetween('created_at', [`${yy}-${mm}-${dd} 00:00:00.00000+00`, `${yy}-${mm}-${dd} 23:59:59.00000+00`])
    todaysOrders = todaysOrders.map(i => {
        return i.id
    })
    console.log(todaysOrders)

    let restraunt = await knex
        .select('restraunts.name', 'orders.id')
        .from('orders')
        .join('order_items', 'orders.id', 'order_items.order')
        .join('menu_items', 'order_items.item', 'menu_items.id')
        .join('restraunts', 'menu_items.restraunt', 'restraunts.id')
        .where('orders.id', 'in', todaysOrders)
    let restraunts = []
    restraunt.forEach(i => {
        if (!restraunts.map(i => i.id).includes(i.id)) {
            restraunts.push(i)
        }
    })
    console.log(restraunts)

    let runners = await knex
        .select('users.first_name', 'users.last_name', 'orders.id')
        .from('orders')
        .join('runners', 'runners.id', 'orders.runner')
        .join('users', 'users.id', 'runners.user_id')
        .where('orders.id', 'in', todaysOrders)
    console.log(runners)

    let dropoff = await knex
        .select('dropoff_location', 'estimated_time', 'id')
        .from('orders')
        .where('id', 'in', todaysOrders)
    console.log(dropoff)
    console.log('test')




    
    todaysOrders.map(orderID => {
        let tObj = {}
        tObj.id = orderID
        tObj.restraunts = []
        restraunts.forEach(restrauntObject => {
            if (restrauntObject.id === orderID) {
                tObj['restraunts'].push(restrauntObject.name)
            }
        })
        runners.forEach(name => {
            if(name.id === orderID) {
                tObj.name = `${name.first_name} ${name.last_name}`
            }
        })
        dropoff.forEach(dropTop => {
            if(dropTop.id === orderID){
                tObj.dropOffLocation = `${dropTop.dropoff_location}`
                tObj.dropOffTime = `${dropTop.estimated_time}`
            }
        })
        

        runnerData.push(tObj)
    })
    res.statusCode(200).send(runnerData)
    
})

module.exports = router