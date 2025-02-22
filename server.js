const http = require('http');
const fs = require('fs');
const url = require('url');

let products = JSON.parse(fs.readFileSync('./products.json', 'utf8'));

fs.watchFile('./products.json', () => {
    console.log('products.json file changed. Reloading data...');
    products = JSON.parse(fs.readFileSync('./products.json', 'utf8'));
});

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const method = req.method;

    res.setHeader('Content-Type', 'application/json');

    if (pathname === '/products' && method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(products));
    } 
    else if (pathname.startsWith('/products/') && method === 'GET') {
        const id = parseInt(pathname.split('/')[2]);
        const product = products.products.find(p => p.id === id);
        if (!product) {
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'Product not found' }));
            return;
        }
        res.writeHead(200);
        res.end(JSON.stringify(product));
    }
    else if (pathname === '/products' && method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const newProduct = JSON.parse(body);
            newProduct.id = Date.now();
            products.products.push(newProduct);
            fs.writeFileSync('./products.json', JSON.stringify(products, null, 2));
            res.writeHead(201);
            res.end(JSON.stringify(newProduct));
        });
    }
    else if (pathname.startsWith('/products/') && method === 'PUT') {
        const id = parseInt(pathname.split('/')[2]);
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const updatedData = JSON.parse(body);
            const index = products.products.findIndex(p => p.id === id);
            if (index === -1) {
                res.writeHead(404);
                res.end(JSON.stringify({ message: 'Product not found' }));
                return;
            }
            products.products[index] = { ...products.products[index], ...updatedData };
            fs.writeFileSync('./products.json', JSON.stringify(products, null, 2));
            res.writeHead(200);
            res.end(JSON.stringify(products.products[index]));
        });
    }
    else if (pathname.startsWith('/products/') && method === 'DELETE') {
        const id = parseInt(pathname.split('/')[2]);
        const index = products.products.findIndex(p => p.id === id);
        if (index === -1) {
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'Product not found' }));
            return;
        }
        const deletedProduct = products.products.splice(index, 1);
        fs.writeFileSync('./products.json', JSON.stringify(products, null, 2));
        res.writeHead(200);
        res.end(JSON.stringify(deletedProduct));
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Please see API documentation!!' }));
    }
});

server.listen(5000, () => console.log('Server running on http://localhost:5000'));