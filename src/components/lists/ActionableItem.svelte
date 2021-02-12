<script>
    // @type {string} The label of item.
    export let label;
    // @type {number} Add badges if this parameter is greater that 0 to any
    // group item to show unread counts, activity, and more.
    export let badge = 0;
</script>

{#if badge === 0}
    <li class="list-group-item list-group-item-action">{label}</li>
{:else }
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">{label}
        <span class="badge bg-primary rounded-pill">{badge}</span>
    </li>
{/if}
