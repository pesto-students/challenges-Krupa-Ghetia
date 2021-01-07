# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function () {
  console.log(arguments);
});

flipped("a", "b", "c", "d");
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**

_Write your response here_

- Can be used for palindrome checks
- Can be used when inputs need to be sorted in a specific manner (Eg: ascending/decending)

### **What test cases can you add to the test file?**

_Add the relevant test-cases in the test file_

# Restrictions

- Don't use any libraries
