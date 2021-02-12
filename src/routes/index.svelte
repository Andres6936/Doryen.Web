<script>
    import ListGroup from "../components/lists/ListGroup.svelte";
    import ActionableItem from "../components/lists/ActionableItem.svelte";
    import ItemTitle from "../components/lists/ItemTitle.svelte";
</script>
<svelte:head>
    <title>Doryen Documentation</title>
</svelte:head>

<ListGroup>
    <ItemTitle title="Core"/>
    <ActionableItem label="Colors"/>
    <ActionableItem label="Console" badge="5"/>
    <ActionableItem label="System layer" badge="6"/>

    <ItemTitle title="Base toolkit"/>
    <ActionableItem label="Line drawing toolkit"/>
    <ActionableItem label="Image toolkit" badge="5"/>
    <ActionableItem label="All purpose container" badge="5"/>
    <ActionableItem label="Pseudorandom number generator" badge="3"/>
    <ActionableItem label="Mouse support"/>
    <ActionableItem label="Noise generator" badge="5"/>
    <ActionableItem label="File parser" badge="4"/>
    <ActionableItem label="Compression toolkit" badge="3"/>

    <ItemTitle title="Roguelike toolkit"/>
    <ActionableItem label="BSP toolkit" badge="5"/>
    <ActionableItem label="Field of view" badge="3"/>
    <ActionableItem label="Heightmap toolkit" badge="4"/>
    <ActionableItem label="Name generator" badge="3"/>
    <ActionableItem label="Pathfinding" badge="3"/>
</ListGroup>
