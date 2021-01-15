<script>
  import AssignTech from "./AssignTech.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let RequestQueue = [];
  export let teamMembers = [];

  let choosenTic = "";

  //setTic using dispatch
  function udpateTic(requestId, tic) {
    dipatch("setTic", { choosenTic });
  }

  // example of passing the handler for updates
  export let removeRequst = () => {};
</script>
<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {
    background: linear-gradient(134deg, #c3e6d9, #949cec);
    border-radius: 5px;
    padding: 25px;
    margin: 10px;
  }
  span {
    font-weight: 900;
  }
</style>

{#if RequestQueue.length === 0}
  <h1>NO REQUEST </h1>
  {:else}
  <ul>
  {#each RequestQueue as request}
    <li>
    <AssignTech {teamMembers} assignTechInCharge={(e)=>console.log({e})}/>

      <h3>{request.requester}</h3>
      <p>PROJECT: <span>{request.project}</span></p>
      <p>Description:
      
      <span>
      {request.description}
      </span></p>
      <p>
      Reson for: 
      <span>
      {request.purpose}
      </span>
      </p>
    <button on:click={removeRequst()}>DONE</button>

    </li>
  {/each}
</ul>
{/if}

