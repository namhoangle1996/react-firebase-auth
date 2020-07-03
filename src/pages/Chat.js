import React, {useRef} from 'react'
import {signOut, verifyEmail} from './../helpers/auth'

export default function Chat({userInfo}) {
    let btnVerifyEmailRef = useRef();
    const handleSignOut = async () => {
        await signOut() ;
    };
    const handleVerifyEmail = async (event)=> {
        if(btnVerifyEmailRef.current) {
            await verifyEmail();
            btnVerifyEmailRef.current.setAttribute("disabled", "disabled");
        }
    }

    return <div>
        {userInfo?.displayName ? (<h1>Hello : {userInfo.displayName}</h1>) : (
            <>
                <h1>Xin chào: {userInfo?.email}
                    <button ref={btnVerifyEmailRef} onClick={(event) => handleVerifyEmail(event)}> Bạn hãy xác thực email nhé :) </button>
                </h1>
            </>
        ) }
        <button onClick={()=> handleSignOut()}>Sign out</button>
    </div>
}
