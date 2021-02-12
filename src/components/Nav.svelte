<script>
    export let segment;
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index">Documentation</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dr-navigation"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="dr-navigation">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" aria-current="{segment === undefined ? 'page' : undefined}"
                                        href="index">home</a></li>
                <li class="nav-item"><a class="nav-link" aria-current="{segment === 'about' ? 'page' : undefined}"
                                        href="about">about</a></li>

                <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
                     the blog data when we hover over the link or tap it on a touchscreen -->
                <li class="nav-item"><a class="nav-link" rel=prefetch
                                        aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
