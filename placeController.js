let Dummy_Places = 
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

const updateplace = (req, res, next)=>{
    const {title, description} = req.body;

    const placeId = req.params.pid;

    const updatedPlace = {...Dummy_Places.find( p => p.id ===placeId)};
    const placeIndex = Dummy_Places.findIndex(p => p.id === placeId);

    updatedPlace.title = title;
    updatedPlace.description = description;

    Dummy_Places[placeIndex]= updatedPlace

    res.status(200).json({place:updatedPlace})
}

    const deletePlace = (req, res, next)=>{
        const placeId = req.params.pid;
        Dummy_Places = Dummy_Places.filter(p => p.id !== placeId)
        res.status(200).json({message: 'place deleted'})
    }

exports.createPlace = createPlace
exports.updateplace = updateplace
exports.deletePlace = deletePlace