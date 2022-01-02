<script>
    import { fade, fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

    export let id; // document ID
    export let text;
    export let complete;

    const dispatch = createEventDispatcher();

    function remove() {
        dispatch('remove', { id });
    }

    function toogleStatus() {
        let newStatus = !complete;
        dispatch('toogle', {
            id,
            newStatus
        });
    }
</script>

<li in:fly={{ x: 900, duration: 500 }} out:fade>
    <span class:complete>
        { text }
    </span>
    {#if complete}
        <button class="is-button" on:click={toogleStatus}>
            ✔️
        </button>
    {:else}
        <button class="is-button" on:click={toogleStatus}>
            ❌
        </button>
    {/if}

    <button class="is-button" on:click={remove}>
        🗑️
    </button>
</li>

<style>
    li {
        display: flex;
        font-size: 1.2em;
        font-weight: bold;
    }

    span {
        margin-right: auto;
    }

    .complete {
        text-decoration: line-through;
        color: green;
    }
</style>