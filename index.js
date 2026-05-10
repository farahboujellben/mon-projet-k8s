const express = require('express');
const app = express();

const articles = [
  { _id: "1", reference: "123456", designation: "Ecrn 10", prix: 170, marque: "ASUS" },
  { _id: "2", reference: "FR244433", designation: "Cosmétique Femmes", prix: 250, marque: "marque1" },
  { _id: "3", reference: "ABC999", designation: "Nouveau Produit", prix: 99, marque: "TestMarque" },
  { _id: "4", reference: "XYZ123", designation: "Test CI/CD", prix: 50, marque: "Jenkins" },
  { _id: "5", reference: "CI001", designation: "Test Jenkins Auto", prix: 75, marque: "DevOps" }
];

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.listen(3001, () => {
  console.log('Serveur démarré sur le port 3001');
});