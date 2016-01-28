export default class CustomerController {
    index(req, res, next) {
        res.send({
            customerName: "Test customer",
            customerId: 666
        });

        next();
    }
}