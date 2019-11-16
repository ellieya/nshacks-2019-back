const router = require('express').Router();
let Resource = require('../../models/resources');

router.route('/').get((req, res) => {
  Resource.find()
    .then(resources => res.json(resources))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const type = req.body.type;
  const name = req.body.name;
  const addressNumber = req.body.addressNumber;
  const streetName = req.body.streetName;
  const phoneNumber = req.body.phoneNumber;

  const newResource = new Resource({
    type,
    name,
    addressNumber,
    streetName,
    phoneNumber,
  });

  newResource.save()
    .then(() => res.json('Resource added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;