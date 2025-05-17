# 📌 Topic: `useEffect` in React  
Let’s break it down simply with a real-life example to make it super easy to understand.

---

## 🔍 What is `useEffect`?

React ka `useEffect` ek **React Hook** hai jo **side effects** handle karne ke kaam aata hai.

### Side effects ka matlab?
- API call karna  
- DOM update karna  
- Local storage se data lena  
- Event listener add karna

React ka render cycle sirf UI dikhata hai. But agar humein kuch *extra kaam* karna hai jaise data fetch, toh woh **side-effect** hota hai.

---

## 💡 Syntax:
```js
useEffect(() => {
  // yeh code chalega render ke baad
}, [dependencies]);
