const Products = require("../model/Products");

//get all Products
const product_all = async(req ,res)=>{
    try {
        const products = await Products.find();
        res.json(products);
        
    } catch (error) {
        res.json({message:error});
    }    
};
//single product
const product_details = async(req ,res)=>{
    try{
        const prodcuts = await Products.findById(req.params.productId);
        res.json(prodcuts);
    }catch(error){
        res.json({message: error});
    }
};
//add new product
const product_create = async(req ,res)=>{

        const products = new Products({
            title:req.body.title,
            price:req.body.price,
            image:req.body.image,
            details:req.body.details
        });
        try{
        const savedProducts = await products.save();
            res.send(savedProducts);            
        }catch(error){
        res.status(400).send(error);
    } 
};

//update product
const product_update = async(req, res)=>{
    try{ 
        const products ={
        title:req.body.title,
        price:req.body.price,
        image:req.body.image,
        details:req.body.details
    };
    
    const updatedProducts = await Products.findByIdAndUpdate(
        { _id: req.params.productId},
        products
    );
        res.json(updatedProducts);            
    }catch(error){
    res.json({message:error});
} 
};
//delete product
const product_delete = async(req ,res)=>{
    try{
        const removeProducts = await Products.findByIdAndDelete(req.params.productId);
        res.json(removeProducts);
    }catch(error){
        res.json({message:error});
    }
};

module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}

