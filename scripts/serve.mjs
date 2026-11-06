import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.csv':'text/csv; charset=utf-8'};
const server=http.createServer(async(req,res)=>{try{let name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(name.endsWith('/'))name+='index.html';if(name.split('/').some(x=>x.startsWith('.'))||name.includes('node_modules')){res.writeHead(404);res.end('Not found');return;}const file=path.resolve(root,'.'+name);if(!file.startsWith(root+path.sep))throw Error('Invalid path');const body=await fs.readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]??'application/octet-stream'});res.end(body);}catch{res.writeHead(404);res.end('Not found');}});
server.listen(Number(process.env.PORT??4173),'127.0.0.1',()=>console.log('Local: http://127.0.0.1:'+server.address().port));
