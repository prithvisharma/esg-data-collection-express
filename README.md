# ESG DATA COLLECT WITH EXPRESS

## Commands to Generate Private/Public Keys for JWT Authentication using OpenSSL

1. To generate a private key:
   openssl genpkey -algorithm RSA -out private.key -aes256
1. To generate a public key:
   openssl rsa -in private.key -pubout -out public.key

## ENV-SPEC

`.env` should contain following variables:

1. ENV
1. PORT
1. MONGO_DB_URL
1. JWT_PUBLIC_KEY
1. JWT_PRIVATE_KEY
1. JWT_PASS_PHRASE

## Endpoints

-   Login Endpoint

    1.  `/esg-collect/login` : Requires `username` & `password` in `req.body`. Checks for password & user existence then returns a JWT token which is further used to access other endpoints.

-   User Endpoints
    1. `/esg-collect/user/signup` : Requires `{ fullName, phone, email }` in `req.body`. Checks for existing user with same email. Auto generates a password and returns user object in response.
    1. `/esg-collect/user/:username` : Fetches user from data with provided `username` in `req.params`.
-   Report Endpoints
    1. `/esg-collect/report/` : Requires `{ questionId, answer }` in `req.body`. Optional parameter `reportId`, if not provided it generates an UUID else uses it to update existing report. Validates `questionId` & `answer` then does extra computation wrt to `questionId` if any and saves in database.
    1. `/esg-collect/report/upload-attachments/:questionId/:reportId` : Requires `questionId` & `reportId` to attached the uploaded files. Saves attachments as array of filename & filebuffer for given questionId of the report.
    1. `/esg-collect/report/by-report-id/:reportId` : Requires `reportId` in `req.params`, returns respective report from the database.
    1. `/esg-collect/report/by-username/:username` : Requires `username` in `req.params`, returns reports linked to respective user from the database.
    1. `/esg-collect/report/question` : Returns questions and expected sample answers.

Endpoints can be tested using `apis.http` file.
