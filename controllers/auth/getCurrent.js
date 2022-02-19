const { Auth } = require('../../models')

const getCurrent = async (req, res) => {
    const { _id } = req.user;
    const currentUser = await User.findById(_id);
    const { name, email, balance } = currentUser;

    res.json({
        status: 'success',
        code: 200,
        data: {
            name,
            email,
            balance
        }
    });
}

module.exports = getCurrent