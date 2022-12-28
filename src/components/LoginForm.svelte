<script lang="ts">
  type User = {
    email: string | null,
    password: string | null
  }

  let user: User = {
    email: null,
    password: null
  };
  let remember: boolean;

  function login() {
    if (user.email !== null && remember)
      localStorage.setItem('login', user.email);
  }
</script>

<form method="post">
  <div class="email">
    <label for="email">Email</label>
    <input type="email" name="email" bind:value={user.email} />
  </div>

  <div>
    <div class="password">
      <label for="password">Senha</label>
      <a href="." class="password-reset">Esqueceu a senha?</a>
    </div>
    <input type="password" name="password" bind:value={user.password} />
  </div>

  <div class="submit">
    <div>
      <input type="checkbox" name="remember-me" bind:checked={remember} />
      <label for="remember-me">Manter-me conectado</label>
    </div>
    <button type="submit" on:click={login}>Entrar</button>
  </div>

  <span class="middash">ou</span>

  <a href="." class="login-google">
    <img src="../google.svg" alt="Logo do Google" />
    Login com o Google
  </a>
  <a href="." class="login-github">
    <img src="../github-white.svg" alt="Logo do GitHub" />
    Login com o GitHub
  </a>
  <a href="." class="login-facebook">
    <img src="../facebook.svg" alt="Logo do Facebook" />
    Login com o Facebook
  </a>
</form>

<style lang="scss">
  @use "../style/utils";

  $input-types: "email", "password";
  $login-types: "google", "github", "facebook";

  * {
    box-sizing: border-box;
  }

  form {
    @extend %center-div;
    width: clamp(40ch, 50%, 75ch);
    flex-direction: column;

    span.middash {
      @extend %middash;
    }

    & > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      &:not(:first-of-type) {
        margin-top: 1rem;
      }

      &.submit {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
      }

      &.submit {
        width: 95%;
      }
    }

    label {
      font-weight: bold;
      text-align: left;

      margin: {
        left: 0.5rem;
        bottom: 0.2rem;
      }
    }

    a.password-reset {
      $password-reset-color: hsl(0, 0%, 75%);
      $password-reset-hover: darken($password-reset-color, 30%);

      @include utils.underline-hover($password-reset-color, 1px, 0.2s);
      color: $password-reset-color;
      text-decoration: none;
      font-size: 0.7rem;

      &:hover {
        color: $password-reset-hover;
        text-emphasis: bold;
      }

      &:visited {
        all: inherit;
      }
    }

    input[type="checkbox"] {
      cursor: pointer;
      + label {
        font-size: 0.8rem;
        margin: 0 {
          left: 1ch;
        }

        font-weight: lighter;
      }
    }

    %button {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1ch;
      width: 100%;
      height: 5ch;
      text-decoration: none;
      border: 1px solid lightgrey;
      border-radius: 0.5em;
      cursor: pointer;
      
    }

    button {
      @extend %button;

      &[type="submit"] {
        width: 30%;
        height: 3.5ch;
        border-radius: 0.8em;
        background-color: grey;
        color: white;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
    }

    @each $login-type in $login-types {
      a.login-#{$login-type} {
        @extend %button;
        margin-bottom: 0.5rem;

        img {
          height: 3ch;
          width: auto;
        }
      }
    }

    a.login-google {
      background-color: white;
      color: black;
    }

    a.login-github {
      background-color: #2f3337;
      color: white;
    }

    a.login-facebook {
      background-color: #385499;
      color: white;
    }

    @each $input-type in $input-types {
      input[type="#{$input-type}"] {
        width: 100%;
        height: 4ch;
        padding-inline: 1.5ch;
        background-color: utils.$input-background;
        border: {
          // style: solid;
          // color: black;
          // width: 1px;
          radius: 3ch;
        }
      }
    }
  }
</style>
