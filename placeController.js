const Dummy_Places = 
[{
    id:'p1',
    title:'New Delhi',
    description:"Nice Place",
    addresss:"India",
    creator:'u1'
}]

const createPlace = (req, res, next)=>{
    const {title, description , addresss , creator} = req.body;

    const createdPlace = {
        title,
         description ,
          addresss ,
           creator
    }
    Dummy_Places.push(createdPlace);
    res.status(201).json({place:createdPlace})
}

exports.createPlace = createPlace