<script>
    // @type {string} Unique identification of element, needed for show and hidden the element content
    export let id;
</script>

<ul class="list-group collapse" {id}>
    <slot/>
</ul>
