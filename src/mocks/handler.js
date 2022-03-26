import {rest}from 'msw'


const projectData = [
    {
      id: 1,
      projectId: "100",
      modelName: 'V00R00',
      description: 'Make it better 100',
      modelBase: 'new model',
      status: 'completed',
      priority: 'low',
    },
    {
      id: 2,
      projectId: "100",
      modelName: 'V01R00',
      description: 'improve the quaity and make it lower weight Make it better',
      modelBase: 'V00R00',
      status: 'inProgress',
      priority: 'medium',
    },
    {
      id: 3,
      projectId: "100",
      modelName: 'V02R00',
      description: 'Make it better by adding a bead, increase thickness',
      modelBase: 'V01R00',
      status: 'pending',
      priority: 'high',
    },
    {
      id: 4,
      projectId: "120",
      modelName: 'V03R00',
      description: '120 Make it better by adding a bead, increase thickness',
      modelBase: 'V02R00',
      status: 'pending',
      priority: 'high',
    },
    {
      id: 5,
      projectId: "120",
      modelName: 'V04R00',
      description: '120 Make it better by adding a bead, increase thickness',
      modelBase: 'V02R00',
      status: 'pending',
      priority: 'low',
    },
  ]


const name= "James"
const activeAssignedProjects =[
  {projectId:100,projectCode:"XYZ",partType:"Front Side"},
  {projectId:110,projectCode:"1x2y",partType:"Sus Side"},
  {projectId:120,projectCode:"AAB",partType:"Rear Side"},

]
const currentActiveProject = "XYZ"




export const handlers =[

    rest.get("/project/:projectId",(req,res,ctx)=>{
            const {projectId}= req.params

            const projectCms = projectData.filter(project => project.projectId === projectId)

            return res(
                ctx.status(200),
                ctx.json(projectCms)
            )

    }),

    rest.get('http://assignProjects',(req,res,ctx)=>{
        
        
        // const isAuthenticated = sessionStorage.getItem('is-authenticated');

        // if(!isAuthenticated){
        //     return res(
        //         ctx.status(403),
        //         ctx.json({
        //             errorMessage:"Not authorized",
        //         }),
        //     )
        // }


        return res(
            ctx.status(200),
            ctx.json({
               activeAssignedProjects,currentActiveProject
            })
        )


    })

]