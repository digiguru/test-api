// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/**
 * @swagger
 * /api/:
 *   get:
 *     description:There is nothing
 *     responses:
 *       200:
 *         description: "There is nothing"
 */
export default function handler(req, res) {
  res.status(200).json({ "here": 'there is nothing' })
}
