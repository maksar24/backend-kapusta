const { Auth } = require('../../models')

const getCurrent = async (req, res) => {
    console.log(req)
  const { name, email } = req.user
    res.json({
        status: 'success',
        code: 200,
        data: {
            user: {
                name,
                email
            }

        }
    })
}

module.exports = getCurrent