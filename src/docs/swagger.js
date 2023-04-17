const config = require("../config/config");

module.exports = {
	definition: {
		openapi: "3.0.3",
		info: {
			title: "muzic.ng API",
			description: "API server for muzic.ng",
			version: "1.0.0",
		},
		servers: [
			{
				url: `http://localhost:${config.port}`,
				description: "Local server",
			},
			{
				url: "https://muzic-ng-sandbox.onrender.com",
				description: "Staging server",
			},
		],
	},
	apis: ["src/docs/*.js", "src/docs/*.yml", "src/handlers/*.js"],
};
