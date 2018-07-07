const transactionsModel = require('../models/transactions')

function getAll(req, res, next) {
  transactionsModel.getAll()
  .then(transactions => {
    res.status(200).send({ transactions })
  })
  .catch(next)
}

function getOne(req, res, next) {
  transactionsModel.getOne(req.params.id)
  .then(transaction => {
    res.status(200).send({transaction})
  })
  .catch(next)
}

function create(req, res, next) {
  const { owner_id, renter_id, parcel_id, price } = req.body
  transactionsModel.create(owner_id, renter_id, parcel_id, price)
  .then(transaction => {
    res.status(200).send({transaction})
  })
  .catch(next)
}

function remove(req, res, next) {
  const date = new Date()
  transactionsModel.remove(req.params.id, date)
  .then(({id, ...transaction}) => {
    res.status(200).send({transaction})
  })
  .catch(next)
}

function edit(req, res, next) {
  const { owner_id, renter_id, parcel_id, price } = req.body
  transactionsModel.edit(req.params.id, owner_id, renter_id, parcel_id, price)
  .then(({id, ...transaction})=>{
    res.status(200).send({transaction})
  })
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  remove
}
