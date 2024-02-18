const { Ad } = require('../../models/advert/advert');
const ctrlWrapper = require('../../helpers/ctrlWrapper');

const getAllAd = async (_, res) => {
  const ad = await Ad.find({}, '-createdAt -updatedAt').sort({ createdAt: -1 });

  res.json({ count: ad.length, advertisement: ad });
};

module.exports = ctrlWrapper(getAllAd);
