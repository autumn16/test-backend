const admin = require('firebase-admin')

let setting = {
  "type": "service_account",
  "project_id": "admin-backend-2f563",
  "private_key_id": "5e94379120ed2a6174d22b5a8159a0a3aa629a71",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDcEcVir1jgS5n/\nJje43NmxNiPLt9/a6C3HMIVjhLnrS/iazZBi4NVACKC5fQVZYJfqzkKrMvnsh9KC\nxaT8atQVnNq05PXNoxyZ7Sw7Gwzm15TFGj965dZsKZRXanS3mKAejrhcwLvN+oCl\n+UGapYUwojZgSpc7fyGwrscP9T72WftLNkmRSl19iaepY68zGL25+t2kWRwgJobK\nsDJkDagRasi9V4hcrUTR+1b/8L/dCfewvlyiuoYBKgvC0qnnaxVQ/+5JwGQ7RK8A\nMDFy8fUxC6Rk3HbfRYtEPENCxmOFeURBcWnyMV9eBA+EEQzMgpJezqNpawOcIv0A\nuu+bltrhAgMBAAECggEAAlP+jONGnxxToywvBJnTBH26chc2Uzs3sULTVWy/+AQW\nK6KTNYWUAfT5aM7wl5wGzWdMU6Hy3IiJDsS7IKe7acVel7Fwo4HXTY5RlIg+KiLD\nllR3UZQ1ARDNSsGzvYW8A2i+fO41yml9EwxskA+SVbPwm/MMD6dCFqu5q8K8HVhs\nMHXMOaTV57MWnqkUuRyWHPOotZFGi1JFFKT0gv+HFrBLQFGZHmnOpl26VnNejjUw\n9HDFjYOtzcXtFghG42wCi2U0lcXgvWOy1CPTmar23HTl0mJAiaM08r5ft3dIAtT/\nMzYcoFG89S7lp2vO2D5ilJpFstVPJ+tPBokv4kutgQKBgQD9uBQ7cjarnTO3ows4\n9bkYAn0h5N/0OW1shWeB5ptA/6xjdSGyc6RCDdMZvfsqF3wOFfaHundkJYHBlsSF\nOvajovCgPRUmUeBDDUbUHF+pf3db1o7pWD0ZWZ7zl6ZmYfB5shogKUWqr/EmbJKD\nQ6pzRshHtx/C8wdJRWNBVM4dIQKBgQDeDD/HqfVsB80D/MNyUI1fl8Y63j3INXCy\nut/QMV5W1ckIlXXmJxhbb4fSHJD8yObc4ugkjtH1INQS5LoN+/LaQaoMK7682vID\nvmwCtuWMjEJqpyc/+zUvFDJiWepjVK/NvKpnjq0/bbfElLRTSHcTZeWdf3ljhAkZ\nTsDIYjlFwQKBgQCs3nhCjK49Pa3YKCnkVGAZwNBbgKMqttocf8SnmGUd41YkqdEc\n0ngPXXYA6xWvdzLaMhK4Jc9lF70SFtStZiBYHBPRSe0YH98qMGia6v4u8Z90nnre\n+HUgyZRoqmIBDigX8sakNRq3kos/P+iPsVH4mziozFfCr22+eZ2IDO0moQKBgCM+\nSnlEbqHA8zdozRS92FKN4nbBg4jdgo+7vX5r949My2XDYz0ug10v7Jzaz+BvesUg\ndrwmtwhzN3XwO9+wV7Fwrq7T2qhbEAKsHLSplvGh6YDIGyC6nIxmZkDaCKvPaz/6\nbAmXycPBhGN9PsnhPJUlnTZMX1X+RPtxVoP3oyOBAoGAS/CSo3hjbHYGZ+odrXcC\n37G4lsj97QYOovxTwuzsprqvV0PmauEHwii66Tmh0LRnACDzW/XEPPCfugVJXSEu\ndcLv51o7A900zzCGW5UwetiFNoX5xNBnQ0U0B5jGqbErFFZj7O69tYWt/NVozkpp\ntJtuflqFR4HXRsJMSQ6Q4RM=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-bie36@admin-backend-2f563.iam.gserviceaccount.com",
  "client_id": "101125357040109501081",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bie36%40admin-backend-2f563.iam.gserviceaccount.com"
}


admin.initializeApp({
  credential: admin.credential.cert(setting),
  databaseURL: "https://admin-backend-2f563.firebaseio.com"
});

module.exports = admin