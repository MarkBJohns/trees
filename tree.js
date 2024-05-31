/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
      this.val = val;
      this.children = children;
    }
    
    depthSearch(value) { 
        if (this.val === value) return this.val;
        
        for (let child of this.children) {
            let result = child.depthSearch(value);
            if (result !== null) return result;
        }
        return null 
    }
    
    get values() {
        let values = [];
        let queue = [this];
        
        while (queue.length) {
            let node = queue.shift();
            values.push(node.val);
            queue.push(...node.children);
        }
        return values
    }
  }
  
  class Tree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** sumValues(): add up all of the values in the tree. */
  
    sumValues() {
        if (!this.root) return 0;
        return this.root.values.reduce((sum, val) => sum + val, 0);
    }
  
    /** countEvens(): count all of the nodes in the tree with even values. */
  
    countEvens() {
        if (!this.root) return 0;
        return this.root.values.filter(val => val % 2 === 0).length;
    }
  
    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */
  
    numGreater(lowerBound) {
        if (!this.root) return 0;
        return this.root.values.filter(val => val > lowerBound).length;
    }
  }
  
  module.exports = { Tree, TreeNode };
  