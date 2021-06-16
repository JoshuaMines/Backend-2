const houses = require('./db.json');

let id = 4; 

module.exports = {
   getHoses: function(req, res) {
        res.status(200).send(houses);
    },

    createHouses: function(req, res)
        {console.log(req.body) 
        const {id, address, price, imageURL} = req.body;

        const newHouses = {
            id,
            address,
            price, 
            imageURL
        }
         houses.push(newHouse);
         id++;

         res.status(200).send(movies);
    }
}
    deleteHouse: function(req, res)  => 
        houses.deleteHouse(req.params.id)
        .then((result)=>{
            res.status(200).delete(house[i])
    }

   updateHouse: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)