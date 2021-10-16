import mongoose from 'mongoose';

const servicesSchema = mongoose.Schema({

        name: String, 
        description:String,
        image:String, 
        price:String
});

const Services = mongoose.model('Services', servicesSchema);

export default Services;