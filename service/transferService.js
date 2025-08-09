const { transfers } = require('../model/transferModel');
const { users } = require('../model/userModel');

function transfer({ from, to, amount }) {
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) throw new Error('Usuário não encontrado');
  if (recipient.favorecido !== true && amount >= 5000) {
    throw new Error('Transferência acima de R$ 5.000,00 só para favorecidos');
  }
  const transferObj = { from, to, amount, date: new Date() };
  transfers.push(transferObj);
  return transferObj;
}

function getTransfers() {
  return transfers;
}

module.exports = { transfer, getTransfers };
