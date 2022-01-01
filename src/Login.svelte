<script>
    import { signInWithPopup } from "firebase/auth";
    import { authState } from "rxfire/auth";
    import { auth, googleProvider } from "./firebase";
    import Profile from "./Profile.svelte";

    let user = authState(auth);

    function login() {
        signInWithPopup(auth, googleProvider);
    }
</script>

<section>
    {#if $user}
        <Profile {...$user} />
        <button on:click={ () => auth.signOut() }>Logout</button>
    {:else}
        <button on:click={login}>
            Sign in with Google
        </button>
    {/if}
</section>
