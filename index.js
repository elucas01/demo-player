var server = require("serve-me")({
	debug: true,
	log: true,
	directory: "./www"
});	

server.start(8080);
