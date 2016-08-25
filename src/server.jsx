import Inferno from 'inferno';
import InfernoServer from 'inferno-server';
import createClass from 'inferno-create-class';

import express from 'express';
import path from 'path';

var List = createClass({
	render: function(){
		return (
			<ul>
				{
					this.props.list.map(function(item){
						return <li>{item}</li>;
					})
				}
			</ul>
		);
	}
});

var Sidebar = createClass({
	render: function(){
		return (
			<div class="sidebar">
				{
					this.props.links.map(function(link){
						return <a href="#">{link}</a>;
					})
				}
			</div>
		);
	}
});



var app = express();
console.log(__dirname);
app.use('/', express.static(path.join(__dirname, '/../static')));

app.get('/', function(req, res){
	res.send(InfernoServer.renderToString(
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="main.css"></link>
			</head>
			<body>
				<div>
					<Sidebar links={["Home", "About", "Settings", "Other stuff"]}></Sidebar>
					<div>
						Hello World!
					</div>
				</div>
			</body>
		</html>
	))
});

app.listen(8080, function(){
	console.log("Listening on port 8080");
})
