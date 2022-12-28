<script lang="ts">
  const login = localStorage.getItem('login');
  const isLogged = login !== null;
  const pfp = "https://picsum.photos/60/80";
</script>

<div>
  {#if isLogged}
    <img src={pfp} alt="User profile" />
    <strong>{login}</strong>
  {:else}
    <a href="/login" id="sign-up" class="sign">
      Sign up
    </a>
    <a href="/login" id="sign-in" class="sign">
      Sign in
    </a>
  {/if}
</div>

<style lang="scss">
  @use "../style/utils.scss";

  div {
    @extend %flex-list;
    column-gap: 1em;

    img {
      height: 45px;
      aspect-ratio: 1/1;
      border-radius: 100%;
    }

    strong {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  div > a {
    text-decoration: none;
    cursor: pointer;
    color: darken(utils.$text-color, 10%);

    font: inherit {
      size: 1.1rem;
      weight: bold;
    }

    :visited {
      all: inherit;
    }

    &#sign-up {
      background: none;
      border: none;
      transition: all 0.25s;

      &:hover {
        transition: all 0.25s;
        font-weight: bold;
        text-shadow: lighten(utils.$text-color, 35%) 0.4ch 0.4ch 0.3ch;
      }
    }

    &#sign-in {
      padding: {
        block: 0.5em;
        inline: 1em;
      }

      border: none;
      border-radius: 1.5em;
      color: white;
      background: {
        color: utils.$btn-background;
      }

      &:hover {
        background-color: darken(utils.$btn-background, 5%);
      }
    }
  }
</style>
