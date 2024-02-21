import React from "react";
import UserEvent from "./userEvent";
const NewUser = ()=>{

    const List = [
        {   id :'u1',
            name: 'Ankit',
            age: '23',
            img: 'https://pics.craiyon.com/2023-07-01/aaae17e348474bc3843c3d40ca53c15f.webp',
        },
        {   id :'u2',
            name: 'Ankit',
            age: '23',
            img: 'https://pics.craiyon.com/2023-07-01/aaae17e348474bc3843c3d40ca53c15f.webp',
        },
        {   id :'u3',
            name: 'Ankit',
            age: '23',
            img: 'https://pics.craiyon.com/2023-07-01/aaae17e348474bc3843c3d40ca53c15f.webp',
        },
        
    ]

    return (<UserEvent items={List} />)
}

export default NewUser