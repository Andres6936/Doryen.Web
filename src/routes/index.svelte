<script>
    import ListGroup from "../components/lists/ListGroup.svelte";
    import ActionableItem from "../components/lists/ActionableItem.svelte";
</script>
<svelte:head>
    <title>Doryen Documentation</title>
</svelte:head>

<ListGroup>
    <li class="list-group-item list-group-item-dark">Core</li>
    <ActionableItem label="Colors"/>
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Console
        <span class="badge bg-primary rounded-pill">5</span>
    </li>
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">System layer
        <span class="badge bg-primary rounded-pill">6</span>
    </li>
    <li class="list-group-item list-group-item-dark">Base toolkit</li>
    <li class="list-group-item list-group-item-action">Line drawing toolkit</li>
    <li class="list-group-item list-group-item-action">Image toolkit</li>
    <li class="list-group-item list-group-item-action">All purpose container</li>
    <li class="list-group-item list-group-item-action">Pseudorandom number generator</li>
    <li class="list-group-item list-group-item-action">Mouse support</li>
    <li class="list-group-item list-group-item-action">Noise generator</li>
    <li class="list-group-item list-group-item-action">File parser</li>
    <li class="list-group-item list-group-item-action">Compression toolkit</li>
    <li class="list-group-item list-group-item-dark">Roguelike toolkit</li>
    <li class="list-group-item list-group-item-action">BSP toolkit</li>
    <li class="list-group-item list-group-item-action">Field of view</li>
    <li class="list-group-item list-group-item-action">Heightmap toolkit</li>
    <li class="list-group-item list-group-item-action">Name generator</li>
    <li class="list-group-item list-group-item-action">Pathfinding</li>
</ListGroup>>
