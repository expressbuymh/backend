import orderServices from "../../services/order.service.js"



async function statusDelivered(req, res, next) {
    try {
        let response = await orderServices.delivered(req.params.id)
        return res.status(response.status_code).json({
            success: response.success,
            order: response.order,
            message: response.message
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: [{
                path: "internal",
                message: "internal server error"
            }]
        })
    }

}

export default statusDelivered