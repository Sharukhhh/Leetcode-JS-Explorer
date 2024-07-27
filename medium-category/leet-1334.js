//PROBLEM: Find the City With the Smallest Number of Neighbors at a Threshold Distance

//APPROACH: Using Floyd-Warshall algorithm (an algorithm for finding shortest paths in a directed weighted graph)

//SOLUTION:
function findTheCity (edges , n , distanceThreshhold) {

    /*
        edges => edges[0] = [from, to, weight]
        n => total cities (nodes)
        distanceThreshhold => max distance considered from a city to another city
    */

    /*
    Create dist, a 2D array, represents shortest distance from a city to another city
    means i to j (assume i and j as cities).
        * Give 'Infinity' as intitial value in dist
        * distance from i to i (city to same city) is "0"
    */

    const dist  = Array.from({length: n} , () => Array(n).fill(Infinity));

    for(let i = 0 ; i < n ; i++) {
        dist[i][i] = 0;
    }
    console.log('After updating distance to city itself: ',dist)

    for(const [from , to , weight] of edges) {
        dist[from][to] = weight;
        dist[to][from] = weight;
    }
    console.log('After updating with given weights: ',dist)

    /*
        Now Applying Floyd-Warshall Algorithm
        Implementation: 
            k => represents intermediate city between city i to city j
            i => represents starting city which is i
            j => represents ending city which is k

        key: 
        For each combination of i, j, and k, the algorithm checks 
        if the distance from i to j can be reduced by going through node k. Specifically, it updates dist[i][j] as follows:
            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    */

    for(let k = 0 ; k < n ; k++) {
        for(let i = 0 ; i < n ; i++) {
            for(let j = 0 ; j < n ; j++) {
                if(dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    console.log('After algorithm: ', dist)

    let minReachable = n;
    let resultCity = 0;

    for(let i = 0 ; i < n ; i++) {

        let reachableCities = 0;
        for(let j = 0 ; j < n ; j++) {

            if(i === j) continue;
            if(dist[i][j] <= distanceThreshhold) {
                reachableCities++;
            }
        }

        if(reachableCities < minReachable || (reachableCities === minReachable && i > resultCity)) {
            minReachable = reachableCities;
            resultCity = i;
        }
    }
    return resultCity;
}


const edges1 = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]];
const edges2 = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]];

console.log('Result city: ', findTheCity(edges1 , 4 , 4));
// console.log('Result city2: ', findTheCity(edges2 , 5 , 2))



//TIME COMPLEXITY: O(N ^ 3)
//SPACE COMPLEXITY: O(N ^ 2)