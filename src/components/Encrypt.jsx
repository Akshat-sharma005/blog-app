import React from 'react'
import bcrypt from 'bcryptjs';


 export  const hashPassword=async(password)=>{
        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(password,saltRounds);
        // console.log("hashed password : ",hashedPassword);
            return hashedPassword;
        
    }

export const verifyPassword=async(password,hashPassword)=>{
    const isMatch=await bcrypt.compare(password,hashPassword);
    // console.log(isMatch)
    return isMatch
    
}

