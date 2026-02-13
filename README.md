# React JS Assignments Repository

This repository is a starter template for practicing React JS through progressively harder assignments.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app at the local URL printed in the terminal.

## Assignment Structure

Each assignment has:
- **Objective**
- **Requirements**
- **Stretch goals**

Assignments are documented in [`assignments/`](assignments).

## Suggested Progression

1. Assignment 01: Counter App
2. Assignment 02: To-do List
3. Assignment 03: Product Filter & Search

## Submission Guidance

- Complete each assignment in sequence.
- Commit after each assignment with a clear message.
- Include a screenshot/GIF and a short reflection for what you learned.

Assignments to be done..
# 1️⃣ Build a Data Table (Very Common)

## What They Ask

Build a table with:

* Sorting
* Filtering
* Pagination
* Optional: server-side pagination

## What They’re Testing

* Derived state modeling
* Memoization (`useMemo`)
* Avoiding unnecessary re-renders
* Controlled inputs
* Handling large datasets

## Bonus Twist

* Debounced search
* Column-based sorting
* Multi-sort
* Server fetch simulation

This question shows up a LOT.

---

# 2️⃣ Build a File Explorer (Like You Did)

Very common at:

* Google-style interviews
* Airbnb-type companies

They test:

* Recursive components
* Tree state modeling
* Controlled expansion
* Performance thinking

Often they add:

* “Expand all”
* “Select node”
* “Add new folder”

---

# 3️⃣ Build a Multi-Step Form

Used everywhere.

They test:

* State lifting
* Validation architecture
* Step control logic
* Clean separation
* Avoiding prop drilling

Sometimes they ask:

> How would you make this reusable?

That’s the real test.

---

# 4️⃣ Build an Autocomplete Search

This is VERY common.

Requirements:

* Input
* Debounced API call
* Show dropdown suggestions
* Keyboard navigation
* Close on outside click

They test:

* Debounce logic
* useEffect correctness
* Cleanup handling
* Race conditions
* UX polish

This separates strong engineers from average ones.

---

# 5️⃣ Implement useDebounce Hook

Or:

> Write your own custom hook for X

They test:

* Hook rules understanding
* Cleanup
* Dependencies
* Closure behavior

---

# 6️⃣ Infinite Scroll List

Requirements:

* Fetch more when near bottom
* Avoid duplicate requests
* Loading indicator
* Prevent race conditions

They test:

* Scroll event optimization
* IntersectionObserver
* Effect cleanup
* Performance awareness

---

# 7️⃣ Modal Manager System

Build a reusable modal system.

They test:

* Portal usage
* Global state modeling
* Component architecture

---

# 8️⃣ Shopping Cart with Derived State

Add items, update quantity, calculate totals.

They test:

* Derived state vs stored state
* Avoid recomputation
* Functional updates

---

# 9️⃣ Drag and Drop List Reorder

Very common in strong frontend interviews.

They test:

* State immutability
* Index manipulation
* Controlled reordering logic

---

# 🔟 Build a Controlled Form Library

Sometimes they go meta:

> Build a small form engine

That’s advanced.

---

# 🏆 If I Had To Pick Top 3 Most Common

1. ✅ Data Table (sorting/filtering)
2. ✅ Autocomplete with debounce
3. ✅ Multi-step form

Those show up constantly.

---

# 🎯 If You’re Preparing for Top Companies

I recommend we practice:

* Autocomplete with debounce
* Data table with sorting + pagination
* Infinite scroll
* Custom hook implementation
* Complex state modeling

---

So now tell me:

Do you want:

* A UI-heavy problem?
* A performance-heavy problem?
* A state-modeling-heavy problem?
* Or something that mixes all three?

Let’s simulate a real interview.
