<script>
    import ListGroup from "../components/lists/ListGroup.svelte";
    import ActionableItem from "../components/lists/ActionableItem.svelte";
</script>
<svelte:head>
    <title>Doryen Documentation</title>
</svelte:head>

<div class="row">
    <div class="col-12">
        <h3>Console</h3>
        <ListGroup>
            <ActionableItem label="Initializing the console"/>
            <ActionableItem label="Drawing in the root console"/>
            <ActionableItem label="Flushing the root console"/>
            <ActionableItem label="Handle keyboard input"/>
            <ActionableItem label="Using offscreen consoles"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>System Console</h3>
        <ListGroup>
            <ActionableItem label="High precision time functions"/>
            <ActionableItem label="Easy screenshots"/>
            <ActionableItem label="Filesystem utilities"/>
            <ActionableItem label="Miscellaneous utilities"/>
            <ActionableItem label="Clipboard integration"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>Image toolkit</h3>
        <ListGroup>
            <ActionableItem label="Creating a image"/>
            <ActionableItem label="Reading data from Image"/>
            <ActionableItem label="Updating a image"/>
            <ActionableItem label="Saving an image to a bmp or png file"/>
            <ActionableItem label="Blitting an image on a console"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>All purpose container</h3>
        <ListGroup>
            <ActionableItem label="Creating a list"/>
            <ActionableItem label="Basic array operations"/>
            <ActionableItem label="Basic list operations"/>
            <ActionableItem label="Basic stack operations"/>
            <ActionableItem label="Iterators"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>Pseudorandom number generator</h3>
        <ListGroup>
            <ActionableItem label="Creating a generator"/>
            <ActionableItem label="Using a generator"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>Noise generator</h3>
        <ListGroup>
            <ActionableItem label="Creating a noise generator"/>
            <ActionableItem label="Choosing a noise type"/>
            <ActionableItem label="Getting flat noise"/>
            <ActionableItem label="Getting fbm noise"/>
            <ActionableItem label="Getting turbulence"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>File parser</h3>
        <ListGroup>
            <ActionableItem label="The doryen config file format"/>
            <ActionableItem label="Defining the file syntax"/>
            <ActionableItem label="Running the parser"/>
            <ActionableItem label="Standard types"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>Compression toolkit</h3>
        <ListGroup>
            <ActionableItem label="Creating a compression buffer"/>
            <ActionableItem label="Using the buffer in output mode"/>
            <ActionableItem label="Using the buffer in input mode"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>BSP toolkit</h3>
        <ListGroup>
            <ActionableItem label="Creating a BSP tree"/>
            <ActionableItem label="Splitting the tree"/>
            <ActionableItem label="Resizing the tree"/>
            <ActionableItem label="Reading information from tree"/>
            <ActionableItem label="Traversing the tree"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>Field of view</h3>
        <ListGroup>
            <ActionableItem label="Building the map"/>
            <ActionableItem label="Computing the field of view"/>
            <ActionableItem label="Reading fov information"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>Heightmap toolkit</h3>
        <ListGroup>
            <ActionableItem label="Creating a heightmap"/>
            <ActionableItem label="Basic operations"/>
            <ActionableItem label="Modifying the heightmap"/>
            <ActionableItem label="Reading data from the heightmap"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>Name generator</h3>
        <ListGroup>
            <ActionableItem label="Creating a generator"/>
            <ActionableItem label="Generating a name"/>
            <ActionableItem label="Syllable set configuration"/>
        </ListGroup>
    </div>

    <div class="col-12">
        <h3>Pathfinding</h3>
        <ListGroup>
            <ActionableItem label="Creating a image"/>
        </ListGroup>
    </div>
</div>
