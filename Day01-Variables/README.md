# Day 01 – JavaScript Variables

## Concepts Practiced

- `let`, `const`, `var` variable declarations
- Block scope vs function scope
- Constants and immutability
- Mutating arrays declared as `const`

## Exercises Completed

1. Stored name, age, and country using `let`
2. Reassigned `let` value (favorite food)
3. Tested `const` reassignment error
4. Understood scope of `var` and `let` inside blocks
5. Modified array values even with `const`
6. Used `let` in a loop and tested scope

## Key Takeaways

- Prefer `const` for fixed values and `let` for values that change
- Avoid `var` to prevent scope bugs
- `const` blocks reassignment but not object/array mutation

# Day 01 – JavaScript Variables

## Summary of var, let, and const

### var
- Function scoped
- Reassignable and redeclarable
- Hoisted
- Avoid in modern JS

### let
- Block scoped
- Reassignable but not redeclarable
- Preferred for variables that change

### const
- Block scoped
- Cannot be reassigned or redeclared
- Use for fixed values (e.g., PI, config)
- Allows internal changes for arrays/objects

### Personal Notes
- I now understand scope, reassignment, and the purpose of each keyword.
- I can confidently choose between `let` and `const` based on use case.
- I know to avoid `var` unless maintaining old code.


