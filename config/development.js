export.default = {
	"port": 4000,
	"noindex": true,
	"readonly": false,

	"webservice": {
		"database": process.env.MONGODB_URI,
		"host": "0.0.0.0",
		"port": 3000,
		"cron": "0 30 0 * * *"
	}
}