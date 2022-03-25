import {rest}from 'msw'


const name= "James"
const activeAssignedProjects =[
  {projectId:100,projectCode:"XYZ",partType:"Front Side"},
  {projectId:110,projectCode:"1x2y",partType:"Sus Side"},
  {projectId:120,projectCode:"AAB",partType:"Rear Side"},

]
const currentActiveProject = "XYZ"




export const handlers =[

    rest.get('/assignProjects',(req,res,ctx)=>{
        
        
        const isAuthenticated = sessionStorage.getItem('is-authenticated');

        // if(!isAuthenticated){
        //     return res(
        //         ctx.status(403),
        //         ctx.json({
        //             errorMessage:"Not authorized",
        //         }),
        //     )
        // }
        console.log(" FROM THE BACK")

        return res(
            ctx.status(200),
            ctx.json({
                props:{name,activeAssignedProjects,currentActiveProject}
            })
        )


    })

]