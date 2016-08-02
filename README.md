# volvox-restify-consul-sample
volvox.js restify and consul sample

![](https://avatars3.githubusercontent.com/u/16361502?v=3&s=200)  

### Sample
```js
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
```
