# CodingTasks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Task 1, 2,3 completed 4 is completed partially.


Here are some common Angular coding tasks that could be asked during an interview:

1. Component Creation and Data Binding
Task: Create an Angular component that displays a list of users. The component should allow you to add a new user to the list and display them dynamically.
Key Concepts: Component creation, data binding, event handling, forms.
2. Services and Dependency Injection
Task: Write a service that fetches data from a mock API (or JSON file) and returns it to the component. Inject this service into a component to display the data.
Key Concepts: Services, HTTP requests, Dependency Injection, observables.
3. Routing and Navigation
Task: Implement Angular routing to navigate between different views (e.g., Home, About, Contact). Create a component for each view, and make sure the application updates the URL when navigating.
Key Concepts: Angular Routing, routerLink, router-outlet.
4. Forms: Template-driven and Reactive
Task: Create a form to collect user information (like name, email, and age). Use both template-driven and reactive forms to implement this.
Key Concepts: Template-driven forms, Reactive forms, form validation.
5. Directives
Task: Create a custom directive that highlights text when the user hovers over it.
Key Concepts: Directives, HostListener, HostBinding.
6. Pipes
Task: Implement a custom pipe that formats a date string into a specific format (e.g., converting a date to 'MM/DD/YYYY').
Key Concepts: Custom Pipes, PipeTransform, Angular’s built-in pipes.
7. State Management
Task: Implement simple state management using Angular's services or NgRx. Store and update user authentication status (e.g., logged in/out).
Key Concepts: State management, services, NgRx (if applicable).
8. Lazy Loading
Task: Set up lazy loading for feature modules in Angular. Create multiple modules and ensure that they are loaded only when necessary.
Key Concepts: Lazy loading, Angular Modules, Routing.
9. HTTP Interceptors
Task: Create an HTTP interceptor that adds a custom authorization token to the request headers for outgoing HTTP requests.
Key Concepts: HTTP Interceptors, HttpClientModule, token handling.
10. Unit Testing with Jasmine and Karma
Task: Write unit tests for an Angular component or service using Jasmine and Karma. Test basic methods and the interaction between components/services.
Key Concepts: Jasmine, Karma, TestBed, mocks, spies.
11. Angular Lifecycle Hooks
Task: Implement various lifecycle hooks in an Angular component (e.g., ngOnInit, ngOnChanges, ngOnDestroy) and demonstrate how they work in different scenarios.
Key Concepts: Lifecycle hooks, Angular Component lifecycle.
12. Angular Change Detection
Task: Explain and demonstrate Angular's change detection mechanism with an example where you modify data both within and outside Angular's context (e.g., using setTimeout or an external event).
Key Concepts: Change detection, Zones, ngZone, ngOnChanges.
13. Custom Event Emitters
Task: Create a child component that emits an event to its parent when a button is clicked. The parent should handle the event and log a message to the console.
Key Concepts: EventEmitter, @Output, component communication.
14. Optimization and Performance
Task: Optimize the performance of a list-rendering component that handles thousands of records. Use techniques such as trackBy for ngFor loops and change detection strategy.
Key Concepts: Change detection strategies (OnPush), trackBy function, performance optimization.
15. Custom Validator
Task: Create a custom form validator that checks if a user's input matches a specific pattern (e.g., checking if an email address is valid).
Key Concepts: Custom form validators, Validators, error handling.
16. Observables and RxJS
Task: Use RxJS operators to manage asynchronous operations like data fetching, and handle responses using operators like map, filter, switchMap, etc.
Key Concepts: Observables, RxJS, operators, asynchronous programming.
17. Component Interaction using Services
Task: Implement two sibling components communicating via a shared service. One component updates a shared state, and the other listens to it.
Key Concepts: Services for inter-component communication, BehaviorSubject, Observables.
18. Global Error Handling
Task: Set up global error handling for HTTP requests using Angular's error handling strategies.
Key Concepts: Global error handling, HttpErrorResponse, ErrorHandler