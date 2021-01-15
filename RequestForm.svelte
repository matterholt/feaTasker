<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let closeModal = () => {};

  export let User;

  let requester = User.name;
  let description = "";
  let purpose = "";
  let project = "";

  function handleSubmit() {
    dispatch("addNewRequest", {
      requester,
      description,
      purpose,
      project
    });
  }
</script>

<style>
  form {
    background-color: #696969;
    color: #cecece;
    margin: 24px;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    padding: 20px;
  }
  .modal__container {
    background-color: gray;
    position: fixed;
    top: 20%;
    left: 20%;
    width: 350px;
  }
</style>
<div class="modal__container">
<button on:click={closeModal}>close</button>
<form on:submit|preventDefault={handleSubmit}>

<h2>FEA TASK</h2>

  <label for="requesterName">Requester</label>
  <input type="text" name="requesterName" bind:value={requester}>
  <label for="projectName">Project</label>
  <select 
  name="projectName" id="projectName" 
  bind:value={project}
  >
  <option  value="default">default</option>
  {#each User.projects as project}
    <option value={project}>{project}</option>
  {/each}
  </select>
  
  <label for="requestDescription">Description</label>
  <textarea 
  bind:value={description}
  name="requestDescription" 
  id="requestDescription" 
  cols="20" rows="5"
  ></textarea>
  
  <label for="requestPurpose">Reason for Request</label>
  <textarea 
  bind:value={purpose}
  name="requestPurpose" 
  id="requestPurpose" 
  cols="20" rows="5"></textarea>

  <button type="submit">Submit</button>

</form>

</div>