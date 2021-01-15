<script>
  import RequestForm from "./RequestForm.svelte";
  import ProjectList from "./ProjectList.svelte";

  let User = {
    name: "Sam Wise",
    projects: ["project_one", "project_three", "project_ten"]
  };

  let teamMembers = ["Sam Wise", "Jimithy S", "Steve Austin"];

  let modalStatus = "";

  export let RequestQueue = [
    {
      id: 1,
      project: "secret project",
      requester: "Sammy",
      description: "make things better off",
      purpose: "Improve analysis results",
      tic: ""
    },
    {
      id: 2,
      project: "secret project",
      requester: "Sammy",
      description: "added lots of holes",
      purpose: "Reduce wieght",
      tic: ""
    }
  ];

  function modaleHandler(action = "") {
    modalStatus = action;
  }

  function submitNewRequest(requestSpec) {
    const newRequest = { ...requestSpec, id: RequestQueue.length + 1 };

    RequestQueue = [...RequestQueue, newRequest];
    modaleHandler();
  }
  const tempClose = requestId => {
    console.log(`Delete item with id:${requestId}`);
    RequestQueue = RequestQueue.filter(item => item.id != requestId);
  };

  function assignTic() {
    console.log("assign tec");
  }
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
	<h1>Hello CodeSandbox</h1>
  <button on:click={()=>modaleHandler("addRequest")}>Add Request</button>
  {#if modalStatus === "addRequest"}
  <RequestForm
   {User} 
   on:addNewRequest={(e)=> submitNewRequest(e.detail)}
   closeModal={modaleHandler}
   />
   {/if}
  <ProjectList 
  on:setTic={(e)=> assignTic(e.detail)}

  {RequestQueue} 
   {teamMembers} 
   removeRequst={tempClose}/>
</main>