const express = require('express')
const db = require(__dirname + '/db_connect')
const router = express.Router()

router.get('/data', (req, res) => {
  let sql = 'SELECT * FROM `memberprofile`'
  db.queryAsync(sql).then(r => {
    return res.json(r)
  })
})

router.post('/insert', (req, res) => {
  const output = {
    success: false,
    data: '',
    message: '',
  }
  let sql = 'INSERT INTO `memberprofile`(`Name`,`Phone`,`Email`) VALUES(?,?,?) '
  db.queryAsync(sql, [req.body.Name, req.body.Phone, req.body.email])
    .then(r => {
      console.log(r)
      return res.json(r)
    })
    .catch(err => {
      output.data = err
      console.log(err)
      res.json(output)
    })
})

router.post('/update/:memberId?', (req, res) => {
  const output = {
    success: false,
    data: '',
    message: '',
  }
  let sql =
    'UPDATE `memberprofile` SET `Name`=?,`Phone`=?,`Email`=? WHERE `memberId`=?'
  db.queryAsync(sql, [
    req.body.Name,
    req.body.Phone,
    req.body.email,
    req.params.memberId,
  ])
    .then(r => {
      console.log(r)
      return res.json(r)
    })
    .catch(err => {
      output.data = err
      console.log(err)
      res.json(output)
    })
})

router.get('/data/:memberId?', (req, res) => {
  let sql = 'SELECT * FROM `memberprofile` WHERE `memberId`=? '
  db.queryAsync(sql, [req.params.memberId]).then(r => {
    return res.json(r)
  })
})

router.post('/del/:memberId?', (req, res) => {
  let sql = 'DELETE FROM `memberprofile` WHERE `memberId`=?'
  db.queryAsync(sql, [req.params.memberId]).then(r => {
    console.log(r)
    return res.json(r)
  })
})

module.exports = router
