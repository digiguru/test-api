const lookup = {
    "a": [[1,4],[1,3],[1,2],[2,1],[3,1],[4,2],[4,3],[4,4],[2,3],[3,3]],
    "b": [[2,4],[2,3],[2,2],[3,1],[4,1],[5,2],[5,3],[5,4],[3,3],[4,3],[3,5],[4,5],[5,5]],
    "c": [[1,4],[1,3],[1,2],[2,1],[3,1],[4,2],[4,3],[4,4],[2,5],[3,5],[4,5]],
    "d": [[2,4],[2,3],[2,2],[3,1],[4,1],[5,2],[5,3],[5,4],[3,5],[4,5],[5,5]],
    "n": [[1,4],[1,3],[1,2],[2,1],[3,1],[4,2],[4,3],[4,4],[2,5],[3,5],[4,5],[2,6],[3,6],[4,6]]
}
/**
 * @swagger
 * /api/a:
 *   get:
 *     description: Returns the data in a stream
 *     responses:
 *       200:
 *         description: [[1,1],[1,2], ... ,[n,n]]
 */
export default function handler(req, res) {
    const { id } = req.query
    if (id.length === 1) {
        const result = lookup[id];
        if (result) {
            res.status(200).json({data:result})
        } else {
            res.status(400).end(`No data for: ${id}`)
        }
    } else {
        res.status(413).end(`Too much data: ${id}`)
    }
}