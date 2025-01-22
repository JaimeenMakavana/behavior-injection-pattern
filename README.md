# Behavior Injection Pattern: A New React.js Paradigm 🚀

Introducing the **Behavior Injection Pattern**, a highly flexible and modular approach for enhancing React components dynamically. Unlike traditional patterns like Higher-Order Components (HOC) and Render Props, this pattern enables dynamic and composable behaviors without creating additional wrapper components or tightly coupling logic.

---

## Why Behavior Injection? 🤔

In modern React applications, scalability and modularity are key to maintaining clean codebases. Existing patterns like HOC and Render Props often lead to:

- **Wrapper Hell**: Nested layers of components that reduce readability.
- **Static Enhancements**: Limited ability to dynamically toggle behaviors.
- **Tight Coupling**: Hard-to-maintain logic spread across components.

**Behavior Injection** addresses these limitations by:

1. **Decoupling Logic**: Encapsulates reusable behaviors separately.
2. **Dynamic Composition**: Easily toggle, combine, or extend behaviors at runtime.
3. **Improved Performance**: Avoids unnecessary wrappers, reducing re-renders.

---

## Features ✨

- **Dynamic Composition**: Inject one or multiple behaviors based on requirements.
- **Scalability**: Easily scale behaviors for role-based access, theming, analytics, and more.
- **Simplicity**: Clean and intuitive syntax for developers.
- **Flexibility**: Works seamlessly with TypeScript and other React libraries.

---

## Installation

Clone the repository or add the files to your project directory.

```bash
git clone https://github.com/JaimeenMakavana/behavior-injection-pattern
```

---

## Example Usage 📄

Here's an example showcasing **Role-Based Access Control (RBAC)** using Behavior Injection.

### File Structure:

```
src/
├── components/
│   ├── Behaviors/
│   │   ├── applyBehavior.js
│   │   ├── rbac-behaviors.js
│   └── ChatComponent.js
├── App.js
```

### Behavior Definitions

Create reusable behaviors encapsulating specific logic.

```tsx
// rbac-behaviors.js
export const adminBehaviour = () => ({
  canBanUser: true,
  canEditChannel: false,
});

export const moderatorBehaviour = () => ({
  canBanUser: false,
  canEditChannel: true,
});
```

### Behavior Injector

Define the **applyBehavior** function to dynamically inject behaviors.

```tsx
// applyBehavior.js
export const applyBehavior = (Component, behaviors) => {
  return function EnhancedComponent(props) {
    // Combine all injected props from behaviors
    const injectedProps = behaviors.reduce((acc, behavior) => {
      return { ...acc, ...behavior(props) };
    }, {});

    console.log("Injected Props:", injectedProps); // Observe dynamic composition in action
    return <Component {...props} {...injectedProps} />;
  };
};
```

### Base Component

A simple chat component to demonstrate role-based access.

```tsx
// ChatComponent.js
import React from "react";

const ChatComponent = ({ canBanUser, canEditChannel }) => {
  return (
    <div>
      {canBanUser && <button>Ban User</button>}
      {canEditChannel && <button>Edit Channel</button>}
    </div>
  );
};

export default ChatComponent;
```

### Enhanced Component with Behavior Injection

Combine behaviors dynamically to enhance the `ChatComponent`.

```tsx
// App.js
import React from "react";
import { applyBehavior } from "./components/Behaviors/applyBehavior";
import {
  adminBehaviour,
  moderatorBehaviour,
} from "./components/Behaviors/rbac-behaviors";
import ChatComponent from "./components/ChatComponent";

const EnhancedChatComponent = applyBehavior(ChatComponent, [
  adminBehaviour,
  moderatorBehaviour,
]);

const App = () => {
  return <EnhancedChatComponent />;
};

export default App;
```

---

## Key Observations 🔍

1. **Dynamic Behavior**: Play with the `applyBehavior` array to see the dynamic results:

   - **Single Behavior**: `[adminBehaviour]` -> Only admin actions available.
   - **Single Behavior**: `[moderatorBehaviour]` -> Only moderator actions available.
   - **Multiple Behaviors**: `[adminBehaviour, moderatorBehaviour]` -> Combined actions of both.

2. **Composability**: Add new roles (e.g., `viewerBehavior`, `superAdminBehavior`) without modifying existing code.

---

## Comparison with Other Patterns 📊

| **Feature**         | **HOC**                 | **Render Props**           | **Behavior Injection**            |
| ------------------- | ----------------------- | -------------------------- | --------------------------------- |
| Modularity          | Static                  | Requires manual rendering  | Dynamic and scalable              |
| Nested Wrappers     | Yes                     | No                         | No                                |
| Dynamic Composition | Limited                 | Limited                    | High                              |
| Readability         | Moderate (wrapper hell) | Verbose                    | Clean and intuitive               |
| Best Use Cases      | Authentication, Logging | Mouse Tracking, Animations | RBAC, Theming, Analytics, Filters |

---

## Use Cases 💡

1. **Role-Based Access Control (RBAC)**: Dynamically enable/disable actions based on roles.
2. **Dynamic Theming**: Inject light/dark or custom themes.
3. **Feature Toggles**: Enable beta features or premium features dynamically.
4. **Data Formatting**: Apply modular formatting logic for forms or reports.
5. **Message Filtering**: Inject profanity/spam filters for real-time moderation.

---

## Benefits 🎯

- Eliminates HOC nesting issues.
- Enhances scalability and modularity.
- Simplifies dynamic feature development.

---

## Contributions 🤝

Feel free to submit issues or feature requests. Pull requests are welcome to extend this pattern with new examples or improvements.

---

Elevate your React.js projects with the **Behavior Injection Pattern**—a cleaner, more flexible way to manage component logic! 🎉
