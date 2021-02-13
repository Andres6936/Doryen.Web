<script>
    import IconBook from "../../svg/IconBook.svelte";
    // @type {string} The label of item.
    export let label;
</script>

<li class="list-group-item list-group-item-action small">
    <IconBook extraClass="me-3"/>
    {label}
</li>
