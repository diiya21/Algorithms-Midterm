//Midterm Solution//


//O(n):  the solution includes traversing through the array to count the sum of the elements, so the loops will run n and m (or 2x(n)) times for counting the totalSum and arraySum. Adding the time complexities up, we get O(n+m) which rounds up to O(n) according the the big o notation as m becomes insignificantly small in this case.
function findMissingNumber(array, n) {

    let totalSum = 0;
    let arraySum = 0;

    for(let i = 1; i<=n; i++){
        totalSum += i;
    }

    for(let i = 0; i<array.length; i++){
        arraySum += array[i];
    }

    return totalSum - arraySum;
}


//O(n log n):  sorting the array uses inbuilt algorithm such as Timsort which has a time complexity of O(n log n). though the for loop will have a time complexity of O(n), the overall function has a time complexity of O(n log n.)
function findMissingNumberSortArray(array, n) {
    array = array.sort(); 

    for(let i = 0; i < n - 1; i++) { 
        if(array[i] !== array[i+1] - 1) { 
            return array[i] + 1; 
        }
    }
    
    return n;
}



//O(n)^2: The solutions consists of running nested loops on the input, which makes the time complexity as O(n)^2.
function findTargetSum(nums, target){

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

}


function generatePermutations(str){

    const allPossiblePermutations = [];




}

//O(n): we will traverse through the linked list and add each element to visitedNodes whilst checking if any node points to a previously visited node, so the number of operations will be equal to number of nodes in the list, hence time complexity comes to O(n).
function checkIfCycleExists(headNode){

    const visitedNodes = new Set();
    let currentNode = headNode;
    
    while (currentNode !== null) {
        if (visitedNodes.has(currentNode)) {
            return true;
        }
        visitedNodes.add(currentNode);
        currentNode = currentNode.next;
    }
    return false;

}


//O(n): we will be traversing through all the characters of the string and perform operations such as adding them to stack or checking to see if the brackets match the opening brackets in the order they appear in the stack, the time complexity will equate to O(n) as the operations required equal the amount of charactes we have in the str, i. e. (n).
function checkIfValidParenthesis(str){

    const stack = [];
    const matchingParen = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of str) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.pop() !== matchingParen[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;

}


