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
    <ActionableItem label="Console" badge="5"/>
    <ActionableItem label="System layer" badge="6"/>
    <li class="list-group-item list-group-item-dark">Base toolkit</li>
    <ActionableItem label="Line drawing toolkit"/>
    <ActionableItem label="Image toolkit"/>
    <ActionableItem label="All purpose container"/>
    <ActionableItem label="Pseudorandom number generator"/>
    <ActionableItem label="Mouse support"/>
    <ActionableItem label="Noise generator"/>
    <ActionableItem label="File parser"/>
    <ActionableItem label="Compression toolkit"/>
    <li class="list-group-item list-group-item-dark">Roguelike toolkit</li>
    <ActionableItem label="BSP toolkit"/>
    <ActionableItem label="Field of view"/>
    <ActionableItem label="Heightmap toolkit"/>
    <ActionableItem label="Name generator"/>
    <ActionableItem label="Pathfinding"/>
</ListGroup>
