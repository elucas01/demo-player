import Inferno from 'inferno';
import InfernoServer from 'inferno-server';
import http from 'http';
import fs from 'fs';

http.createServer(function(req, res){
	console.log(req.url);
	if (req.url == '/'){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(InfernoServer.renderToString(
			<html>
				<head>
					<title>Hello</title>
					<meta charset="UTF-8" />
					<meta name="description" content="Demo Player" />
					<meta name="keywords" content="JavaScript,Demo" />
					<meta name="author" content="Ray Lucas" />

					<link rel="stylesheet" type="text/css" href="main.css" />
				</head>

				<body>
					<div class="sidebar">
						<a href="#">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#">4</a>
					</div>
					<h1>Hello World</h1>
				</body>
			</html>
		));
	} else if (req.url == "/main.css"){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/css');
		fs.readFile(__dirname+"/main.css", (err, data) => {
		  if (err) throw err;
		  res.end(data);
		});
	}
}).listen(8080, function(err){
	if (err) throw err;
	console.log("Listening on port 8080");
});
