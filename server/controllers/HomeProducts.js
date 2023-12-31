const ProductModel = require("../models/Product")

class HomeProducts{
    async categoryProducts(req,res){
        const {name,page,keyword} = req.params;
        const options = name ? {category: name} : keyword && {title:{ $regex : `${keyword}`, $options:"i"}};
        if(page)
        {
            const perPage = 10; 
            const skip = (page -1)*perPage;            
            try {
                const count = await ProductModel.find({...options}).where("stock").gt(0).countDocuments();
                const response = await ProductModel.find({...options}).where("stock").gt(0).skip(skip).limit(perPage).sort({updatedAt: -1})
                return res.status(200).json({products:response, perPage, count});
            } catch (error) {
                console.log(error.message);
            }
        }
        else
        {
            const response = await ProductModel.find({...options}).where("stock").gt(0).limit(5).sort({updatedAt:-1});
            return res.status(200).json({products:response});            
        }

    }
}

module.exports = new HomeProducts();