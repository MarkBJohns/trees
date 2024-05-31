/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
    
    depthSearch(value) {
        if (this.val === value) return this.val;
        
        if (this.left) {
            let result = this.left.depthSearch(value);
            if (result !== null) return result;
        }
        
        if (this.right) {
            let result = this.right.depthSearch(value);
            if (result !== null) return result;
        }
        
        return null
    }
    
    mostShallowLeaf() {
        let queue = [{node: this, depth: 1}];
        
        while (queue.length) {
            let { node, depth } = queue.shift();
            
            if (!node.left && !node.right) {
                return depth
            }
            
            if (node.left) queue.push({ node: node.left, depth: depth + 1 });
            if (node.right) queue.push({ node: node.right, depth: depth + 1 });
            
        }
        
        return null;
    }
    
    deepestLeaf() {
        const _deepestLeaf = (node, depth) => {
            if (!node) {
                return { depth: -1, node: null }
            }
            if (!node.left && !node.right) {
                return { depth, node }
            }
            
            const left = _deepestLeaf(node.left, depth + 1);
            const right = _deepestLeaf(node.right, depth + 1);
            
            if (left.depth >= right.depth) {
                return left;
            } else {
                return right;
            }
        }
        
        return _deepestLeaf(this, 1).depth;
    }
    
    maxSum() {
        let maxSum = -Infinity;
        
        const dfs = (node) => {
            if (!node) return 0;
            
            const maxSumLeft = Math.max(0, dfs(node.left));
            const maxSumRight = Math.max(0, dfs(node.right));
        
            maxSum = Math.max(maxSum, node.val + maxSumLeft + maxSumRight);
        
            return node.val + Math.max(maxSumLeft, maxSumRight);
        };
        
        dfs(this);
        
        return maxSum
    }
    
    nextLarger(lowerBound) {
        let _nextLarger = Infinity;
        
        const inOrderTraversal = (node) => {
            if (!node) return;
            
            inOrderTraversal(node.left);
            
            if (node.val > lowerBound && node.val < _nextLarger) {
                if (_nextLarger === null || node.val < _nextLarger) {
                    _nextLarger = node.val;
                }
            }
            
            inOrderTraversal(node.right);
        }
        
        inOrderTraversal(this);
        
        return _nextLarger === Infinity ? null : _nextLarger;
    }
    
    get values() {
        let values = [];
        let queue = [this];
        
        while (queue.length) {
            let node = queue.shift();
            values.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        return values;
    }
  }
  
  class BinaryTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */
  
    minDepth() {
        if (!this.root) return 0;
        return this.root.mostShallowLeaf();
    }
  
    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */
  
    maxDepth() {
        if (!this.root) return 0;
        return this.root.deepestLeaf();
    }
  
    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */
  
    maxSum() {
        if (!this.root) return 0;
        return this.root.maxSum();
    }
  
    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */
  
    nextLarger(lowerBound) {
        if (!this.root) return null;
        return this.root.nextLarger(lowerBound);
    }
  
    /** Further study!
     * areCousins(node1, node2): determine whether two nodes are cousins
     * (i.e. are at the same level but have different parents. ) */
  
    // areCousins(node1, node2) {
  
    // }
  
    /** Further study!
     * serialize(tree): serialize the BinaryTree object tree into a string. */
  
    // static serialize() {
  
    // }
  
    /** Further study!
     * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */
  
    // static deserialize() {
  
    // }
  
    /** Further study!
     * lowestCommonAncestor(node1, node2): find the lowest common ancestor
     * of two nodes in a binary tree. */
  
    // lowestCommonAncestor(node1, node2) {
      
    // }
  }
  
  module.exports = { BinaryTree, BinaryTreeNode };
  