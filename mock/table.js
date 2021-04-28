module.exports = {
  'GET /user': (req, res) => {
    res.json({
      name: 'liuwei',
      age: 28,
      city: 'wuhan'
    })
  }
}