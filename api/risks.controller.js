import axios from 'axios';           

export default class ProductsController {
    
    static async apiGetRiskCheck(req, res, next) {
        var data = {"chain_id":"97","address":req.query.id}
        var result = await axios.post('https://www.pipsr.cloud/api/v1/address-security', data, {
            headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
        })
        res.json(JSON.stringify(result.data));
    }
}