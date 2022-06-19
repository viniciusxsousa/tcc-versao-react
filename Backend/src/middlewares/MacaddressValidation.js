const MacaddressValidation = async (req, res, next) => {
    if(!req.body.macaddress){
        return res.status(200).json({error: 'O macaddress é obrigatorio.'});
    } else {
        next();
    }
}

module.exports = MacaddressValidation;