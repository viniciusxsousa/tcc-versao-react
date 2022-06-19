const TaskModel = require('../model/TaksModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {

   const macaddress = req.body.macaddress;
   const type = req.body.type;
   const title = req.body.title;
   const description = req.body.description;
   const when = req.body.when;

   if (!macaddress) {
      return res.status(400).json({ error: "O macaddress é obrigatório." });
   } else if (!type) {
      return res.status(400).json({ error: "O tipo é obrigatorio." });
   } else if (!title) {
      return res.status(400).json({ error: "O título é obrigatorio." });
   } else if (!description) {
      return res.status(400).json({ error: "A descrição é obrigatorio." });
   } else if (!when) {
      return res.status(400).json({ error: "A data e hora são obrigatorios." });
   } else {
      let exist;

      if (req.params.id) {
         exist = await TaskModel.findOne({
            '_id': { '$ne': req.params.id },
            'when': { '$eq': new Date(when) },
            'macaddress': { '$in': macaddress }
         });
      } else {
         if (isPast(new Date(when))) {
            return res.status(400).json({ error: "Escolha uma data e hora futura." });
            exist = await TaskModel.findOne({
               'when': { '$eq': new Date(when) },
               'macaddress': { '$in': macaddress }
            });
         }

         if (exist) {
            return res.status(400).json({ error: 'Já existe uma tarefa nesta data.' });
         }
      }
      next();
   }
}

module.exports = TaskValidation;