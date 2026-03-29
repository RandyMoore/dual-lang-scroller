# Vue.js API Reference Documentation

This document summarizes key concepts and APIs from the Vue.js official API reference (https://vuejs.org/api/).

## Overview

Vue.js is a progressive JavaScript framework for building user interfaces. The API reference provides comprehensive documentation for all Vue.js features, organized into several categories.

## Global API

### Application
- **createApp()**: Creates a new Vue application instance
- **createSSRApp()**: Creates a Vue application instance for server-side rendering
- **app.mount()**: Mounts the application to a DOM element
- **app.unmount()**: Unmounts the application from the DOM
- **app.onUnmount()**: Registers an unmount callback
- **app.component()**: Registers a global component
- **app.directive()**: Registers a global directive
- **app.use()**: Registers a plugin
- **app.mixin()**: Registers a global mixin
- **app.provide()**: Provides values globally
- **app.runWithContext()**: Runs code within the app context
- **app.version**: Returns the Vue.js version
- **app.config**: Application configuration object
  - **errorHandler**: Custom error handling
  - **warnHandler**: Custom warning handling
  - **performance**: Performance monitoring
  - **compilerOptions**: Compiler options
  - **globalProperties**: Global properties
  - **optionMergeStrategies**: Custom merge strategies
  - **idPrefix**: Component ID prefix
  - **throwUnhandledErrorInProduction**: Error handling in production

### General
- **version**: Vue.js version number
- **nextTick()**: Executes code after the next DOM update
- **defineComponent()**: Creates a component definition with TypeScript support
- **defineAsyncComponent()**: Creates an async component definition

## Composition API

### setup()
- **Basic Usage**: Main entry point for component logic
- **Accessing Props**: Access component props
- **Setup Context**: Provides access to template refs, slots, attrs, emit
- **Usage with Render Functions**: Works with render functions

### Reactivity: Core
- **ref()**: Creates a reactive reference to a primitive value
- **computed()**: Creates a computed property
- **reactive()**: Creates a reactive object
- **readonly()**: Creates a readonly reactive object
- **watchEffect()**: Automatically tracks dependencies and runs effect
- **watchPostEffect()**: Runs effect after DOM updates
- **watchSyncEffect()**: Runs effect synchronously
- **watch()**: Watches specific source and callback
- **onWatcherCleanup()**: Cleanup function for watchers

### Reactivity: Utilities
- **isRef()**: Checks if value is a ref
- **unref()**: Unwraps ref to value
- **toRef()**: Creates a ref from a property
- **toValue()**: Gets value from ref or reactive
- **toRefs()**: Converts reactive object to refs
- **isProxy()**: Checks if value is a reactive proxy
- **isReactive()**: Checks if value is reactive
- **isReadonly()**: Checks if value is readonly

### Reactivity: Advanced
- **shallowRef()**: Creates a shallow reactive ref
- **triggerRef()**: Forces update of shallow ref
- **customRef()**: Creates custom ref with manual tracking
- **shallowReactive()**: Creates shallow reactive object
- **shallowReadonly()**: Creates shallow readonly object
- **toRaw()**: Returns raw, non-reactive object
- **markRaw()**: Marks object as non-reactive
- **effectScope()**: Creates a scope for effects
- **getCurrentScope()**: Gets current effect scope
- **onScopeDispose()**: Registers cleanup callback

### Lifecycle Hooks
- **onMounted()**: Called after component mounted
- **onUpdated()**: Called after component updated
- **onUnmounted()**: Called after component unmounted
- **onBeforeMount()**: Called before component mounted
- **onBeforeUpdate()**: Called before component updated
- **onBeforeUnmount()**: Called before component unmounted
- **onErrorCaptured()**: Captures component error
- **onRenderTracked()**: Called when dependency tracked
- **onRenderTriggered()**: Called when dependency triggered
- **onActivated()**: Called when component activated
- **onDeactivated()**: Called when component deactivated
- **onServerPrefetch()**: Called on server-side prefetch

### Dependency Injection
- **provide()**: Provides value to descendants
- **inject()**: Injects value from ancestor
- **hasInjectionContext()**: Checks if in injection context

### Helpers
- **useAttrs()**: Access component attributes
- **useSlots()**: Access component slots
- **useModel()**: Access v-model binding
- **useTemplateRef()**: Access template ref
- **useId()**: Access unique component ID

## Options API

### Options: State
- **data**: Returns reactive data object
- **props**: Component props definition
- **computed**: Computed properties
- **methods**: Component methods
- **watch**: Watchers
- **emits**: Emitted events
- **expose**: Exposes component properties

### Options: Rendering
- **template**: Component template
- **render**: Render function
- **compilerOptions**: Compiler options
- **slots**: Component slots

### Options: Lifecycle
- **beforeCreate**: Called before initialization
- **created**: Called after initialization
- **beforeMount**: Called before mounting
- **mounted**: Called after mounting
- **beforeUpdate**: Called before update
- **updated**: Called after update
- **beforeUnmount**: Called before unmount
- **unmounted**: Called after unmount
- **errorCaptured**: Captures error
- **renderTracked**: Called when dependency tracked
- **renderTriggered**: Called when dependency triggered
- **activated**: Called when activated
- **deactivated**: Called when deactivated
- **serverPrefetch**: Called on server prefetch

### Options: Composition
- **provide**: Provides value
- **inject**: Injects value
- **mixins**: Mixin definitions
- **extends**: Extended component

### Options: Misc
- **name**: Component name
- **inheritAttrs**: Inherit attributes
- **components**: Component definitions
- **directives**: Directive definitions

### Component Instance
- **$data**: Component data
- **$props**: Component props
- **$el**: Component DOM element
- **$options**: Component options
- **$parent**: Parent component
- **$root**: Root component
- **$slots**: Component slots
- **$refs**: Component refs
- **$attrs**: Component attributes
- **$watch()**: Watch method
- **$emit()**: Emit method
- **$forceUpdate()**: Force update
- **$nextTick()**: Next tick method

## Built-ins

### Directives
- **v-text**: Updates text content
- **v-html**: Updates HTML content
- **v-show**: Toggles visibility
- **v-if**: Conditional rendering
- **v-else**: Conditional rendering
- **v-else-if**: Conditional rendering
- **v-for**: List rendering
- **v-on**: Event listeners
- **v-bind**: Attribute bindings
- **v-model**: Two-way binding
- **v-slot**: Slot syntax
- **v-pre**: Skip compilation
- **v-once**: One-time rendering
- **v-memo**: Memoization
- **v-cloak**: Hide until compiled

### Components
- **<Transition>**: Transition wrapper
- **<TransitionGroup>**: Transition group
- **<KeepAlive>**: Keep alive component
- **<Teleport>**: Teleport component
- **<Suspense>**: Suspense component

### Special Elements
- **<component>**: Dynamic component
- **<slot>**: Slot element
- **<template>**: Template element

### Special Attributes
- **key**: Key attribute for list rendering
- **ref**: Reference attribute
- **is**: Dynamic component type

## Single-File Component

### Syntax Specification
- **Overview**: SFC structure and rules
- **Language Blocks**: Script, template, style blocks
- **Automatic Name Inference**: Component name from filename
- **Pre-Processors**: Pre-processing support
- **src Imports**: Import from external files
- **Comments**: Comment syntax

### <script setup>
- **Basic Syntax**: Setup script syntax
- **Reactivity**: Reactive features
- **Using Components**: Component usage
- **Using Custom Directives**: Directive usage
- **defineProps() & defineEmits()**: Props and emits definitions
- **defineModel()**: Model definition
- **defineExpose()**: Expose properties
- **defineOptions()**: Component options
- **defineSlots()**: Slots definition
- **useSlots() & useAttrs()**: Slot and attribute access
- **Usage alongside normal <script>**: Mixed script usage
- **Top-level await**: Async support
- **Import Statements**: Import syntax
- **Generics**: Generic type support
- **Restrictions**: Syntax restrictions

### CSS Features
- **Scoped CSS**: Scoped CSS support
- **CSS Modules**: CSS module support
- **v-bind() in CSS**: Reactive CSS bindings

## Advanced APIs

### Custom Elements
- **defineCustomElement()**: Creates custom element
- **useHost()**: Access host element
- **useShadowRoot()**: Access shadow root
- **this.$host**: Host element access

### Render Function
- **h()**: Create VNode
- **mergeProps()**: Merge props
- **cloneVNode()**: Clone VNode
- **isVNode()**: Check VNode
- **resolveComponent()**: Resolve component
- **resolveDirective()**: Resolve directive
- **withDirectives()**: Add directives
- **withModifiers()**: Add modifiers

### Server-Side Rendering
- **renderToString()**: Render to string
- **renderToNodeStream()**: Render to node stream
- **pipeToNodeWritable()**: Pipe to writable
- **renderToWebStream()**: Render to web stream
- **pipeToWebWritable()**: Pipe to writable
- **useSSRContext()**: Access SSR context
- **data-allow-mismatch**: Hydration mismatch handling

### TypeScript Utility Types
- **PropType<T>**: Prop type definition
- **MaybeRef<T>**: Maybe ref type
- **MaybeRefOrGetter<T>**: Maybe ref or getter type
- **ExtractPropTypes<T>**: Extract prop types
- **ExtractPublicPropTypes<T>**: Extract public prop types
- **ComponentCustomProperties**: Custom properties
- **ComponentCustomOptions**: Custom options
- **ComponentCustomProps**: Custom props
- **CSSProperties**: CSS properties

### Custom Renderer
- **createRenderer()**: Create custom renderer

### Compile-Time Flags
- **__VUE_OPTIONS_API__**: Options API flag
- **__VUE_PROD_DEVTOOLS__**: Production devtools flag
- **__VUE_PROD_HYDRATION_MISMATCH_DETAILS__**: Hydration mismatch details flag
- **Configuration Guides**: Configuration guides

## Project Implementation Notes

### Current Vue.js Usage in dual-lang-scroller

**Main Entry Point (src/main.ts)**:
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

**App Component (src/App.vue)**:
```vue
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// App component with router view
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
</style>
```

### Key Concepts Applied

1. **createApp()**: Creates Vue application instance
2. **router**: Vue Router integration for navigation
3. **router-view**: Dynamic component for routing
4. **Composition API**: Uses `<script setup>` syntax
5. **TypeScript**: Uses `lang="ts"` for type safety
6. **Global CSS**: Applied via `import './style.css'`

## Learning Resources

- Official API Reference: https://vuejs.org/api/
- Vue.js Documentation: https://vuejs.org
- Vue.js Guide: https://vuejs.org/guide
- Vue.js Composition API Guide: https://vuejs.org/guide/extras/composition-api-faq.html
- Vue.js TypeScript Guide: https://vuejs.org/guide/typescript.html