<script>
    import { collection, query, where, orderBy } from 'firebase/firestore';
    import { doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';
    import { db } from './firebase';
    import TodoItem from './TodoItem.svelte';

    export let uid;

    let text = 'some task';

    const todosRef = collection(db, 'todos');
    const q = query(todosRef, where('uid', '==', uid));//, orderBy('created')); // TODO AdW: orderBy commented out because it requires adding an index in Firebase
    const todos = collectionData(q, { idField: 'id' }).pipe(startWith([]));

    async function add() {
        await addDoc(todosRef, { uid, text, complete: false, created: Date.now() });
    }

    async function updateStatus(event) {
        const { id, newStatus } = event.detail;
        const todoRef = doc(db, 'todos', id);
        await updateDoc(todoRef, { complete: newStatus });
    }

    async function removeItem(event) {
        const { id } = event.detail;
        const todoRef = doc(db, 'todos', id);
        await deleteDoc(todoRef);
    }
</script>

<ul>
    {#each $todos as todo}
        <TodoItem {...todo} on:remove={removeItem} on:toogle={updateStatus} />
    {/each}
</ul>

<hr>
<input bind:value={text}>
<p>Your task: <strong> { text } </strong></p>
<button on:click={add}>Add Task</button>

<style>
    input { display: block; }
</style>