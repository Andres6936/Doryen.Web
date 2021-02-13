<script>
    import ListGroup from "../components/lists/ListGroup.svelte";
    import ActionableItem from "../components/lists/ActionableItem.svelte";
    import TitleList from "../components/text/TitleList.svelte";
</script>
<svelte:head>
    <title>Doryen Documentation</title>
</svelte:head>

<div class="row row-cols-md-2 row-cols-lg-3">
    <div class="col-12">
        <TitleList>Console</TitleList>
        <ListGroup>
            <ActionableItem label="Initializing the console"/>
            <ActionableItem label="Drawing in the root console"/>
            <ActionableItem label="Flushing the root console"/>
            <ActionableItem label="Handle keyboard input"/>
            <ActionableItem label="Using offscreen consoles"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>System Console</TitleList>
        <ListGroup>
            <ActionableItem label="High precision time functions"/>
            <ActionableItem label="Easy screenshots"/>
            <ActionableItem label="Filesystem utilities"/>
            <ActionableItem label="Miscellaneous utilities"/>
            <ActionableItem label="Clipboard integration"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>Image toolkit</TitleList>
        <ListGroup>
            <ActionableItem label="Creating a image"/>
            <ActionableItem label="Reading data from Image"/>
            <ActionableItem label="Updating a image"/>
            <ActionableItem label="Saving an image to a bmp or png file"/>
            <ActionableItem label="Blitting an image on a console"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>All purpose container</TitleList>
        <ListGroup>
            <ActionableItem label="Creating a list"/>
            <ActionableItem label="Basic array operations"/>
            <ActionableItem label="Basic list operations"/>
            <ActionableItem label="Basic stack operations"/>
            <ActionableItem label="Iterators"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>Pseudorandom number generator</TitleList>
        <ListGroup>
            <ActionableItem label="Creating a generator"/>
            <ActionableItem label="Using a generator"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>Noise generator</TitleList>
        <ListGroup>
            <ActionableItem label="Creating a noise generator"/>
            <ActionableItem label="Choosing a noise type"/>
            <ActionableItem label="Getting flat noise"/>
            <ActionableItem label="Getting fbm noise"/>
            <ActionableItem label="Getting turbulence"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>File parser</TitleList>
        <ListGroup>
            <ActionableItem label="The doryen config file format"/>
            <ActionableItem label="Defining the file syntax"/>
            <ActionableItem label="Running the parser"/>
            <ActionableItem label="Standard types"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>Compression toolkit</TitleList>
        <ListGroup>
            <ActionableItem label="Creating a compression buffer"/>
            <ActionableItem label="Using the buffer in output mode"/>
            <ActionableItem label="Using the buffer in input mode"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>BSP toolkit</TitleList>
        <ListGroup>
            <ActionableItem label="Creating a BSP tree"/>
            <ActionableItem label="Splitting the tree"/>
            <ActionableItem label="Resizing the tree"/>
            <ActionableItem label="Reading information from tree"/>
            <ActionableItem label="Traversing the tree"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>Field of view</TitleList>
        <ListGroup>
            <ActionableItem label="Building the map"/>
            <ActionableItem label="Computing the field of view"/>
            <ActionableItem label="Reading fov information"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>Heightmap toolkit</TitleList>
        <ListGroup>
            <ActionableItem label="Creating a heightmap"/>
            <ActionableItem label="Basic operations"/>
            <ActionableItem label="Modifying the heightmap"/>
            <ActionableItem label="Reading data from the heightmap"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>Name generator</TitleList>
        <ListGroup>
            <ActionableItem label="Creating a generator"/>
            <ActionableItem label="Generating a name"/>
            <ActionableItem label="Syllable set configuration"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <TitleList>Pathfinding</TitleList>
        <ListGroup>
            <ActionableItem label="Creating a path"/>
            <ActionableItem label="Computing the path"/>
            <ActionableItem label="Reading path information"/>
        </ListGroup>
    </div>
</div>
