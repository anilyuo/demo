const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', function (req, res) {
const { exec } = require('child_process');
const binPath = path.join(process.cwd(), 'bin', '001');

exec(binPath, (err, stdout, stderr) => {
  if (err) {
    return res.send(`${stderr}`);
  }
  return res.send(`${stdout}`);
});
});

app.get('/aws', function (req,res) {
const { exec } = require('child_process');
const binPath = path.join(process.cwd(), 'bin', '002');
exec(binPath, (err, stdout, stderr) => {
  return res.send(`${stdout}`);
});
});

app.get('/docker', function (req,res) {
const { exec } = require('child_process');
const binPath = path.join(process.cwd(), 'bin', '003');
exec(binPath, (err, stdout, stderr) => {
  return res.send(`${stdout}`);
});
});

app.get('/loadbalanced', function (req,res) {
const { exec } = require('child_process');
const binPath = path.join(process.cwd(), 'bin', '004');
exec(binPath + JSON.stringify(req.headers), (err, stdout, stderr) => {
  return res.send(`${stdout}`);
});
});

app.get('/tls', function (req,res) {
const { exec } = require('child_process');
const binPath = path.join(process.cwd(), 'bin', '005');
exec(binPath + JSON.stringify(req.headers), (err, stdout, stderr) => {
  return res.send(`${stdout}`);
});
});

app.get('/secret_word', function (req,res) {
const { exec } = require('child_process');
const binPath = path.join(process.cwd(), 'bin', '006');
exec(binPath + JSON.stringify(req.headers), (err, stdout, stderr) => {
  return res.send(`${stdout}`);
});
});

app.listen(port, () => console.log(`Vast ITES test listening on port ${port}!`))
