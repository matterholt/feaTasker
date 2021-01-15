<script>
export let teamMembers;

export let assignTechInCharge = () => {};

let choosenTic = "";
</script>


    <select name="tic" id="tic" 
    bind:value={choosenTic}
    on:change={()=>assignTechInCharge(choosenTic)}>
      <option  value="none">NONE</option>
      {#each teamMembers as member}
        <option value={member}>{member}</option>
      {/each}
    </select>