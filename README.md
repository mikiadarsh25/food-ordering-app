# React Functional Components and Keys: A Complete Guide

## Understanding Functional Components

Functional components are the backbone of modern React development. At their core, they are JavaScript functions that return React elements (JSX). Let's break this down with examples and explanations.

### Basic Structure

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// Arrow function syntax (equivalent)
const Welcome = props => {
    return <h1>Hello, {props.name}</h1>;
};
```

### Key Characteristics

1. **Props Handling**

```jsx
function UserProfile({ name, age, email }) {
    return (
        <div className="user-profile">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}
```

2. **State Management with Hooks**

```jsx
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

3. **Side Effects**

```jsx
function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData().then(result => setData(result));
    }, []); // Empty dependency array = run once on mount

    return <div>{data ? <DisplayData data={data} /> : "Loading..."}</div>;
}
```

## Understanding Keys in React

Keys are fundamental to React's reconciliation process. They help React identify which items have changed, been added, or been removed in lists.

### Why Keys Matter

1. **Performance Benefits**

```jsx
// Without keys, React has to re-render the entire list
// With keys, it can identify and update only changed items
function BookList({ books }) {
    return (
        <ul>
            {books.map(book => (
                <li key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </li>
            ))}
        </ul>
    );
}
```

2. **State Preservation**

```jsx
function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", done: false },
        { id: 2, text: "Build project", done: false }
    ]);

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id} // Ensures state is preserved correctly
                    todo={todo}
                    onToggle={() => toggleTodo(todo.id)}
                />
            ))}
        </ul>
    );
}
```

### Common Key Scenarios

1. **Dynamic Lists**

```jsx
function ShoppingList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.name} - ${item.price}
                </li>
            ))}
        </ul>
    );
}
```

2. **Reorderable Lists**

```jsx
function DraggableList({ items }) {
    return (
        <div>
            {items.map(item => (
                <DraggableItem
                    key={item.id} // Critical for maintaining state during reordering
                    item={item}
                    onDrag={handleDrag}
                />
            ))}
        </div>
    );
}
```

### When to Use Index as Keys

Using array indices as keys should be your last resort. Here's when it's acceptable:

```jsx
// ✅ Acceptable use of index as key
function StaticList() {
    const items = ["Apple", "Banana", "Orange"]; // Static list that never changes
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

// ❌ Problematic use of index as key
function DynamicList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {" "}
                    // Don't do this for dynamic lists!
                    {item.name}
                </li>
            ))}
        </ul>
    );
}
```

### Best Practices for Keys

1. **Use Unique, Stable Identifiers**

```jsx
// ✅ Good: Using unique IDs
function UserList({ users }) {
    return (
        <ul>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </ul>
    );
}

// ✅ Alternative: Using composite keys when needed
function MatrixGrid({ rows }) {
    return (
        <div>
            {rows.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <Cell
                        key={`${rowIndex}-${colIndex}`} // Composite key
                        value={cell}
                    />
                ))
            )}
        </div>
    );
}
```

2. **Handling Key Changes**

```jsx
function FilterableList({ items, filter }) {
    const filteredItems = items.filter(item => item.name.includes(filter));

    return (
        <ul>
            {filteredItems.map(item => (
                <li key={item.id}>
                    {" "}
                    // ID persists even when list is filtered
                    {item.name}
                </li>
            ))}
        </ul>
    );
}
```

Remember: Keys should be:

-   Unique among siblings
-   Consistent across renders
-   Stable (not generated on-the-fly)
-   Meaningful (related to the data being rendered)

Following these guidelines ensures optimal performance and correct behavior in your React applications.
