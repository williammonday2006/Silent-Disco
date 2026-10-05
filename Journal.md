# Phase 1

I used setInterval to change the panel colors every 1.5 seconds. The colors are randomly generated using Math.random() and Math.floor(). A consistent interval keeps the lighting changes smooth and predictable.

# Phase 2
Event bubbling causes clicks to travel from a child to its parent. I used stopPropagation() so clicking the dancer does not also change the dance floor.
