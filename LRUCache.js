/** 146
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.array = [];
  this.count = new Array(capacity);
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  let mostRecent = this.array[key];
  this.count.push()
  return mostRecent;
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (!this.array[key]) {
      if (this.count.length >= this.array.length) {
          let leastRecent = this.count.shift();
          delete this.array[leastRecent];
      }
  }
  this.array[key] = value;
  this.count.push(key);
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/