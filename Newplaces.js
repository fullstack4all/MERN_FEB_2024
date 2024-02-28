import React from "react";
import { useParams } from "react-router-dom";
import UserPlaces from '../components/UserPlaces'

const DummyPlaces = [{
    id:Math.random().toString(),
    place: 'https://hblimg.mmtcdn.com/content/hubble/img/paro/mmt/destination/m_paro-landscape_l_400_640.jpg',
    name: 'Paro',
    country: 'Bhutan',
    creator: 'u1',
},
{
    id:Math.random().toString(),
    place: 'https://www.holidify.com/images/bgImages/PARIS.jpg',
    name: 'LONDON',
    country: 'London',
    creator: 'u2'
},
]

const AddPlaces = ()=>{
    const Userid = useParams().uid
    const locadata = DummyPlaces.filter(place => place.creator === Userid)
    return (<UserPlaces list={locadata} />)

}
export default AddPlaces