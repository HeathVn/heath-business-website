import Services from '../models/services.js'

export const getServices = async (re, res) => {
    try{
      const services = await Services.find();

      console.log(services);

      res.status(200).json(services);

    }catch(error){
        res.status(404).json({message: error.message});
    }
}