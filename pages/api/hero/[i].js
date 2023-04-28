import dbConnect from "../../../db/db.connect";
import Hero from "../../../models/Hero"
  
dbConnect();

// get a unique record, edit , delet
export default async (req, res) => {
 
    const {        
        method
           } = req
       
    
    switch (method) {    
        case 'GET':
            try {  
                
                const hero =  await Hero.findById(req.query.i);
                if(!hero){
                    res.status(400).json({success : false})  
                }
                res.status(200).json({success : true, hero : hero})
            } catch (error) {
                res.status(400).json({success : false})                
            }            
            break;

            case 'PUT':
            try {
                const hero =  await Hero.findByIdAndUpdate(req.query.i, req.body, {
                    new : true,
                    runValidators : true
                });
                if(!hero){
                    res.status(400).json({success : false})  
                }
                res.status(200).json({success : true, hero : hero})
            } catch (error) {
                res.status(400).json({success : false})                
            }            
            break;

            case 'DELETE':                            
            try {
                const hero =  await Hero.deleteOne({_id: req.query.i});
                if(!hero){
                    res.status(400).json({success : false})  
                }
                res.status(200).json({success : true, hero : hero})
            } catch (error) {
                res.status(400).json({success : false})                
            }            
            break;
        default:        
        res.status(400).json({success : false})   
            break;
    }
}