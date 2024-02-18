const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/advert');
const adSchema = require('../schemas/adSchema');

const { uploadCarPhoto, validateBody } = require('../middlewares');

/**
 * @swagger
 * tags:
 *   name: Advertisement
 *   description: Operations related to advertisements
 */

/**
 * @swagger
 * /advertisement:
 *   get:
 *     summary: Get all advertisements
 *     tags: [Ad]
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - _id: "65b909e3a48da347ac46dcb2"
 *                 image: 'https://hk.partnerguesthouse.net/web/image/321169'
 *                 title: 'Нові апартаменти'
 *                 price: 50
 *                 description: "Опис для апартаментів"
 *                 position: { lat: 49.842957, lng: 24.031111 }
 */

router.get('/', ctrl.getAllAd);

/**
 * @swagger
 * /advertisement:
 *   post:
 *     summary: Add a new ad
 *     tags: [Ad]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: byte, formData
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               position:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *                 _id: "65b909e3a48da347ac46dcb2"
 *                 image: 'https://hk.partnerguesthouse.net/web/image/321169'
 *                 title: 'Нові апартаменти'
 *                 price: 50
 *                 description: "Опис для апартаментів"
 *                 position: { lat: 49.842957, lng: 24.031111 }
 */

router.post(
  '/',
  uploadCarPhoto.single('image'),
  validateBody(adSchema),
  ctrl.addNewAd
);

module.exports = router;
