const { Ad } = require('../../models/advert/advert');
const ctrlWrapper = require('../../helpers/ctrlWrapper');

const addNewAd = async (req, res) => {
  const checkedPrice = req.body.price.startsWith('0')
    ? Number(price.toString().substring(1))
    : Number(req.body.price);

  const [latStr, lngStr] = req.body.position.split(', ');
  const position = { lat: Number(latStr), lng: Number(lngStr) };

  let result = await Ad.create({
    ...req.body,
    image: req.file.path,
    price: checkedPrice,
    position,
  });

  res.status(201).json(result);
};

module.exports = ctrlWrapper(addNewAd);
