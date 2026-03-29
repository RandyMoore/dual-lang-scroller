# TypeScript Try/Catch/Finally Patterns

## Common Mistake: Using `else` with Try/Catch

### ❌ INCORRECT PATTERN

```typescript
try {
  // code that might throw
  if (condition) {
    // handle condition
    return
  }
  // more code
} catch (error) {
  // handle error
} else {
  // ERROR: `else` is not allowed here!
  // TypeScript will throw: "SyntaxError: Unexpected token 'else'"
}
```

### ✅ CORRECT PATTERN 1: No Finally Block

```typescript
try {
  // code that might throw
  if (condition) {
    // handle condition
    return
  }
  // more code
} catch (error) {
  // handle error
}
```

### ✅ CORRECT PATTERN 2: With Finally Block

```typescript
try {
  // code that might throw
  if (condition) {
    // handle condition
    return
  }
  // more code
} catch (error) {
  // handle error
} finally {
  // always executes, regardless of return/throw
  // useful for cleanup operations
}
```

## Understanding the Structure

### Try/Catch/Finally Hierarchy

```
try {
  // 1. Code that may throw
  // 2. Optional: if/else statements
  // 3. Optional: return/throw statements
} catch (error) {
  // Only executes if an error is thrown
} finally {
  // ALWAYS executes (after try and catch)
}
```

### Key Rules

1. **`else` is NOT allowed** after `catch` - use `finally` instead
2. **`finally` executes last** - after both try and catch complete
3. **`finally` runs even if**:
   - Code in try throws an error
   - Code in try returns a value
   - Code in catch returns a value
4. **`finally` is optional** - you can have try/catch without finally

## When to Use Finally

### Use Finally For:
- ✅ Database connection cleanup
- ✅ File handle release
- ✅ Network request cancellation
- ✅ Resource deallocation
- ✅ Logging operations

### Example: Resource Cleanup

```typescript
let connection: DatabaseConnection | null = null

try {
  connection = connectToDatabase()
  const data = connection.query('SELECT * FROM users')
  return data
} catch (error) {
  console.error('Database error:', error)
  throw error
} finally {
  // Always close connection, even if error occurs
  if (connection) {
    connection.close()
  }
}
```

### Example: Logging

```typescript
try {
  const result = performOperation()
  return result
} catch (error) {
  console.error('Operation failed:', error)
  throw error
} finally {
  // Log completion regardless of success/failure
  console.log('Operation completed')
}
```

## Common Patterns

### Pattern 1: Simple Error Handling

```typescript
try {
  const result = riskyOperation()
  return result
} catch (error) {
  // Handle error
  console.error(error)
  return defaultValue
}
```

### Pattern 2: Error Handling with Cleanup

```typescript
let resource: Resource | null = null

try {
  resource = acquireResource()
  const result = useResource(resource)
  return result
} catch (error) {
  console.error('Error:', error)
  throw error
} finally {
  // Cleanup
  if (resource) {
    releaseResource(resource)
  }
}
```

### Pattern 3: No Finally (Simple Case)

```typescript
try {
  const result = processData()
  return result
} catch (error) {
  // Only handle error, no cleanup needed
  console.error('Processing failed:', error)
  return null
}
```

## Debugging Tips

### 1. Check Braces Carefully

```typescript
// ❌ Wrong: Missing closing brace
try {
  const result = riskyOperation()
  return result
} catch (error) {
  console.error(error)
} // Missing closing brace here

// ✅ Correct
try {
  const result = riskyOperation()
  return result
} catch (error) {
  console.error(error)
}
```

### 2. Use Linter Rules

Enable TypeScript strict mode to catch these errors:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitReturns": true
  }
}
```

### 3. Visualize the Structure

```
try {
    └─ if/else statements
    └─ return/throw statements
} catch (error) {
    └─ error handling
} finally {
    └─ cleanup (optional)
}
```

## Summary

| Component | Required? | Executes When? |
|-----------|-----------|----------------|
| `try` | Required | Always |
| `catch` | Optional | If error thrown |
| `finally` | Optional | Always (after try/catch) |

**Remember:**
- Use `finally` for cleanup, not for conditional logic
- Never use `else` after `catch` - use `finally` instead
- `finally` runs last, even after return statements