COMMANDS TO GENEREATE PRIVATE/PUBLIC KEYS FOR JWT AUTHENTICATION USING OPENSSL
PRIVATE KEY: openssl genpkey -algorithm RSA -out private.key -aes256
PUBLIC KEY: openssl rsa -in private.key -pubout -out public.key