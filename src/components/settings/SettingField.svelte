<script lang="ts">
  export let legend: string;
  export let buttonLegend: string = legend;
  export let buttonIcon: string | null = null;
</script>

<button>
  {#if buttonIcon}
    <img src={buttonIcon} alt="" />
  {/if}

  {buttonLegend}
</button>

<fieldset>
  <legend>{legend}</legend>
</fieldset>

<style lang="scss">
</style>
