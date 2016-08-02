import "babel-polyfill";

import Volvox from 'microphone-core';
import vconsul from 'microphone-consul';
import vrestify from 'microphone-restify';

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
