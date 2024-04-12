import React from "react";
import { Link, useParams } from 'react-router-dom';

const data= {
    Kce: {
        name: "권채은",
        description: "파드 3기 파디"
    }
}

function Profile() {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {
                profile ?(
                        <div>
                            <h2>{profile.name}</h2>
                            <p>{profile.description}</p>
                        </div>
                    )
                    : (<p>존재하지 않는 프로필입니다.</p>)
            }

        </div>
    );
}

export default Profile;