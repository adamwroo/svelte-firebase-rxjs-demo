<script>
    import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
    import Profile from "./Profile.svelte";
    import { auth, googleProvider } from "./firebase";
    import { authState } from "rxfire/auth";

    let user;

    const unsubscribe = authState(auth).subscribe((u) => (user = u));

    function login() {
        signInWithPopup(auth, googleProvider);
    }
</script>

<section>
    {#if user}
        <Profile {...user} />
        <button on:click={ () => auth.signOut() }>Logout</button>
    {:else}
        <button on:click={login}>
            Sign in with Google
        </button>
    {/if}
</section>
