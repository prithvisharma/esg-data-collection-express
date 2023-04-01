function checkUserExists(email) {
    return [
        {
            $match: {
                email: email,
            },
        },
    ]
}

module.exports = { checkUserExists }
