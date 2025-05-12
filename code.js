function augmentingPath(graph, start, end) {
    if (start === end )
        return [start];

    let queue = [[start]];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        for (let neighbor in graph[node]) {
            if (visited.has(neighbor))
                continue;
            let newPath = path.concat([neighbor]);
            if (neighbor === end)
                return newPath;
            queue.push(newPath);
            visited.add(neighbor);
        }
    }
    return [];
}
