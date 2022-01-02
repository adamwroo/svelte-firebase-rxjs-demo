<script>
    import { signInWithPopup } from 'firebase/auth';
    import { authState } from 'rxfire/auth';
    import { auth, googleProvider } from './firebase';

    import Profile from './Profile.svelte';
    import Todos from './Todos.svelte';

    let user = authState(auth);

    function login() {
        signInWithPopup(auth, googleProvider);
    }
</script>

<section>
    {#if $user}
        <Profile {...$user} />
        <button on:click={ () => auth.signOut() } class="button">Logout</button>
        <hr>
        <Todos uid={$user.uid} />
    {:else}
        <button on:click={login} class="button">
            Sign in with Google
        </button>
    {/if}
</section>
