<script lang="ts">
  export let data;
  const { result } = data;
</script>

<ul>
  {#each result as user }    
  <li>
    {`id: ${user.id}   name: ${user.name}`}
  </li>
  {/each}
</ul>