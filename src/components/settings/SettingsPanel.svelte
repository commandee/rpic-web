<script lang="ts" context="module">
  import SettingField from "./SettingField.svelte";
  export type fields = "info" | "lorem1" | "lorem2" | "alterar";
</script>

<script lang="ts">
  let field: fields;
</script>

<form>
  {field}

  <SettingField legend="pog" />

  <button on:click|preventDefault={() => (field = "info")}
    >Informações do Usuário></button>
  <fieldset name="info" hidden={field != "info"}>
    <legend>Informações do Usuário</legend>
  </fieldset>

  <button on:click|preventDefault={() => (field = "lorem1")}
    >lorem ipsum</button>
  <fieldset name="lorem1" hidden={field != "lorem1"}>
    <legend>Lorem 1</legend>
  </fieldset>

  <button on:click|preventDefault={() => (field = "lorem2")}
    >lorem ipsum</button>
  <fieldset name="lorem2" hidden={field != "lorem2"}>
    <legend>Lorem 1</legend>
  </fieldset>

  <button on:click|preventDefault={() => (field = "alterar")}
    >Alterar dados</button>
  <fieldset name="alterar" hidden={field != "alterar"}>
    <legend>Alterar dados</legend>
  </fieldset>
</form>

<style lang="scss">
  form {
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    width: clamp(15rem, 70%, 60rem);
    column-gap: 2rem;
  }

  button {
    padding: 1.5rem;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;

    grid-column: 1;
  }

  fieldset {
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
