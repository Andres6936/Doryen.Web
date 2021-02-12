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
    <ActionableItem label="Image toolkit"/>
    <ActionableItem label="All purpose container"/>
    <ActionableItem label="Pseudorandom number generator"/>
    <ActionableItem label="Mouse support"/>
    <ActionableItem label="Noise generator"/>
    <ActionableItem label="File parser"/>
    <ActionableItem label="Compression toolkit"/>

    <ItemTitle title="Roguelike toolkit"/>
    <ActionableItem label="BSP toolkit"/>
    <ActionableItem label="Field of view"/>
    <ActionableItem label="Heightmap toolkit"/>
    <ActionableItem label="Name generator"/>
    <ActionableItem label="Pathfinding"/>
</ListGroup>
