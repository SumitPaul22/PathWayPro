import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const CreateUser=mutation({
    args:{
        name:v.string(),
        email:v.string()
    },
    handler:async(ctx,args)=>{
        // if user already exits
        const userData=await ctx.db.query('users')
        .filter(q=>q.eq(q.field('email'),args.email))
        .collect();
        // if not then we add the new user
        if(userData?.length==0){
            const data={
                name:args.name,
                email:args.email
            }
            const result=await ctx.db.insert('users',{
                ...data
            });
 //          console.log(result);
            return data;
        }
        return userData[0]
    }
})