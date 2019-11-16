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

router.route('/:id').get((req, res) => {
  Resource.findById(req.params.id)
    .then(resource => res.json(resource))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Resource.findByIdAndDelete(req.params.id)
    .then(() => res.json('Resource deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Resource.findById(req.params.id)
    .then(resource => {
      resource.type = req.body.type;
      resource.name = req.body.name;
      resource.addressNumber = req.body.addressNumber;
      resource.streetName = req.body.streetName;
      resource.phoneNumber = req.body.phoneNumber;

      resource.save()
        .then(() => res.json('Resource updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;