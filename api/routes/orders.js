const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Orders was created'
    });
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Orders details',
        orderId: req.params.orderID
    });
});

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Orders details',
        orderId: req.params.orderID
    });
});

module.exports = router;