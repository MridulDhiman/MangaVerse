import React from 'react'
import {auth} from "../../config/firebase";
import { signOut,deleteUser } from 'firebase/auth';

export default function Dashboard({user, setSignedOut}) {
    const onSignOut = async () => {
        try {
            await deleteUser(user);
            setSignedOut();
        }
        catch(err) {
            console.error(`This is my error message: ${err?.message}` )
        }
    }
  return (
    <>
     <div>{`Hello ${user?.displayName}. Welcome to the Dashboard`}</div>
    <button onClick={onSignOut}>Logout</button>
    </>
   
  )
}
