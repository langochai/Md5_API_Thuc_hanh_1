module.exports = (req, res) => {
    const editJsonFile = require("edit-json-file");
    let file = editJsonFile("./mock-api/users/GET.json")
    file.set(req.body.id.toString(),{
        id: req.body.id,
        name: req.body.name,
        birthday: req.body.birthday
    })
    file.data.splice(-2,1)
    file.save()
    return res.status(201).json({
        id: req.body.id,
        name: req.body.name,
        birthday: req.body.birthday
    });
};