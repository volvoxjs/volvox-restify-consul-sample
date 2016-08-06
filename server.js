import "babel-polyfill";

import Volvox from 'volvox-core';
import vconsul from 'volvox-consul';
import vrestify from 'volvox-restify';

import restify from 'restify'

async function main() {
    let server = restify.createServer();
    server.get('/customers', (req, res, next) => {
        res.send({
            customerName: "Test customer",
            customerId: 666
        })
    })
    
    let volvox = new Volvox(vconsul(), vrestify());
    await volvox.bootstrap(server, "customers", "v1");
}

main();
