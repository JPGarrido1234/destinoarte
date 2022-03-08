(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mis-destinos-mis-destinos-module"],{

/***/ "./node_modules/@angular/animations/fesm2015/animations.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/animations/fesm2015/animations.js ***!
  \*****************************************************************/
/*! exports provided: AUTO_STYLE, AnimationBuilder, AnimationFactory, NoopAnimationPlayer, animate, animateChild, animation, group, keyframes, query, sequence, stagger, state, style, transition, trigger, useAnimation, ɵAnimationGroupPlayer, ɵPRE_STYLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTO_STYLE", function() { return AUTO_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationBuilder", function() { return AnimationBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFactory", function() { return AnimationFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopAnimationPlayer", function() { return NoopAnimationPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateChild", function() { return animateChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return sequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return useAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAnimationGroupPlayer", function() { return AnimationGroupPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵPRE_STYLE", function() { return ɵPRE_STYLE; });
/**
 * @license Angular v11.2.14
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * An injectable service that produces an animation sequence programmatically within an
 * Angular component or directive.
 * Provided by the `BrowserAnimationsModule` or `NoopAnimationsModule`.
 *
 * @usageNotes
 *
 * To use this service, add it to your component or directive as a dependency.
 * The service is instantiated along with your component.
 *
 * Apps do not typically need to create their own animation players, but if you
 * do need to, follow these steps:
 *
 * 1. Use the `build()` method to create a programmatic animation using the
 * `animate()` function. The method returns an `AnimationFactory` instance.
 *
 * 2. Use the factory object to create an `AnimationPlayer` and attach it to a DOM element.
 *
 * 3. Use the player object to control the animation programmatically.
 *
 * For example:
 *
 * ```ts
 * // import the service from BrowserAnimationsModule
 * import {AnimationBuilder} from '@angular/animations';
 * // require the service as a dependency
 * class MyCmp {
 *   constructor(private _builder: AnimationBuilder) {}
 *
 *   makeAnimation(element: any) {
 *     // first define a reusable animation
 *     const myAnimation = this._builder.build([
 *       style({ width: 0 }),
 *       animate(1000, style({ width: '100px' }))
 *     ]);
 *
 *     // use the returned factory object to create a player
 *     const player = myAnimation.create(element);
 *
 *     player.play();
 *   }
 * }
 * ```
 *
 * @publicApi
 */
class AnimationBuilder {
}
/**
 * A factory object returned from the `AnimationBuilder`.`build()` method.
 *
 * @publicApi
 */
class AnimationFactory {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Specifies automatic styling.
 *
 * @publicApi
 */
const AUTO_STYLE = '*';
/**
 * Creates a named animation trigger, containing a  list of `state()`
 * and `transition()` entries to be evaluated when the expression
 * bound to the trigger changes.
 *
 * @param name An identifying string.
 * @param definitions  An animation definition object, containing an array of `state()`
 * and `transition()` declarations.
 *
 * @return An object that encapsulates the trigger data.
 *
 * @usageNotes
 * Define an animation trigger in the `animations` section of `@Component` metadata.
 * In the template, reference the trigger by name and bind it to a trigger expression that
 * evaluates to a defined animation state, using the following format:
 *
 * `[@triggerName]="expression"`
 *
 * Animation trigger bindings convert all values to strings, and then match the
 * previous and current values against any linked transitions.
 * Booleans can be specified as `1` or `true` and `0` or `false`.
 *
 * ### Usage Example
 *
 * The following example creates an animation trigger reference based on the provided
 * name value.
 * The provided animation value is expected to be an array consisting of state and
 * transition declarations.
 *
 * ```typescript
 * @Component({
 *   selector: "my-component",
 *   templateUrl: "my-component-tpl.html",
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *       state(...),
 *       state(...),
 *       transition(...),
 *       transition(...)
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "something";
 * }
 * ```
 *
 * The template associated with this component makes use of the defined trigger
 * by binding to an element within its template code.
 *
 * ```html
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * ### Using an inline function
 * The `transition` animation method also supports reading an inline function which can decide
 * if its associated animation should be run.
 *
 * ```typescript
 * // this method is run each time the `myAnimationTrigger` trigger value changes.
 * function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:
 string]: any}): boolean {
 *   // notice that `element` and `params` are also available here
 *   return toState == 'yes-please-animate';
 * }
 *
 * @Component({
 *   selector: 'my-component',
 *   templateUrl: 'my-component-tpl.html',
 *   animations: [
 *     trigger('myAnimationTrigger', [
 *       transition(myInlineMatcherFn, [
 *         // the animation sequence code
 *       ]),
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "yes-please-animate";
 * }
 * ```
 *
 * ### Disabling Animations
 * When true, the special animation control binding `@.disabled` binding prevents
 * all animations from rendering.
 * Place the  `@.disabled` binding on an element to disable
 * animations on the element itself, as well as any inner animation triggers
 * within the element.
 *
 * The following example shows how to use this feature:
 *
 * ```typescript
 * @Component({
 *   selector: 'my-component',
 *   template: `
 *     <div [@.disabled]="isDisabled">
 *       <div [@childAnimation]="exp"></div>
 *     </div>
 *   `,
 *   animations: [
 *     trigger("childAnimation", [
 *       // ...
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   isDisabled = true;
 *   exp = '...';
 * }
 * ```
 *
 * When `@.disabled` is true, it prevents the `@childAnimation` trigger from animating,
 * along with any inner animations.
 *
 * ### Disable animations application-wide
 * When an area of the template is set to have animations disabled,
 * **all** inner components have their animations disabled as well.
 * This means that you can disable all animations for an app
 * by placing a host binding set on `@.disabled` on the topmost Angular component.
 *
 * ```typescript
 * import {Component, HostBinding} from '@angular/core';
 *
 * @Component({
 *   selector: 'app-component',
 *   templateUrl: 'app.component.html',
 * })
 * class AppComponent {
 *   @HostBinding('@.disabled')
 *   public animationsDisabled = true;
 * }
 * ```
 *
 * ### Overriding disablement of inner animations
 * Despite inner animations being disabled, a parent animation can `query()`
 * for inner elements located in disabled areas of the template and still animate
 * them if needed. This is also the case for when a sub animation is
 * queried by a parent and then later animated using `animateChild()`.
 *
 * ### Detecting when an animation is disabled
 * If a region of the DOM (or the entire application) has its animations disabled, the animation
 * trigger callbacks still fire, but for zero seconds. When the callback fires, it provides
 * an instance of an `AnimationEvent`. If animations are disabled,
 * the `.disabled` flag on the event is true.
 *
 * @publicApi
 */
function trigger(name, definitions) {
    return { type: 7 /* Trigger */, name, definitions, options: {} };
}
/**
 * Defines an animation step that combines styling information with timing information.
 *
 * @param timings Sets `AnimateTimings` for the parent animation.
 * A string in the format "duration [delay] [easing]".
 *  - Duration and delay are expressed as a number and optional time unit,
 * such as "1s" or "10ms" for one second and 10 milliseconds, respectively.
 * The default unit is milliseconds.
 *  - The easing value controls how the animation accelerates and decelerates
 * during its runtime. Value is one of  `ease`, `ease-in`, `ease-out`,
 * `ease-in-out`, or a `cubic-bezier()` function call.
 * If not supplied, no easing is applied.
 *
 * For example, the string "1s 100ms ease-out" specifies a duration of
 * 1000 milliseconds, and delay of 100 ms, and the "ease-out" easing style,
 * which decelerates near the end of the duration.
 * @param styles Sets AnimationStyles for the parent animation.
 * A function call to either `style()` or `keyframes()`
 * that returns a collection of CSS style entries to be applied to the parent animation.
 * When null, uses the styles from the destination state.
 * This is useful when describing an animation step that will complete an animation;
 * see "Animating to the final state" in `transitions()`.
 * @returns An object that encapsulates the animation step.
 *
 * @usageNotes
 * Call within an animation `sequence()`, `{@link animations/group group()}`, or
 * `transition()` call to specify an animation step
 * that applies given style data to the parent animation for a given amount of time.
 *
 * ### Syntax Examples
 * **Timing examples**
 *
 * The following examples show various `timings` specifications.
 * - `animate(500)` : Duration is 500 milliseconds.
 * - `animate("1s")` : Duration is 1000 milliseconds.
 * - `animate("100ms 0.5s")` : Duration is 100 milliseconds, delay is 500 milliseconds.
 * - `animate("5s ease-in")` : Duration is 5000 milliseconds, easing in.
 * - `animate("5s 10ms cubic-bezier(.17,.67,.88,.1)")` : Duration is 5000 milliseconds, delay is 10
 * milliseconds, easing according to a bezier curve.
 *
 * **Style examples**
 *
 * The following example calls `style()` to set a single CSS style.
 * ```typescript
 * animate(500, style({ background: "red" }))
 * ```
 * The following example calls `keyframes()` to set a CSS style
 * to different values for successive keyframes.
 * ```typescript
 * animate(500, keyframes(
 *  [
 *   style({ background: "blue" }),
 *   style({ background: "red" })
 *  ])
 * ```
 *
 * @publicApi
 */
function animate(timings, styles = null) {
    return { type: 4 /* Animate */, styles, timings };
}
/**
 * @description Defines a list of animation steps to be run in parallel.
 *
 * @param steps An array of animation step objects.
 * - When steps are defined by `style()` or `animate()`
 * function calls, each call within the group is executed instantly.
 * - To specify offset styles to be applied at a later time, define steps with
 * `keyframes()`, or use `animate()` calls with a delay value.
 * For example:
 *
 * ```typescript
 * group([
 *   animate("1s", style({ background: "black" })),
 *   animate("2s", style({ color: "white" }))
 * ])
 * ```
 *
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the group data.
 *
 * @usageNotes
 * Grouped animations are useful when a series of styles must be
 * animated at different starting times and closed off at different ending times.
 *
 * When called within a `sequence()` or a
 * `transition()` call, does not continue to the next
 * instruction until all of the inner animation steps have completed.
 *
 * @publicApi
 */
function group(steps, options = null) {
    return { type: 3 /* Group */, steps, options };
}
/**
 * Defines a list of animation steps to be run sequentially, one by one.
 *
 * @param steps An array of animation step objects.
 * - Steps defined by `style()` calls apply the styling data immediately.
 * - Steps defined by `animate()` calls apply the styling data over time
 *   as specified by the timing data.
 *
 * ```typescript
 * sequence([
 *   style({ opacity: 0 }),
 *   animate("1s", style({ opacity: 1 }))
 * ])
 * ```
 *
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the sequence data.
 *
 * @usageNotes
 * When you pass an array of steps to a
 * `transition()` call, the steps run sequentially by default.
 * Compare this to the `{@link animations/group group()}` call, which runs animation steps in
 *parallel.
 *
 * When a sequence is used within a `{@link animations/group group()}` or a `transition()` call,
 * execution continues to the next instruction only after each of the inner animation
 * steps have completed.
 *
 * @publicApi
 **/
function sequence(steps, options = null) {
    return { type: 2 /* Sequence */, steps, options };
}
/**
 * Declares a key/value object containing CSS properties/styles that
 * can then be used for an animation `state`, within an animation `sequence`,
 * or as styling data for calls to `animate()` and `keyframes()`.
 *
 * @param tokens A set of CSS styles or HTML styles associated with an animation state.
 * The value can be any of the following:
 * - A key-value style pair associating a CSS property with a value.
 * - An array of key-value style pairs.
 * - An asterisk (*), to use auto-styling, where styles are derived from the element
 * being animated and applied to the animation when it starts.
 *
 * Auto-styling can be used to define a state that depends on layout or other
 * environmental factors.
 *
 * @return An object that encapsulates the style data.
 *
 * @usageNotes
 * The following examples create animation styles that collect a set of
 * CSS property values:
 *
 * ```typescript
 * // string values for CSS properties
 * style({ background: "red", color: "blue" })
 *
 * // numerical pixel values
 * style({ width: 100, height: 0 })
 * ```
 *
 * The following example uses auto-styling to allow a component to animate from
 * a height of 0 up to the height of the parent element:
 *
 * ```
 * style({ height: 0 }),
 * animate("1s", style({ height: "*" }))
 * ```
 *
 * @publicApi
 **/
function style(tokens) {
    return { type: 6 /* Style */, styles: tokens, offset: null };
}
/**
 * Declares an animation state within a trigger attached to an element.
 *
 * @param name One or more names for the defined state in a comma-separated string.
 * The following reserved state names can be supplied to define a style for specific use
 * cases:
 *
 * - `void` You can associate styles with this name to be used when
 * the element is detached from the application. For example, when an `ngIf` evaluates
 * to false, the state of the associated element is void.
 *  - `*` (asterisk) Indicates the default state. You can associate styles with this name
 * to be used as the fallback when the state that is being animated is not declared
 * within the trigger.
 *
 * @param styles A set of CSS styles associated with this state, created using the
 * `style()` function.
 * This set of styles persists on the element once the state has been reached.
 * @param options Parameters that can be passed to the state when it is invoked.
 * 0 or more key-value pairs.
 * @return An object that encapsulates the new state data.
 *
 * @usageNotes
 * Use the `trigger()` function to register states to an animation trigger.
 * Use the `transition()` function to animate between states.
 * When a state is active within a component, its associated styles persist on the element,
 * even when the animation ends.
 *
 * @publicApi
 **/
function state(name, styles, options) {
    return { type: 0 /* State */, name, styles, options };
}
/**
 * Defines a set of animation styles, associating each style with an optional `offset` value.
 *
 * @param steps A set of animation styles with optional offset data.
 * The optional `offset` value for a style specifies a percentage of the total animation
 * time at which that style is applied.
 * @returns An object that encapsulates the keyframes data.
 *
 * @usageNotes
 * Use with the `animate()` call. Instead of applying animations
 * from the current state
 * to the destination state, keyframes describe how each style entry is applied and at what point
 * within the animation arc.
 * Compare [CSS Keyframe Animations](https://www.w3schools.com/css/css3_animations.asp).
 *
 * ### Usage
 *
 * In the following example, the offset values describe
 * when each `backgroundColor` value is applied. The color is red at the start, and changes to
 * blue when 20% of the total time has elapsed.
 *
 * ```typescript
 * // the provided offset values
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red", offset: 0 }),
 *   style({ backgroundColor: "blue", offset: 0.2 }),
 *   style({ backgroundColor: "orange", offset: 0.3 }),
 *   style({ backgroundColor: "black", offset: 1 })
 * ]))
 * ```
 *
 * If there are no `offset` values specified in the style entries, the offsets
 * are calculated automatically.
 *
 * ```typescript
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red" }) // offset = 0
 *   style({ backgroundColor: "blue" }) // offset = 0.33
 *   style({ backgroundColor: "orange" }) // offset = 0.66
 *   style({ backgroundColor: "black" }) // offset = 1
 * ]))
 *```

 * @publicApi
 */
function keyframes(steps) {
    return { type: 5 /* Keyframes */, steps };
}
/**
 * Declares an animation transition as a sequence of animation steps to run when a given
 * condition is satisfied. The condition is a Boolean expression or function that compares
 * the previous and current animation states, and returns true if this transition should occur.
 * When the state criteria of a defined transition are met, the associated animation is
 * triggered.
 *
 * @param stateChangeExpr A Boolean expression or function that compares the previous and current
 * animation states, and returns true if this transition should occur. Note that  "true" and "false"
 * match 1 and 0, respectively. An expression is evaluated each time a state change occurs in the
 * animation trigger element.
 * The animation steps run when the expression evaluates to true.
 *
 * - A state-change string takes the form "state1 => state2", where each side is a defined animation
 * state, or an asterix (*) to refer to a dynamic start or end state.
 *   - The expression string can contain multiple comma-separated statements;
 * for example "state1 => state2, state3 => state4".
 *   - Special values `:enter` and `:leave` initiate a transition on the entry and exit states,
 * equivalent to  "void => *"  and "* => void".
 *   - Special values `:increment` and `:decrement` initiate a transition when a numeric value has
 * increased or decreased in value.
 * - A function is executed each time a state change occurs in the animation trigger element.
 * The animation steps run when the function returns true.
 *
 * @param steps One or more animation objects, as returned by the `animate()` or
 * `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param options An options object that can contain a delay value for the start of the animation,
 * and additional developer-defined parameters. Provided values for additional parameters are used
 * as defaults, and override values can be passed to the caller on invocation.
 * @returns An object that encapsulates the transition data.
 *
 * @usageNotes
 * The template associated with a component binds an animation trigger to an element.
 *
 * ```HTML
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * All transitions are defined within an animation trigger,
 * along with named states that the transitions change to and from.
 *
 * ```typescript
 * trigger("myAnimationTrigger", [
 *  // define states
 *  state("on", style({ background: "green" })),
 *  state("off", style({ background: "grey" })),
 *  ...]
 * ```
 *
 * Note that when you call the `sequence()` function within a `{@link animations/group group()}`
 * or a `transition()` call, execution does not continue to the next instruction
 * until each of the inner animation steps have completed.
 *
 * ### Syntax examples
 *
 * The following examples define transitions between the two defined states (and default states),
 * using various options:
 *
 * ```typescript
 * // Transition occurs when the state value
 * // bound to "myAnimationTrigger" changes from "on" to "off"
 * transition("on => off", animate(500))
 * // Run the same animation for both directions
 * transition("on <=> off", animate(500))
 * // Define multiple state-change pairs separated by commas
 * transition("on => off, off => void", animate(500))
 * ```
 *
 * ### Special values for state-change expressions
 *
 * - Catch-all state change for when an element is inserted into the page and the
 * destination state is unknown:
 *
 * ```typescript
 * transition("void => *", [
 *  style({ opacity: 0 }),
 *  animate(500)
 *  ])
 * ```
 *
 * - Capture a state change between any states:
 *
 *  `transition("* => *", animate("1s 0s"))`
 *
 * - Entry and exit transitions:
 *
 * ```typescript
 * transition(":enter", [
 *   style({ opacity: 0 }),
 *   animate(500, style({ opacity: 1 }))
 *   ]),
 * transition(":leave", [
 *   animate(500, style({ opacity: 0 }))
 *   ])
 * ```
 *
 * - Use `:increment` and `:decrement` to initiate transitions:
 *
 * ```typescript
 * transition(":increment", group([
 *  query(':enter', [
 *     style({ left: '100%' }),
 *     animate('0.5s ease-out', style('*'))
 *   ]),
 *  query(':leave', [
 *     animate('0.5s ease-out', style({ left: '-100%' }))
 *  ])
 * ]))
 *
 * transition(":decrement", group([
 *  query(':enter', [
 *     style({ left: '100%' }),
 *     animate('0.5s ease-out', style('*'))
 *   ]),
 *  query(':leave', [
 *     animate('0.5s ease-out', style({ left: '-100%' }))
 *  ])
 * ]))
 * ```
 *
 * ### State-change functions
 *
 * Here is an example of a `fromState` specified as a state-change function that invokes an
 * animation when true:
 *
 * ```typescript
 * transition((fromState, toState) =>
 *  {
 *   return fromState == "off" && toState == "on";
 *  },
 *  animate("1s 0s"))
 * ```
 *
 * ### Animating to the final state
 *
 * If the final step in a transition is a call to `animate()` that uses a timing value
 * with no style data, that step is automatically considered the final animation arc,
 * for the element to reach the final state. Angular automatically adds or removes
 * CSS styles to ensure that the element is in the correct final state.
 *
 * The following example defines a transition that starts by hiding the element,
 * then makes sure that it animates properly to whatever state is currently active for trigger:
 *
 * ```typescript
 * transition("void => *", [
 *   style({ opacity: 0 }),
 *   animate(500)
 *  ])
 * ```
 * ### Boolean value matching
 * If a trigger binding value is a Boolean, it can be matched using a transition expression
 * that compares true and false or 1 and 0. For example:
 *
 * ```
 * // in the template
 * <div [@openClose]="open ? true : false">...</div>
 * // in the component metadata
 * trigger('openClose', [
 *   state('true', style({ height: '*' })),
 *   state('false', style({ height: '0px' })),
 *   transition('false <=> true', animate(500))
 * ])
 * ```
 *
 * @publicApi
 **/
function transition(stateChangeExpr, steps, options = null) {
    return { type: 1 /* Transition */, expr: stateChangeExpr, animation: steps, options };
}
/**
 * Produces a reusable animation that can be invoked in another animation or sequence,
 * by calling the `useAnimation()` function.
 *
 * @param steps One or more animation objects, as returned by the `animate()`
 * or `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param options An options object that can contain a delay value for the start of the
 * animation, and additional developer-defined parameters.
 * Provided values for additional parameters are used as defaults,
 * and override values can be passed to the caller on invocation.
 * @returns An object that encapsulates the animation data.
 *
 * @usageNotes
 * The following example defines a reusable animation, providing some default parameter
 * values.
 *
 * ```typescript
 * var fadeAnimation = animation([
 *   style({ opacity: '{{ start }}' }),
 *   animate('{{ time }}',
 *   style({ opacity: '{{ end }}'}))
 *   ],
 *   { params: { time: '1000ms', start: 0, end: 1 }});
 * ```
 *
 * The following invokes the defined animation with a call to `useAnimation()`,
 * passing in override parameter values.
 *
 * ```js
 * useAnimation(fadeAnimation, {
 *   params: {
 *     time: '2s',
 *     start: 1,
 *     end: 0
 *   }
 * })
 * ```
 *
 * If any of the passed-in parameter values are missing from this call,
 * the default values are used. If one or more parameter values are missing before a step is
 * animated, `useAnimation()` throws an error.
 *
 * @publicApi
 */
function animation(steps, options = null) {
    return { type: 8 /* Reference */, animation: steps, options };
}
/**
 * Executes a queried inner animation element within an animation sequence.
 *
 * @param options An options object that can contain a delay value for the start of the
 * animation, and additional override values for developer-defined parameters.
 * @return An object that encapsulates the child animation data.
 *
 * @usageNotes
 * Each time an animation is triggered in Angular, the parent animation
 * has priority and any child animations are blocked. In order
 * for a child animation to run, the parent animation must query each of the elements
 * containing child animations, and run them using this function.
 *
 * Note that this feature is designed to be used with `query()` and it will only work
 * with animations that are assigned using the Angular animation library. CSS keyframes
 * and transitions are not handled by this API.
 *
 * @publicApi
 */
function animateChild(options = null) {
    return { type: 9 /* AnimateChild */, options };
}
/**
 * Starts a reusable animation that is created using the `animation()` function.
 *
 * @param animation The reusable animation to start.
 * @param options An options object that can contain a delay value for the start of
 * the animation, and additional override values for developer-defined parameters.
 * @return An object that contains the animation parameters.
 *
 * @publicApi
 */
function useAnimation(animation, options = null) {
    return { type: 10 /* AnimateRef */, animation, options };
}
/**
 * Finds one or more inner elements within the current element that is
 * being animated within a sequence. Use with `animate()`.
 *
 * @param selector The element to query, or a set of elements that contain Angular-specific
 * characteristics, specified with one or more of the following tokens.
 *  - `query(":enter")` or `query(":leave")` : Query for newly inserted/removed elements.
 *  - `query(":animating")` : Query all currently animating elements.
 *  - `query("@triggerName")` : Query elements that contain an animation trigger.
 *  - `query("@*")` : Query all elements that contain an animation triggers.
 *  - `query(":self")` : Include the current element into the animation sequence.
 *
 * @param animation One or more animation steps to apply to the queried element or elements.
 * An array is treated as an animation sequence.
 * @param options An options object. Use the 'limit' field to limit the total number of
 * items to collect.
 * @return An object that encapsulates the query data.
 *
 * @usageNotes
 * Tokens can be merged into a combined query selector string. For example:
 *
 * ```typescript
 *  query(':self, .record:enter, .record:leave, @subTrigger', [...])
 * ```
 *
 * The `query()` function collects multiple elements and works internally by using
 * `element.querySelectorAll`. Use the `limit` field of an options object to limit
 * the total number of items to be collected. For example:
 *
 * ```js
 * query('div', [
 *   animate(...),
 *   animate(...)
 * ], { limit: 1 })
 * ```
 *
 * By default, throws an error when zero items are found. Set the
 * `optional` flag to ignore this error. For example:
 *
 * ```js
 * query('.some-element-that-may-not-be-there', [
 *   animate(...),
 *   animate(...)
 * ], { optional: true })
 * ```
 *
 * ### Usage Example
 *
 * The following example queries for inner elements and animates them
 * individually using `animate()`.
 *
 * ```typescript
 * @Component({
 *   selector: 'inner',
 *   template: `
 *     <div [@queryAnimation]="exp">
 *       <h1>Title</h1>
 *       <div class="content">
 *         Blah blah blah
 *       </div>
 *     </div>
 *   `,
 *   animations: [
 *    trigger('queryAnimation', [
 *      transition('* => goAnimate', [
 *        // hide the inner elements
 *        query('h1', style({ opacity: 0 })),
 *        query('.content', style({ opacity: 0 })),
 *
 *        // animate the inner elements in, one by one
 *        query('h1', animate(1000, style({ opacity: 1 }))),
 *        query('.content', animate(1000, style({ opacity: 1 }))),
 *      ])
 *    ])
 *  ]
 * })
 * class Cmp {
 *   exp = '';
 *
 *   goAnimate() {
 *     this.exp = 'goAnimate';
 *   }
 * }
 * ```
 *
 * @publicApi
 */
function query(selector, animation, options = null) {
    return { type: 11 /* Query */, selector, animation, options };
}
/**
 * Use within an animation `query()` call to issue a timing gap after
 * each queried item is animated.
 *
 * @param timings A delay value.
 * @param animation One ore more animation steps.
 * @returns An object that encapsulates the stagger data.
 *
 * @usageNotes
 * In the following example, a container element wraps a list of items stamped out
 * by an `ngFor`. The container element contains an animation trigger that will later be set
 * to query for each of the inner items.
 *
 * Each time items are added, the opacity fade-in animation runs,
 * and each removed item is faded out.
 * When either of these animations occur, the stagger effect is
 * applied after each item's animation is started.
 *
 * ```html
 * <!-- list.component.html -->
 * <button (click)="toggle()">Show / Hide Items</button>
 * <hr />
 * <div [@listAnimation]="items.length">
 *   <div *ngFor="let item of items">
 *     {{ item }}
 *   </div>
 * </div>
 * ```
 *
 * Here is the component code:
 *
 * ```typescript
 * import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
 * @Component({
 *   templateUrl: 'list.component.html',
 *   animations: [
 *     trigger('listAnimation', [
 *     ...
 *     ])
 *   ]
 * })
 * class ListComponent {
 *   items = [];
 *
 *   showItems() {
 *     this.items = [0,1,2,3,4];
 *   }
 *
 *   hideItems() {
 *     this.items = [];
 *   }
 *
 *   toggle() {
 *     this.items.length ? this.hideItems() : this.showItems();
 *    }
 *  }
 * ```
 *
 * Here is the animation trigger code:
 *
 * ```typescript
 * trigger('listAnimation', [
 *   transition('* => *', [ // each time the binding value changes
 *     query(':leave', [
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 0 }))
 *       ])
 *     ]),
 *     query(':enter', [
 *       style({ opacity: 0 }),
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 1 }))
 *       ])
 *     ])
 *   ])
 * ])
 * ```
 *
 * @publicApi
 */
function stagger(timings, animation) {
    return { type: 12 /* Stagger */, timings, animation };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function scheduleMicroTask(cb) {
    Promise.resolve(null).then(cb);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An empty programmatic controller for reusable animations.
 * Used internally when animations are disabled, to avoid
 * checking for the null case when an animation player is expected.
 *
 * @see `animate()`
 * @see `AnimationPlayer`
 * @see `GroupPlayer`
 *
 * @publicApi
 */
class NoopAnimationPlayer {
    constructor(duration = 0, delay = 0) {
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._started = false;
        this._destroyed = false;
        this._finished = false;
        this._position = 0;
        this.parentPlayer = null;
        this.totalTime = duration + delay;
    }
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(fn => fn());
            this._onDoneFns = [];
        }
    }
    onStart(fn) {
        this._onStartFns.push(fn);
    }
    onDone(fn) {
        this._onDoneFns.push(fn);
    }
    onDestroy(fn) {
        this._onDestroyFns.push(fn);
    }
    hasStarted() {
        return this._started;
    }
    init() { }
    play() {
        if (!this.hasStarted()) {
            this._onStart();
            this.triggerMicrotask();
        }
        this._started = true;
    }
    /** @internal */
    triggerMicrotask() {
        scheduleMicroTask(() => this._onFinish());
    }
    _onStart() {
        this._onStartFns.forEach(fn => fn());
        this._onStartFns = [];
    }
    pause() { }
    restart() { }
    finish() {
        this._onFinish();
    }
    destroy() {
        if (!this._destroyed) {
            this._destroyed = true;
            if (!this.hasStarted()) {
                this._onStart();
            }
            this.finish();
            this._onDestroyFns.forEach(fn => fn());
            this._onDestroyFns = [];
        }
    }
    reset() { }
    setPosition(position) {
        this._position = this.totalTime ? position * this.totalTime : 1;
    }
    getPosition() {
        return this.totalTime ? this._position / this.totalTime : 1;
    }
    /** @internal */
    triggerCallback(phaseName) {
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach(fn => fn());
        methods.length = 0;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A programmatic controller for a group of reusable animations.
 * Used internally to control animations.
 *
 * @see `AnimationPlayer`
 * @see `{@link animations/group group()}`
 *
 */
class AnimationGroupPlayer {
    constructor(_players) {
        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this._onDestroyFns = [];
        this.parentPlayer = null;
        this.totalTime = 0;
        this.players = _players;
        let doneCount = 0;
        let destroyCount = 0;
        let startCount = 0;
        const total = this.players.length;
        if (total == 0) {
            scheduleMicroTask(() => this._onFinish());
        }
        else {
            this.players.forEach(player => {
                player.onDone(() => {
                    if (++doneCount == total) {
                        this._onFinish();
                    }
                });
                player.onDestroy(() => {
                    if (++destroyCount == total) {
                        this._onDestroy();
                    }
                });
                player.onStart(() => {
                    if (++startCount == total) {
                        this._onStart();
                    }
                });
            });
        }
        this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
    }
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(fn => fn());
            this._onDoneFns = [];
        }
    }
    init() {
        this.players.forEach(player => player.init());
    }
    onStart(fn) {
        this._onStartFns.push(fn);
    }
    _onStart() {
        if (!this.hasStarted()) {
            this._started = true;
            this._onStartFns.forEach(fn => fn());
            this._onStartFns = [];
        }
    }
    onDone(fn) {
        this._onDoneFns.push(fn);
    }
    onDestroy(fn) {
        this._onDestroyFns.push(fn);
    }
    hasStarted() {
        return this._started;
    }
    play() {
        if (!this.parentPlayer) {
            this.init();
        }
        this._onStart();
        this.players.forEach(player => player.play());
    }
    pause() {
        this.players.forEach(player => player.pause());
    }
    restart() {
        this.players.forEach(player => player.restart());
    }
    finish() {
        this._onFinish();
        this.players.forEach(player => player.finish());
    }
    destroy() {
        this._onDestroy();
    }
    _onDestroy() {
        if (!this._destroyed) {
            this._destroyed = true;
            this._onFinish();
            this.players.forEach(player => player.destroy());
            this._onDestroyFns.forEach(fn => fn());
            this._onDestroyFns = [];
        }
    }
    reset() {
        this.players.forEach(player => player.reset());
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    }
    setPosition(p) {
        const timeAtPosition = p * this.totalTime;
        this.players.forEach(player => {
            const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
            player.setPosition(position);
        });
    }
    getPosition() {
        const longestPlayer = this.players.reduce((longestSoFar, player) => {
            const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
            return newPlayerIsLongest ? player : longestSoFar;
        }, null);
        return longestPlayer != null ? longestPlayer.getPosition() : 0;
    }
    beforeDestroy() {
        this.players.forEach(player => {
            if (player.beforeDestroy) {
                player.beforeDestroy();
            }
        });
    }
    /** @internal */
    triggerCallback(phaseName) {
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach(fn => fn());
        methods.length = 0;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ɵPRE_STYLE = '!';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=animations.js.map


/***/ }),

/***/ "./src/app/interfaces/IListAudioExist.ts":
/*!***********************************************!*\
  !*** ./src/app/interfaces/IListAudioExist.ts ***!
  \***********************************************/
/*! exports provided: IListAudioExist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IListAudioExist", function() { return IListAudioExist; });
var IListAudioExist = /** @class */ (function () {
    function IListAudioExist() {
    }
    return IListAudioExist;
}());



/***/ }),

/***/ "./src/app/pages/mis-destinos/mis-destinos.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/mis-destinos/mis-destinos.module.ts ***!
  \***********************************************************/
/*! exports provided: MisDestinosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisDestinosPageModule", function() { return MisDestinosPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mis_destinos_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mis-destinos.page */ "./src/app/pages/mis-destinos/mis-destinos.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _mis_destinos_page__WEBPACK_IMPORTED_MODULE_5__["MisDestinosPage"]
    }
];
var MisDestinosPageModule = /** @class */ (function () {
    function MisDestinosPageModule() {
    }
    MisDestinosPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_mis_destinos_page__WEBPACK_IMPORTED_MODULE_5__["MisDestinosPage"]]
        })
    ], MisDestinosPageModule);
    return MisDestinosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mis-destinos/mis-destinos.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/mis-destinos/mis-destinos.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\" *ngIf=\"!clickAudio\">\n    <ion-toolbar class=\"toolbarppl\">   \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"clickedStar()\">\n                <ion-icon slot=\"icon-only\" src=\"/assets/img/menu_atras.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title class=\"ion-text-uppercase\" style=\"font-size: unset; text-align: center; font-size: 1.4em;\">\n        {{title_header}}\n      </ion-title> \n      <ion-buttons slot=\"end\">\n        <ion-menu-button menu=\"first\"\n                         style=\"color: #39B1C0;\">\n        </ion-menu-button>\n      </ion-buttons> \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding fondoppal\" *ngIf=\"!clickAudio\">\n  <ion-content class=\"fondoppal\" style=\"text-align: center;\" *ngIf=\"showSearchCity\">\n\n    <ion-card mode=\"ios\">\n      <img src=\"/assets/img/imagen_españa_aplicacion.jpg\"/>\n    </ion-card>\n    <ion-label style=\"color:#1F4D9A;\"><h1 style=\"color:#575756; font-size:27px;\">ESPAÑA</h1></ion-label>\n    <ion-list class=\"fondoppal\" *ngIf=\"mydestines != null\">\n      <ion-item class=\"fondoppal\">\n        <!-- [interfaceOptions]=\"selectOptions\" interface=\"action-sheet\" (click)=\"onClickListColors()\"-->\n        <ion-select [(ngModel)]=\"city\" (click)=\"onClickListColors()\" interface=\"alert\" placeholder=\"Selecciona ciudad\">\n          <ion-label>Ciudad</ion-label>\n          <ion-select-option name=\"city\" class=\"custom-options\" *ngFor=\"let city of res_prov_es\" [value]=\"city\">  \n            <div part=\"text\">{{city}}</div>            \n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-button (click)=\"selectCity(city)\"\n                class=\"btnAceptar\"\n                type=\"submit\" \n                expand=\"block\"\n                shape=\"round\">\n      ACEPTAR\n    </ion-button>\n\n\n    <ion-card mode=\"ios\">\n      <img src=\"/assets/img/imagen_otros_destinos.jpg\"/>\n    </ion-card>\n    <ion-label style=\"color:#1F4D9A;\"><h1 style=\"color:#575756; font-size:27px;\">OTROS DESTINOS</h1></ion-label>\n    <ion-list class=\"fondoppal\">\n      <ion-item class=\"fondoppal\">\n        <ion-select [(ngModel)]=\"city\" (click)=\"onClickListColors()\" interface=\"alert\" placeholder=\"Selecciona ciudad\">\n          <ion-select-option name=\"city\" class=\"custom-options\" *ngFor=\"let city of res_prov_other\" [value]=\"city\">\n            <div part=\"text\">{{city}}</div>\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-button (click)=\"selectCity(city)\"\n                class=\"btnAceptar\"\n                type=\"submit\" \n                expand=\"block\"\n                shape=\"round\">\n      ACEPTAR\n    </ion-button>\n\n  </ion-content>\n  <ion-content class=\"fondoppal\" *ngIf=\"!showSearchCity\">\n    <div *ngIf=\"prov_img_url != null\">\n      <div *ngFor=\"let item of prov_img_url\">\n        <div *ngIf=\"item.nombre == title_header\">\n          <ion-card>\n            <loading-image *ngIf=\"item.urlimg != null\" [url]=\"item.urlimg\"></loading-image>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"mydestines.itinerario != null\">\n      <div *ngFor=\"let destino of mydestines.itinerario; let b = index\">\n        <div *ngIf=\"title_header == destino.ciudad_guia\">\n          <div style=\"width: 100%; text-align: center;\" *ngIf=\"destino.mapa != null\">\n            <ion-label  class=\"title_color\" [routerLink]=\"rutaMapa.concat(destino.idguia).concat('/0/1')\">MAPA</ion-label>\n          </div>\n          <ion-item class=\"fondoppal\" (click)=\"onClickShowIti(b)\">\n            <ion-label style=\"color:#575756; font-size: 1.5em;\">\n              {{destino.titulo}}\n            </ion-label>\n            <ion-icon [id]=\"showDIconAddItemsIA.concat(b)\" style=\"margin-top: 0.5em;\" class=\"color_icon\" slot=\"end\" name=\"add\"></ion-icon>\n            <ion-icon [id]=\"showDIconRemoveItemsIA.concat(b)\" style=\"margin-top: 0.5em; display:none;\" class=\"color_icon \"slot=\"end\" name=\"remove\"></ion-icon>\n          </ion-item>    \n            <div style=\"display:none;\" [id]=\"showIA.concat(b)\" *ngIf=\"thisIsArray(destino.partes) && destino.partes != null\">\n              <div *ngFor=\"let nivel1 of destino.partes; let m = index\" >\n                  <ion-card>\n                    <loading-image *ngIf=\"nivel1.img_thumb != null\" [url]=\"nivel1.img_thumb\"></loading-image>\n                  </ion-card>\n                  <ion-item class=\"fondoppal\" lines=\"none\" (click)=\"onClickShow(m, 'itinerario', b)\">\n                      <ion-label style=\"color: #575756; font-size: 1.5em;\">{{nivel1.titulo}}&nbsp;</ion-label>\n                      <ion-icon style=\"margin-top: 0.5em;\" [id]=\"showIIconAdd.concat(b).concat(m)\" class=\"color_icon\" slot=\"end\" name=\"add\"></ion-icon>\n                      <ion-icon style=\"margin-top: 0.5em; display:none;\" [id]=\"showIIconRemove.concat(b).concat(m)\" class=\"color_icon \"slot=\"end\" name=\"remove\"></ion-icon>                \n                  </ion-item>\n                  <div style=\"display: none;\" [id]=\"showI.concat(b).concat(m)\" *ngIf=\"thisIsArray(nivel1.partes) && nivel1.partes != null\">\n                    <div *ngIf=\"nivel1.mapa != null\">\n                      <div style=\"width: 100%; text-align: center;\">\n                        <ion-label  class=\"title_color\" [routerLink]=\"rutaMapa.concat(nivel1.idguiapartes).concat('/').concat(nivel1.id_itinerario).concat('/1')\">MAPA DÍA&nbsp;{{m+1}}</ion-label>\n                      </div>\n                    </div>\n                    <div *ngFor=\"let nivel2 of nivel1.partes; let j = index\">\n                      <ion-card>\n                        <loading-image *ngIf=\"nivel2.img_thumb != null\" [url]=\"nivel2.img_thumb\"></loading-image>\n                      </ion-card>\n                      <div *ngIf=\"nivel2.audio.length > 0 && nivel2.partes.length == 0\">\n                        <ion-list class=\"fondoppal\" *ngFor=\"let audio of nivel2.audio\" (click)=\"onClickPlayMp3Partes(destino.idguia, nivel2, audio, 1, destino.img_thumb)\">\n                          <ion-item class=\"fondoppal\">\n                            <ion-label class=\"ion-text-uppercase\">{{audio.title}}</ion-label>\n                            <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n                          </ion-item>\n                        </ion-list>\n                      </div>\n                      <div *ngIf=\"nivel2.audio.length == 0 && nivel2.partes.length > 0\">\n                        <ion-list class=\"fondoppal\">\n                          <ion-item class=\"fondoppal\" (click)=\"onClickShowItems(m, j)\">\n                            <ion-label class=\"ion-text-uppercase\">{{nivel2.titulo}}</ion-label>\n                            <ion-icon [id]=\"showIIconAddItems.concat(m).concat(j)\" class=\"color_icon\" slot=\"end\" name=\"add\"></ion-icon>\n                            <ion-icon style=\"display: none;\" [id]=\"showIIconRemoveItems.concat(m).concat(j)\" class=\"color_icon\" slot=\"end\" name=\"remove\"></ion-icon>\n                          </ion-item>\n                          <div style=\"display: none;\" [id]=\"showIitems.concat(m).concat(j)\" *ngIf=\"nivel2.partes != null && thisIsArray(nivel2.partes)\">\n                            <ion-list class=\"fondoppal\" *ngFor=\"let nivel3 of nivel2.partes\">                \n                              <div *ngIf=\"nivel3.audio.length > 0\">\n                                <div class=\"fondoppal\" *ngFor=\"let audio of nivel3.audio\" (click)=\"onClickPlayMp3Partes(destino.idguia, nivel3, audio, 1, destino.img_thumb)\">\n                                  <ion-item class=\"fondoppal\">\n                                    <ion-label class=\"ion-text-uppercase\">{{audio.title}}</ion-label>\n                                    <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n                                  </ion-item>\n                                </div>\n                              </div>\n                              <div *ngIf=\"nivel3.partes != null && thisIsArray(nivel3.partes)\">\n                                <ion-list class=\"fondoppal\" *ngFor=\"let nivel4  of nivel3.partes\">\n                                  <div *ngIf=\"nivel4.audio.length > 0\">\n                                    <div class=\"fondoppal\" *ngFor=\"let audio of nivel4.audio\" (click)=\"onClickPlayMp3Partes(destino.idguia, nivel4, audio, 1, destino.img_thumb)\">\n                                      <ion-item class=\"fondoppal\">\n                                        <ion-label class=\"ion-text-uppercase\">{{audio.title}}</ion-label>\n                                        <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n                                      </ion-item>\n                                    </div>\n                                  </div>\n                                </ion-list>\n                              </div>\n                            </ion-list>\n                          </div>\n                        </ion-list>\n                      </div>\n                    </div>\n                    \n                  </div> \n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"mydestines.dia != null\">\n      <div *ngFor=\"let destino of mydestines.dia; let d = index\">\n        <div *ngIf=\"title_header == destino.ciudad_guia\">\n          <ion-item class=\"fondoppal\" lines=\"none\" *ngIf=\"mydestines.dia != null && cont_asoc_day != 0\" (click)=\"onClickShowDay(d)\">\n            <ion-label style=\"color:#575756; font-size: 1.5em;\">{{destino.titulo}}&nbsp;</ion-label>\n            <ion-icon [id]=\"showDIconAddItemsA.concat(d)\" style=\"margin-top: 0.1em;\" class=\"color_icon\" slot=\"end\" name=\"add\"></ion-icon>\n            <ion-icon [id]=\"showDIconRemoveItemsA.concat(d)\" style=\"margin-top: 0.1em; display: none;\" class=\"color_icon \"slot=\"end\" name=\"remove\"></ion-icon>  \n          </ion-item>\n          <div style=\"display:none;\" [id]=\"showDA.concat(d)\" *ngIf=\"destino.partes != null && thisIsArray(destino.partes)\">\n            <div *ngIf=\"destino.mapa != null\">\n              <div style=\"width: 100%; text-align: center;\">\n                <ion-label  class=\"title_color\" [routerLink]=\"rutaMapa.concat(destino.idguia).concat('/').concat('/0').concat('/1')\">MAPA</ion-label>\n              </div>\n            </div>\n            <div *ngFor=\"let item of destino.partes; let i = index\"> \n              <ion-card>\n                <loading-image *ngIf=\"item.img_thumb != null\" [url]=\"item.img_thumb\"></loading-image>\n              </ion-card>   \n              <div *ngIf=\"item.audio != null && thisIsArray(item.audio) && item.audio.length > 0\">\n                <ion-list class=\"fondoppal\" *ngFor=\"let audio of item.audio\" (click)=\"onClickPlayMp3Partes(destino.idguia, item, audio, 2, destino.img_thumb)\">\n                  <ion-item class=\"fondoppal\">\n                    <ion-label class=\"ion-text-uppercase\">{{audio.title}}</ion-label>\n                    <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n                  </ion-item>\n                </ion-list>\n              </div>\n              <div *ngIf=\"item.audio.length == 0\">\n                <ion-list class=\"fondoppal\">\n                  \n                  <ion-item class=\"fondoppal\" (click)=\"onClickShowItemsDay(d, i)\">\n                    <ion-label class=\"ion-text-uppercase\">{{item.titulo}}</ion-label>\n                    <ion-icon [id]=\"showDIconAddItems.concat(d).concat(i)\" style=\"margin-top: 0.1em;\" class=\"color_icon\" slot=\"end\" name=\"add\"></ion-icon>\n                    <ion-icon [id]=\"showDIconRemoveItems.concat(d).concat(i)\" style=\"margin-top: 0.1em; display:none;\" class=\"color_icon\" slot=\"end\" name=\"remove\"></ion-icon>\n                  </ion-item>\n\n                  <div style=\"display: none;\" [id]=\"showDItems.concat(d).concat(i)\" *ngIf=\"item.partes != null && thisIsArray(item.partes)\">\n                    <ion-list class=\"fondoppal\" *ngFor=\"let items of item.partes\">\n\n                      <div *ngIf=\"items.audio != null && thisIsArray(items.audio)\">\n                        <div class=\"fondoppal\" *ngFor=\"let audio of items.audio\" (click)=\"onClickPlayMp3Partes(destino.idguia, items, audio, 2, destino.img_thumb)\">\n                          <ion-item class=\"fondoppal\">\n                            <ion-label class=\"ion-text-uppercase\">{{audio.title}}</ion-label>\n                            <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n                          </ion-item>\n                        </div>\n                      </div>\n                      <div *ngIf=\"items.partes != null && thisIsArray(items.partes)\">\n                        <div *ngFor=\"let part of items.partes\">\n                          <div *ngIf=\"part.audio != null && thisIsArray(part.audio)\">\n                            <div class=\"fondoppal\" *ngFor=\"let audio of part.audio\" (click)=\"onClickPlayMp3Partes(destino.idguia, part, audio, 2, destino.img_thumb)\">\n                              <ion-item class=\"fondoppal\">\n                                <ion-label class=\"ion-text-uppercase\">{{audio.title}}</ion-label>\n                                <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n                              </ion-item>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </ion-list>\n                  </div>\n                </ion-list>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <ion-item class=\"fondoppal\" *ngIf=\"(mydestines.monumento != null && cont_asoc_mon != 0) || (mydestines.monumento_comp != null && cont_asoc_monc != 0)\" lines=\"none\" (click)=\"onClickShowMon()\">\n      <ion-label style=\"color:#575756; font-size: 1.5em;\">\n        Monumentos\n      </ion-label>\n      <ion-icon *ngIf=\"!show_mon\" style=\"margin-top: 0.5em;\" class=\"color_icon\" slot=\"end\" name=\"add\"></ion-icon>\n      <ion-icon *ngIf=\"show_mon\" style=\"margin-top: 0.5em;\" class=\"color_icon \"slot=\"end\" name=\"remove\"></ion-icon>\n    </ion-item>  \n    <div class=\"fondoppal\" lines=\"full\" *ngIf=\"mydestines != null && mydestines.monumento != null && show_mon\">\n      <div *ngFor=\"let destino of mydestines.monumento; let x = index\">\n        <div *ngIf=\"title_header == destino.ciudad_guia\">\n          <ion-card mode=\"md\">\n            <img *ngIf=\"destino.img_thumb == 0 || destino.img_thumb == null\" src=\"/assets/img/picasso.jpg\"/>\n            <loading-image *ngIf=\"destino.img_thumb != null\" [url]=\"destino.img_thumb\"></loading-image>\n          </ion-card>  \n          <ion-list class=\"fondoppal\">\n            <ion-item class=\"fondoppal\" (click)=\"onClickShow(x, 'mon')\">\n              <ion-label class=\"ion-text-uppercase\">{{destino.titulo}}</ion-label>\n              <ion-icon [id]=\"showMonIconAdd.concat(x)\" class=\"color_icon\" slot=\"end\" name=\"add\"></ion-icon>\n              <ion-icon [id]=\"showMonIconRemove.concat(x)\" style=\"display:none;\" class=\"color_icon \"slot=\"end\" name=\"remove\"></ion-icon>\n            </ion-item>\n            <div style=\"display: none;\" [id]=\"showM.concat(x)\" *ngIf=\"(destino.partes != null && thisIsArray(destino.partes)) || (destino.audio != null && thisIsArray(destino.audio))\">\n              <ion-item class=\"fondoppal\" *ngFor=\"let item of destino.audio; let i = index\" (click)=\"onClickPlayMp3(item, 0, 3, destino.img_thumb)\"> \n                <ion-label class=\"ion-text-uppercase\">{{item.title}}</ion-label>\n                <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n              </ion-item>\n              <div *ngIf=\"thisIsArray(destino.partes)\">\n                <ion-list class=\"fondoppal\" *ngFor=\"let partes of destino.partes\">\n                  <ion-item class=\"fondoppal\" *ngFor=\"let item of partes.audio; let i = index\" (click)=\"onClickPlayMp3Partes(destino.idguia, partes, item, 3, destino.img_thumb)\">\n                    <ion-label class=\"ion-text-uppercase\">{{item.title}}</ion-label>\n                    <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n                  </ion-item>\n                </ion-list>\n              </div>\n            </div>\n          </ion-list>   \n        </div>\n      </div>\n     \n      <div *ngIf=\"mydestines.monumento_comp != null\" >\n        <div *ngFor=\"let destino of mydestines.monumento_comp; let monc = index\">\n          <div *ngIf=\"title_header == destino.ciudad_guia\">\n            <ion-card mode=\"md\">\n              <loading-image *ngIf=\"destino.img_thumb != null\" [url]=\"destino.img_thumb\"></loading-image>\n            </ion-card>\n            <ion-list class=\"fondoppal\">\n              <ion-item class=\"fondoppal\" (click)=\"onClickShow(monc, 'monc')\">\n                <ion-label class=\"ion-text-uppercase\">{{destino.titulo}}</ion-label>\n                <ion-icon [id]=\"showMonCIconAdd.concat(monc)\" class=\"color_icon\" slot=\"end\" name=\"add\"></ion-icon>\n                <ion-icon [id]=\"showMonCIconRemove.concat(monc)\" style=\"display:none;\" class=\"color_icon \"slot=\"end\" name=\"remove\"></ion-icon>\n              </ion-item>\n            </ion-list>\n            <ion-list style=\"display: none;\" [id]=\"showMC.concat(monc)\">\n              <ion-item class=\"fondoppal\" *ngFor=\"let item of destino.audio\" (click)=\"onClickPlayMp3(item, 0, 4, destino.img_thumb)\">\n                <ion-label class=\"ion-text-uppercase\">{{item.title}}</ion-label>  \n                <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n              </ion-item>\n              <div *ngIf=\"thisIsArray(destino.partes)\">\n                <ion-list class=\"fondoppal\" *ngFor=\"let partes of destino.partes\">\n                  <ion-item class=\"fondoppal\" *ngFor=\"let item of partes.audio\" (click)=\"onClickPlayMp3Partes(destino.idguia, partes, item, 4, destino.img_thumb)\">\n                    <ion-label class=\"ion-text-uppercase\">{{item.title}}</ion-label>\n                    <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n                  </ion-item>\n                  <div *ngIf=\"thisIsArray(partes.partes)\">\n                    <div class=\"fondoppal\" *ngFor=\"let partes of partes.partes\">\n                      <ion-item class=\"fondoppal\" *ngFor=\"let item of partes.audio\" (click)=\"onClickPlayMp3Partes(destino.idguia, partes, item, 4, destino.img_thumb)\">\n                        <ion-label class=\"ion-text-uppercase\">{{item.title}}</ion-label>\n                        <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n                      </ion-item>\n                    </div>\n                  </div>\n                </ion-list>\n              </div>\n            </ion-list>\n          </div>\n        </div>\n      </div>\n    </div>  \n    \n  </ion-content>\n</ion-content>\n\n\n<!-- REPRODUCTOR AUDIO -->\n<ion-header class=\"ion-no-border\" *ngIf=\"clickAudio\" translucent>\n  <ion-toolbar slot=\"fixed\">   \n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"clickedStar()\">\n              <ion-icon slot=\"icon-only\" src=\"/assets/img/menu_atras.svg\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"first\"\n                       style=\"color: #39B1C0;\">\n      </ion-menu-button>\n    </ion-buttons> \n  </ion-toolbar>\n</ion-header>\n<!--  [scrollEvents]=\"true\" -->\n<ion-content class=\"fondoppal\" fullscreen *ngIf=\"clickAudio && mydestines != null\">\n    <!-- MONUMENTO -->  \n    <div *ngIf=\"tipoAudio == 3\">\n      <div *ngIf=\"mydestines.monumento\">\n        <div class=\"contenu\" *ngFor=\"let destino of mydestines.monumento; let i = index\">\n          <div *ngIf=\"responseIdguia == destino.idguia\">\n            <img class=\"img_shadow\" *ngIf=\"destino.img_thumb != null && responseIdItinerario == 0\" [src]=\"destino.img_thumb\"/>\n            <div *ngIf=\"responseIdItinerario != 0\">\n              <div *ngIf=\"destino.partes != null\">\n                <div *ngFor=\"let item of destino.partes\">\n                  <div *ngIf=\"item.id_itinerario == destino.idguia && item.idguiapartes == responseIdItinerario\">\n                    <img class=\"img_shadow\" *ngIf=\"item.img_thumb != null\" [src]=\"item.img_thumb\"/>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <ion-grid class=\"ion-padding heightreproductor\">\n              <ion-row  style=\"font-size: 0.9em;\">\n                <div *ngIf=\"responseIdguia != null && responseIdItinerario == 0\">\n                  <ion-col size=\"12\">\n                    <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{destino.titulo}}</ion-text>\n                  </ion-col>\n                </div>\n                <div *ngIf=\"responseIdguia != null && responseIdItinerario != 0\">\n                  <div *ngIf=\"destino.partes != null\">\n                    <div *ngFor=\"let item of destino.partes\">\n                      <div *ngIf=\"item.id_itinerario == destino.idguia && item.idguiapartes == responseIdItinerario\">\n                        <ion-col size=\"12\">\n                          <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{item.titulo}}</ion-text>\n                        </ion-col>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </ion-row>\n              <ion-row  style=\"font-size: 0.8em;\">\n                <ion-col size=\"12\">\n                  <ion-text style=\"font-size: 1.2em; color:#575756;\">{{destino.ciudad_guia}}</ion-text>\n                </ion-col>\n              </ion-row>  \n              <ion-row style=\"height: 35px; margin-top: 0em;\">\n                <ion-col size=\"12\">    \n                  <ion-range min=\"0\" [max]=\"state.durationSec\" pin=\"true\" class=\"range_reproductor\" step=\"1\" [value]=\"seekbarCount\">\n                    <ion-label *ngIf=\"state.time == null || state.time === undefined\" slot=\"start\">00:00</ion-label>\n                    <ion-label *ngIf=\"state.time != null\" slot=\"start\">{{state.time}}</ion-label>\n                    <ion-label *ngIf=\"state.duration == null || state.duration === undefined\" slot=\"end\">00:00</ion-label>\n                    <ion-label *ngIf=\"state.duration != null\" slot=\"end\">{{state.duration}}</ion-label>\n                  </ion-range>\n                </ion-col>\n              </ion-row>\n              <ion-row style=\"margin-top: 2em; justify-content: center;\">\n                <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAnterior(mydestines, responseIdguia, responseIdItinerario, 'mon', destino.img_thumb)\">\n                  <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/anterior.svg\"></ion-icon>\n                </ion-col> \n                <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickRetroceso()\">\n                  <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/retroceso.svg\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"2\" *ngIf=\"!showPause\" class=\"colrepro\" (click)=\"play()\">\n                  <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/play.svg\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"2\" *ngIf=\"showPause\" class=\"colrepro\" (click)=\"pause()\">\n                  <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAvance()\">\n                    <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/avance.svg\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickSiguiente(mydestines, responseIdguia, responseIdItinerario, 'mon', destino.img_thumb)\">\n                    <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/siguiente.svg\"></ion-icon> \n                </ion-col>\n              </ion-row>\n              <div *ngIf=\"responseIdguia != null && responseIdItinerario == 0\">\n                <ion-row style=\"text-align: center; margin-top:1em;\">\n                  <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                    <div>\n                      <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                      <br>\n                      <ion-text>{{itemimg.name}}</ion-text>\n                    </div>\n                  </ion-col>\n                </ion-row>      \n              </div>\n              <div *ngIf=\"responseIdguia != null && responseIdItinerario != 0\">   \n                <ion-row style=\"text-align: center; margin-top:1em;\">\n                  <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                    <div>\n                      <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                      <br>\n                      <ion-text>{{itemimg.name}}</ion-text>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </div>         \n            </ion-grid>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- FIN MONUMENTO -->\n    <!-- MONUMENTO COMPUESTO -->\n    \n    <div *ngIf=\"tipoAudio == 4\">\n      <div *ngIf=\"mydestines.monumento_comp\">\n        <div class=\"contenu\" *ngFor=\"let destino of mydestines.monumento_comp; let i = index\">\n          <div *ngIf=\"destino.partes != null && destino.partes.length > 0 && thisIsArray(destino.partes)\">\n            <div *ngFor=\"let item of destino.partes\">\n              <div *ngIf=\"item.idguiapartes == responseIdguia && item.id_itinerario == responseIdItinerario\">\n                <img class=\"img_shadow\" *ngIf=\"item.img_thumb != null\" [src]=\"item.img_thumb\"/>\n                <ion-grid class=\"ion-padding heightreproductor\">\n                  <ion-row  style=\"font-size: 0.9em;\">\n                    <ion-col size=\"12\">\n                      <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{item.titulo}}</ion-text>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row  style=\"font-size: 0.8em;\">\n                    <ion-col size=\"12\">\n                      <ion-text style=\"font-size: 1.2em; color:#575756;\">{{destino.ciudad_guia}}</ion-text>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row style=\"height: 40px; margin-top: 0em;\">\n                    <ion-col size=\"12\">\n                      <ion-range min=\"0\" [max]=\"state.durationSec\" pin=\"true\" class=\"range_reproductor\" step=\"1\" [value]=\"seekbarCount\">\n                        <ion-label *ngIf=\"state.time == null || state.time === undefined\" slot=\"start\">00:00</ion-label>\n                        <ion-label *ngIf=\"state.time != null\" slot=\"start\">{{state.time}}</ion-label>\n                        <ion-label *ngIf=\"state.duration == null || state.duration === undefined\" slot=\"end\">00:00</ion-label>\n                        <ion-label *ngIf=\"state.duration != null\" slot=\"end\">{{state.duration}}</ion-label>\n                      </ion-range>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row style=\"margin-top: 2em; justify-content: center;\">\n                    <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAnterior(mydestines, responseIdguia, responseIdItinerario, 'monc', destino.img_thumb)\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/anterior.svg\"></ion-icon>\n                    </ion-col> \n                    <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickRetroceso()\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/retroceso.svg\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" *ngIf=\"!showPause\" (click)=\"play()\" class=\"colrepro\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/play.svg\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" *ngIf=\"showPause\" (click)=\"pause()\" class=\"colrepro\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" (click)=\"onClickAvance()\" class=\"colrepro\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/avance.svg\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickSiguiente(mydestines, responseIdguia, responseIdItinerario, 'monc', destino.img_thumb)\">\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/siguiente.svg\"></ion-icon> \n                    </ion-col>\n                  </ion-row>\n                  <ion-row style=\"text-align: center; margin-top:1em;\">\n                    <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                      <div>\n                        <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                        <br>\n                        <ion-text>{{itemimg.name}}</ion-text>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n              <div *ngIf=\"item.partes != null && thisIsArray(item.partes)\">\n                <div *ngFor=\"let item of item.partes\">\n                  <div *ngIf=\"item.idguiapartes == responseIdguia && item.id_itinerario == responseIdItinerario\">\n                    <img class=\"img_shadow\" *ngIf=\"item.img_thumb != null\" [src]=\"item.img_thumb\"/>\n                    <ion-grid class=\"ion-padding heightreproductor\">\n                      <ion-row  style=\"font-size: 0.9em;\">\n                        <ion-col size=\"12\">\n                          <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{item.titulo}}</ion-text>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row  style=\"font-size: 0.8em;\">\n                        <ion-col size=\"12\">\n                          <ion-text style=\"font-size: 1.2em; color:#575756;\">{{destino.ciudad_guia}}</ion-text>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row style=\"height: 40px; margin-top: 0em;\">\n                        <ion-col size=\"12\">\n                          <ion-range min=\"0\" [max]=\"state.durationSec\" pin=\"true\" class=\"range_reproductor\" step=\"1\" [value]=\"seekbarCount\">\n                            <ion-label *ngIf=\"state.time == null || state.time === undefined\" slot=\"start\">00:00</ion-label>\n                            <ion-label *ngIf=\"state.time != null\" slot=\"start\">{{state.time}}</ion-label>\n                            <ion-label *ngIf=\"state.duration == null || state.duration === undefined\" slot=\"end\">00:00</ion-label>\n                            <ion-label *ngIf=\"state.duration != null\" slot=\"end\">{{state.duration}}</ion-label>\n                          </ion-range>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row style=\"margin-top: 2em; justify-content: center;\">\n                        <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAnterior(mydestines, responseIdguia, responseIdItinerario, 'monc', destino.img_thumb)\">\n                          <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/anterior.svg\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"2\" (click)=\"onClickRetroceso()\" class=\"colrepro\">\n                          <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/retroceso.svg\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"2\" *ngIf=\"!showPause\" (click)=\"play()\" class=\"colrepro\">\n                          <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/play.svg\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"2\" *ngIf=\"showPause\" (click)=\"pause()\" class=\"colrepro\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"2\" (click)=\"onClickAvance()\" class=\"colrepro\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/avance.svg\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickSiguiente(mydestines, responseIdguia, responseIdItinerario, 'monc', destino.img_thumb)\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/siguiente.svg\"></ion-icon> \n                        </ion-col>\n                      </ion-row>\n                      <ion-row style=\"text-align: center; margin-top:1em;\">\n                        <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                          <div>\n                            <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                            <br>\n                            <ion-text>{{itemimg.name}}</ion-text>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <!-- FIN MONUMENTO COMPUESTO -->\n    <!-- DIA -->\n    <div *ngIf=\"tipoAudio == 2\">\n      <div *ngIf=\"mydestines.dia\">\n        <div class=\"contenu\" *ngFor=\"let destino of mydestines.dia\">\n          <div *ngIf=\"thisIsArray(destino.partes) && destino.partes != null && destino.partes.length > 0\">\n            <div *ngFor=\"let item of destino.partes\">\n              <div *ngIf=\"item.idguiapartes == responseIdguia && item.id_itinerario == responseIdItinerario\">\n                <img class=\"img_shadow\" *ngIf=\"item.img_thumb != null\" [src]=\"item.img_thumb\" />\n                <ion-grid class=\"ion-padding heightreproductor\">\n                  <ion-row style=\"font-size: 0.9em;\">\n                    <ion-col size=\"12\">\n                      <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{item.titulo}}</ion-text>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row  style=\"font-size: 0.8em;\">\n                    <ion-col size=\"12\">\n                      <ion-text style=\"font-size: 1.2em; color:#575756;\">{{destino.ciudad_guia}}</ion-text>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row style=\"height: 40px; margin-top: 0em;\">\n                    <ion-col size=\"12\">\n                      <ion-range min=\"0\" [max]=\"state.durationSec\" pin=\"true\" class=\"range_reproductor\" step=\"1\" [value]=\"seekbarCount\">\n                        <ion-label *ngIf=\"state.time == null || state.time === undefined\" slot=\"start\">00:00</ion-label>\n                        <ion-label *ngIf=\"state.time != null\" slot=\"start\">{{state.time}}</ion-label>\n                        <ion-label *ngIf=\"state.duration == null || state.duration === undefined\" slot=\"end\">00:00</ion-label>\n                        <ion-label *ngIf=\"state.duration != null\" slot=\"end\">{{state.duration}}</ion-label>\n                      </ion-range>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row style=\"margin-top: 2em; justify-content: center;\">\n                    <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAnterior(mydestines, responseIdguia, responseIdItinerario, 'dia', destino.img_thumb)\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/anterior.svg\"></ion-icon>\n                    </ion-col> \n                    <ion-col size=\"2\" (click)=\"onClickRetroceso()\" class=\"colrepro\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/retroceso.svg\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" *ngIf=\"!showPause\" (click)=\"play(destino.audio)\" class=\"colrepro\">\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/play.svg\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" *ngIf=\"showPause\" (click)=\"pause()\" class=\"colrepro\">\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" (click)=\"onClickAvance()\" class=\"colrepro\">\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/avance.svg\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickSiguiente(mydestines, responseIdguia, responseIdItinerario, 'dia', destino.img_thumb)\">\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/siguiente.svg\"></ion-icon> \n                    </ion-col>\n                  </ion-row>\n                  <ion-row style=\"text-align: center; margin-top:1em;\">\n                    <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                      <div>\n                        <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                        <br>\n                        <ion-text>{{itemimg.name}}</ion-text>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n              <div *ngIf=\"thisIsArray(item.partes) && item.partes != null && item.partes.length > 0\">\n                <div *ngFor=\"let item of item.partes\">\n                  <div *ngIf=\"item.idguiapartes == responseIdguia && item.id_itinerario == responseIdItinerario\">\n                    <img class=\"img_shadow\" *ngIf=\"item.img_thumb != null\" [src]=\"item.img_thumb\"/>\n                    <ion-grid class=\"ion-padding heightreproductor\">\n                      <ion-row  style=\"font-size: 0.9em;\">\n                        <ion-col size=\"12\">\n                          <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{item.titulo}}</ion-text>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row  style=\"font-size: 0.8em;\">\n                        <ion-col size=\"12\">\n                          <ion-text style=\"font-size: 1.2em; color:#575756;\">{{destino.ciudad_guia}}</ion-text>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row style=\"height: 40px; margin-top: 0em;\">\n                        <ion-col size=\"12\">\n                          <ion-range min=\"0\" [max]=\"state.durationSec\" pin=\"true\" class=\"range_reproductor\" step=\"1\" [value]=\"seekbarCount\">\n                            <ion-label *ngIf=\"state.time == null || state.time === undefined\" slot=\"start\">00:00</ion-label>\n                            <ion-label *ngIf=\"state.time != null\" slot=\"start\">{{state.time}}</ion-label>\n                            <ion-label *ngIf=\"state.duration == null || state.duration === undefined\" slot=\"end\">00:00</ion-label>\n                            <ion-label *ngIf=\"state.duration != null\" slot=\"end\">{{state.duration}}</ion-label>\n                          </ion-range>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row style=\"margin-top: 2em; justify-content: center;\">\n                        <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAnterior(mydestines, responseIdguia, responseIdItinerario, 'dia', destino.img_thumb)\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/anterior.svg\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"2\" (click)=\"onClickRetroceso()\" class=\"colrepro\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/retroceso.svg\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"2\" *ngIf=\"!showPause\" (click)=\"play(destino.audio)\" class=\"colrepro\">\n                          <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/play.svg\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"2\" *ngIf=\"showPause\" (click)=\"pause()\" class=\"colrepro\">\n                          <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"2\" (click)=\"onClickAvance()\" class=\"colrepro\">\n                          <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/avance.svg\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickSiguiente(mydestines, responseIdguia, responseIdItinerario, 'dia', destino.img_thumb)\">\n                          <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/siguiente.svg\"></ion-icon> \n                        </ion-col>\n                      </ion-row>\n                      <ion-row style=\"text-align: center; margin-top:1em;\">\n                        <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                          <div>\n                            <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                            <br>\n                            <ion-text>{{itemimg.name}}</ion-text>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </div>\n                  <div *ngIf=\"thisIsArray(item.partes) && item.partes != null && item.partes.length > 0\">\n                    <div *ngFor=\"let item of item.partes\">\n                      <div *ngIf=\"item.idguiapartes == responseIdguia && item.id_itinerario == responseIdItinerario\">\n                        <img class=\"img_shadow\" *ngIf=\"item.img_thumb != null\" [src]=\"item.img_thumb\"/>\n                        <ion-grid class=\"ion-padding heightreproductor\">\n                          <ion-row  style=\"font-size: 0.9em;\">\n                            <ion-col size=\"12\">\n                              <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{item.titulo}}</ion-text>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row  style=\"font-size: 0.8em;\">\n                            <ion-col size=\"12\">\n                              <ion-text style=\"font-size: 1.2em; color:#575756;\">{{destino.ciudad_guia}}</ion-text>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row style=\"height: 40px; margin-top: 0em;\">\n                            <ion-col size=\"12\">\n                              <ion-range min=\"0\" [max]=\"state.durationSec\" pin=\"true\" class=\"range_reproductor\" step=\"1\" [value]=\"seekbarCount\">\n                                <ion-label *ngIf=\"state.time == null || state.time === undefined\" slot=\"start\">00:00</ion-label>\n                                <ion-label *ngIf=\"state.time != null\" slot=\"start\">{{state.time}}</ion-label>\n                                <ion-label *ngIf=\"state.duration == null || state.duration === undefined\" slot=\"end\">00:00</ion-label>\n                                <ion-label *ngIf=\"state.duration != null\" slot=\"end\">{{state.duration}}</ion-label>\n                              </ion-range>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row style=\"margin-top: 2em; justify-content: center;\">\n                            <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAnterior(mydestines, responseIdguia, responseIdItinerario, 'dia', destino.img_thumb)\">\n                              <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/anterior.svg\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"2\" (click)=\"onClickRetroceso()\" class=\"colrepro\">\n                              <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/retroceso.svg\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"2\" *ngIf=\"!showPause\" (click)=\"play(destino.audio)\" class=\"colrepro\">\n                              <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/play.svg\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"2\" *ngIf=\"showPause\" (click)=\"pause()\" class=\"colrepro\">\n                              <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"2\" (click)=\"onClickAvance()\" class=\"colrepro\">\n                              <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/avance.svg\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickSiguiente(mydestines, responseIdguia, responseIdItinerario, 'dia', destino.img_thumb)\">\n                              <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/siguiente.svg\"></ion-icon> \n                            </ion-col>\n                          </ion-row>\n                          <ion-row style=\"text-align: center; margin-top:1em;\">\n                            <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                              <div>\n                                <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                                <br>\n                                <ion-text>{{itemimg.name}}</ion-text>\n                              </div>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>  \n    <!-- FIN DIA -->\n    <!-- ITINERARIO -->\n  <div *ngIf=\"tipoAudio == 1\">\n    <div *ngIf=\"mydestines.itinerario\">\n      <div class=\"contenu\" *ngFor=\"let destino of mydestines.itinerario\">\n        <div *ngIf=\"thisIsArray(destino.partes) && destino.partes != null && destino.partes.length > 0\">\n          <div *ngFor=\"let item of destino.partes\">\n            <div *ngIf=\"item.idguiapartes == responseIdguia && item.id_itinerario == responseIdItinerario\">\n              <img class=\"img_shadow\" *ngIf=\"item.img_thumb != null\" [src]=\"item.img_thumb\" />\n              <ion-grid class=\"ion-padding heightreproductor\">\n                <ion-row style=\"font-size: 0.9em;\">\n                  <ion-col size=\"12\">\n                    <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{item.titulo}}</ion-text>\n                  </ion-col>\n                </ion-row>\n                <ion-row  style=\"font-size: 0.8em;\">\n                  <ion-col size=\"12\">\n                    <ion-text style=\"font-size: 1.2em; color:#575756;\">{{destino.ciudad_guia}}</ion-text>\n                  </ion-col>\n                </ion-row>\n                <ion-row style=\"height: 40px; margin-top: 0em;\">\n                  <ion-col size=\"12\" *ngIf=\"state\">\n                    <ion-range min=\"0\" [max]=\"state.durationSec\" pin=\"true\" class=\"range_reproductor\" step=\"1\" [value]=\"seekbarCount\">\n                      <ion-label *ngIf=\"state.time == null || state.time === undefined\" slot=\"start\">00:00</ion-label>\n                      <ion-label *ngIf=\"state.time != null\" slot=\"start\">{{state.time}}</ion-label>\n                      <ion-label *ngIf=\"state.duration == null || state.duration === undefined\" slot=\"end\">00:00</ion-label>\n                      <ion-label *ngIf=\"state.duration != null\" slot=\"end\">{{state.duration}}</ion-label>\n                    </ion-range>\n                  </ion-col>\n                </ion-row>\n                <ion-row style=\"margin-top: 2em; justify-content: center;\">\n                  <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAnterior(mydestines, responseIdguia, responseIdItinerario, 'itinerario', destino.img_thumb)\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/anterior.svg\"></ion-icon>\n                  </ion-col> \n                  <ion-col size=\"2\" (click)=\"onClickRetroceso()\" class=\"colrepro\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/retroceso.svg\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"2\" *ngIf=\"!showPause\" (click)=\"play(destino.audio)\" class=\"colrepro\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/play.svg\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"2\" *ngIf=\"showPause\" (click)=\"pause()\" class=\"colrepro\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"2\" (click)=\"onClickAvance()\" class=\"colrepro\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/avance.svg\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickSiguiente(mydestines, responseIdguia, responseIdItinerario, 'itinerario', destino.img_thumb)\">\n                      <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/siguiente.svg\"></ion-icon> \n                  </ion-col>\n                </ion-row>\n                <ion-row style=\"text-align: center; margin-top:1em;\">\n                  <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                    <div>\n                      <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                      <br>\n                      <ion-text>{{itemimg.name}}</ion-text>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n            <div *ngIf=\"thisIsArray(item.partes) && item.partes != null && item.partes.length > 0\">\n              <div *ngFor=\"let item of item.partes\">\n                <div *ngIf=\"item.idguiapartes == responseIdguia && item.id_itinerario == responseIdItinerario\">\n                  <img class=\"img_shadow\" *ngIf=\"item.img_thumb != null\" [src]=\"item.img_thumb\"/>\n                  <ion-grid class=\"ion-padding heightreproductor\">\n                    <ion-row  style=\"font-size: 0.9em;\">\n                      <ion-col size=\"12\">\n                        <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{item.titulo}}</ion-text>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row  style=\"font-size: 0.8em;\">\n                      <ion-col size=\"12\">\n                        <ion-text style=\"font-size: 1.2em; color:#575756;\">{{destino.ciudad_guia}}</ion-text>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"height: 40px; margin-top: 0em;\">\n                      <ion-col size=\"12\" *ngIf=\"state\">\n                        <ion-range min=\"0\" [max]=\"state.durationSec\" pin=\"true\" class=\"range_reproductor\" step=\"1\" [value]=\"seekbarCount\">\n                          <ion-label *ngIf=\"state.time == null || state.time === undefined\" slot=\"start\">00:00</ion-label>\n                          <ion-label *ngIf=\"state.time != null\" slot=\"start\">{{state.time}}</ion-label>\n                          <ion-label *ngIf=\"state.duration == null || state.duration === undefined\" slot=\"end\">00:00</ion-label>\n                          <ion-label *ngIf=\"state.duration != null\" slot=\"end\">{{state.duration}}</ion-label>\n                        </ion-range>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"margin-top: 2em; justify-content: center;\">\n                      <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAnterior(mydestines, responseIdguia, responseIdItinerario, 'itinerario', destino.img_thumb)\">\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/anterior.svg\"></ion-icon>\n                      </ion-col>\n                      <ion-col size=\"2\" (click)=\"onClickRetroceso()\" class=\"colrepro\">\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/retroceso.svg\"></ion-icon>\n                      </ion-col>\n                      <ion-col size=\"2\" *ngIf=\"!showPause\" (click)=\"play(destino.audio)\" class=\"colrepro\">\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/play.svg\"></ion-icon>\n                      </ion-col>\n                      <ion-col size=\"2\" *ngIf=\"showPause\" (click)=\"pause()\" class=\"colrepro\">\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n                      </ion-col>\n                      <ion-col size=\"2\" (click)=\"onClickAvance()\" class=\"colrepro\">\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/avance.svg\"></ion-icon>\n                      </ion-col>\n                      <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickSiguiente(mydestines, responseIdguia, responseIdItinerario, 'itinerario', destino.img_thumb)\" >\n                        <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/siguiente.svg\"></ion-icon> \n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"text-align: center;  margin-top:1em;\">\n                      <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                        <div>\n                          <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                          <br>\n                          <ion-text>{{itemimg.name}}</ion-text>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n                <div *ngIf=\"thisIsArray(item.partes) && item.partes != null && item.partes.length > 0\">\n                  <div *ngFor=\"let item of item.partes\">\n                    <div *ngIf=\"item.idguiapartes == responseIdguia && item.id_itinerario == responseIdItinerario\">\n                      <img class=\"img_shadow\" *ngIf=\"item.img_thumb != null\" [src]=\"item.img_thumb\"/>\n                      <ion-grid class=\"ion-padding heightreproductor\">\n                        <ion-row  style=\"font-size: 0.9em;\">\n                          <ion-col size=\"12\">\n                            <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{item.titulo}}</ion-text>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row  style=\"font-size: 0.8em;\">\n                          <ion-col size=\"12\">\n                            <ion-text style=\"font-size: 1.2em; color:#575756;\">{{destino.ciudad_guia}}</ion-text>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row style=\"height: 40px; margin-top: 0em;\">\n                          <ion-col size=\"12\" *ngIf=\"state\">\n                            <ion-range min=\"0\" [max]=\"state.durationSec\" pin=\"true\" class=\"range_reproductor\" step=\"1\" [value]=\"seekbarCount\">\n                              <ion-label *ngIf=\"state.time == null || state.time === undefined\" slot=\"start\">00:00</ion-label>\n                              <ion-label *ngIf=\"state.time != null\" slot=\"start\">{{state.time}}</ion-label>\n                              <ion-label *ngIf=\"state.duration == null || state.duration === undefined\" slot=\"end\">00:00</ion-label>\n                              <ion-label *ngIf=\"state.duration != null\" slot=\"end\">{{state.duration}}</ion-label>\n                            </ion-range>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row style=\"margin-top: 2em; justify-content: center;\">\n                          <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAnterior(mydestines, responseIdguia, responseIdItinerario, 'itinerario', destino.img_thumb)\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/anterior.svg\"></ion-icon>\n                          </ion-col>\n                          <ion-col size=\"2\" (click)=\"onClickRetroceso()\" class=\"colrepro\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/retroceso.svg\"></ion-icon>\n                          </ion-col>\n                          <ion-col size=\"2\" *ngIf=\"!showPause\" (click)=\"play(destino.audio)\" class=\"colrepro\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/play.svg\"></ion-icon>\n                          </ion-col>\n                          <ion-col size=\"2\" *ngIf=\"showPause\" (click)=\"pause()\" class=\"colrepro\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n                          </ion-col>\n                          <ion-col size=\"2\" (click)=\"onClickAvance()\" class=\"colrepro\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/avance.svg\"></ion-icon>\n                          </ion-col>\n                          <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickSiguiente(mydestines, responseIdguia, responseIdItinerario, 'itinerario', destino.img_thumb)\">\n                            <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/siguiente.svg\"></ion-icon> \n                          </ion-col>\n                        </ion-row>\n                        <ion-row style=\"text-align: center;  margin-top:1em;\">\n                          <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                            <div>\n                              <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                              <br>\n                              <ion-text>{{itemimg.name}}</ion-text>\n                            </div>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                    <div *ngIf=\"thisIsArray(item.partes) && item.partes != null && item.partes.length > 0\">\n                      <div *ngFor=\"let item of item.partes\">\n                        <div *ngIf=\"item.idguiapartes == responseIdguia && item.id_itinerario == responseIdItinerario\">\n                          <img class=\"img_shadow\" *ngIf=\"item.img_thumb != null\" [src]=\"item.img_thumb\"/>\n                          <ion-grid class=\"ion-padding heightreproductor\">\n                            <ion-row  style=\"font-size: 0.9em;\">\n                              <ion-col size=\"12\">\n                                <ion-text style=\"color:#575756; float: left;\" class=\"ion-text-uppercase\">{{item.titulo}}</ion-text>\n                              </ion-col>\n                            </ion-row>\n                            <ion-row  style=\"font-size: 0.8em;\">\n                              <ion-col size=\"12\">\n                                <ion-text style=\"font-size: 1.2em; color:#575756;\">{{destino.ciudad_guia}}</ion-text>\n                              </ion-col>\n                            </ion-row>\n                            <ion-row style=\"height: 40px; margin-top: 0em;\">\n                              <ion-col size=\"12\" *ngIf=\"state\">\n                                <ion-range min=\"0\" [max]=\"state.durationSec\" pin=\"true\" class=\"range_reproductor\" step=\"1\" [value]=\"seekbarCount\">\n                                  <ion-label *ngIf=\"state.time == null || state.time === undefined\" slot=\"start\">00:00</ion-label>\n                                  <ion-label *ngIf=\"state.time != null\" slot=\"start\">{{state.time}}</ion-label>\n                                  <ion-label *ngIf=\"state.duration == null || state.duration === undefined\" slot=\"end\">00:00</ion-label>\n                                  <ion-label *ngIf=\"state.duration != null\" slot=\"end\">{{state.duration}}</ion-label>\n                                </ion-range>\n                              </ion-col>\n                            </ion-row>\n                            <ion-row style=\"margin-top: 2em; justify-content: center;\">\n                              <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickAnterior(mydestines, responseIdguia, responseIdItinerario, 'itinerario', destino.img_thumb)\">\n                                <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/anterior.svg\"></ion-icon>\n                              </ion-col>\n                              <ion-col size=\"2\" (click)=\"onClickRetroceso()\" class=\"colrepro\">\n                                <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/retroceso.svg\"></ion-icon>\n                              </ion-col>\n                              <ion-col size=\"2\" *ngIf=\"!showPause\" (click)=\"play(destino.audio)\" class=\"colrepro\">\n                                <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/play.svg\"></ion-icon>\n                              </ion-col>\n                              <ion-col size=\"2\" *ngIf=\"showPause\" (click)=\"pause()\" class=\"colrepro\">\n                                <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n                              </ion-col>\n                              <ion-col size=\"2\" (click)=\"onClickAvance()\" class=\"colrepro\">\n                                <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/avance.svg\"></ion-icon>\n                              </ion-col>\n                              <ion-col size=\"2\" class=\"colrepro\" (click)=\"onClickSiguiente(mydestines, responseIdguia, responseIdItinerario, 'itinerario', destino.img_thumb)\">\n                                <ion-icon style=\"width:50px; height:50px;\" src=\"/assets/img/audio/siguiente.svg\"></ion-icon> \n                              </ion-col>\n                            </ion-row>\n                            <ion-row style=\"text-align: center; margin-top:1em;\">\n                              <ion-col *ngFor=\"let itemimg of menu_guia_aux\">\n                                <div>\n                                  <ion-icon [routerLink]=\"itemimg.redirectTo.concat('/').concat(responseIdguia).concat('/').concat(responseIdItinerario)\" style=\"width: 40px; height: 30px;\" [src]=\"itemimg.icon\"></ion-icon>\n                                  <br>\n                                  <ion-text>{{itemimg.name}}</ion-text>\n                                </div>\n                              </ion-col>\n                            </ion-row>\n                          </ion-grid>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n    <!-- FIN ITINERARIO -->\n</ion-content>\n<!-- FIN REPRODUCTOR AUDIO -->"

/***/ }),

/***/ "./src/app/pages/mis-destinos/mis-destinos.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/mis-destinos/mis-destinos.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n\n.contenu {\n  position: absolute;\n  top: -15px;\n  left: 0;\n  height: 65vh;\n  width: 100vw; }\n\n.img_shadow {\n  height: 19em;\n  width: 100%;\n  box-shadow: 0 28px 17px -26px black; }\n\n.toolbarppl {\n  --background:#dfe6ee;\n  color: #1F4D9A; }\n\n.title_color {\n  color: #1F4D9A; }\n\n.range_reproductor {\n  color: #1F4D9A;\n  --pin-color:#1F4D9A;\n  --bar-background:#39B1C0;\n  margin-top: -2em; }\n\n.btnAceptar {\n  --background: #1F4D9A;\n  margin-top: 10%;\n  margin-bottom: 5%;\n  width: 60%;\n  font-size: 1em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.title_audio {\n  font-size: 0.9em; }\n\n.heightreproductor {\n  height: 380px;\n  --background:#dfe6ee;\n  background-color: #dfe6ee; }\n\n.fondoppal {\n  --background:#dfe6ee;\n  background-color: #dfe6ee; }\n\n.color_play_icon {\n  color: #1F4D9A; }\n\n.color_icon {\n  color: #39B1C0; }\n\nion-select::part(text) {\n  font-size: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL21pcy1kZXN0aW5vcy9taXMtZGVzdGlub3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQWE7RUFDYix5Q0FBaUIsRUFDbEI7O0FBRUg7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVTtFQUNWLFFBQVE7RUFDUixhQUFZO0VBQ1osYUFBWSxFQUNmOztBQUVEO0VBQ0ksYUFBWTtFQUNaLFlBQVc7RUFDWCxvQ0FBbUMsRUFDdEM7O0FBRUQ7RUFDSSxxQkFBYTtFQUNiLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYztFQUNkLG9CQUFZO0VBQ1oseUJBQWlCO0VBQ2pCLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLHNCQUFhO0VBQ2IsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsV0FBVTtFQUNWLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUdEO0VBQ0csY0FBYTtFQUNiLHFCQUFhO0VBQ1osMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUJBQWE7RUFDYiwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxlQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZUFBYSxFQUNoQjs7QUFFRDtFQUNJLGVBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taXMtZGVzdGlub3MvbWlzLWRlc3Rpbm9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5jb250ZW51e1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgbGVmdCA6IDA7XHJcbiAgICBoZWlnaHQ6IDY1dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5pbWdfc2hhZG93e1xyXG4gICAgaGVpZ2h0OiAxOWVtOyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGJveC1zaGFkb3c6IDAgMjhweCAxN3B4IC0yNnB4IGJsYWNrO1xyXG59XHJcblxyXG4udG9vbGJhcnBwbHtcclxuICAgIC0tYmFja2dyb3VuZDojZGZlNmVlO1xyXG4gICAgY29sb3I6ICMxRjREOUE7XHJcbn1cclxuXHJcbi50aXRsZV9jb2xvcntcclxuICAgIGNvbG9yOiAjMUY0RDlBO1xyXG59XHJcblxyXG4ucmFuZ2VfcmVwcm9kdWN0b3J7XHJcbiAgICBjb2xvcjogIzFGNEQ5QTsgXHJcbiAgICAtLXBpbi1jb2xvcjojMUY0RDlBOyBcclxuICAgIC0tYmFyLWJhY2tncm91bmQ6IzM5QjFDMDtcclxuICAgIG1hcmdpbi10b3A6IC0yZW07XHJcbn1cclxuXHJcbi5idG5BY2VwdGFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUY0RDlBO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnRpdGxlX2F1ZGlve1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuXHJcbi5oZWlnaHRyZXByb2R1Y3RvcntcclxuICAgaGVpZ2h0OiAzODBweDtcclxuICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNmVlO1xyXG59XHJcblxyXG4uZm9uZG9wcGFse1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNmVlO1xyXG59XHJcblxyXG4uY29sb3JfcGxheV9pY29ue1xyXG4gICAgY29sb3I6IzFGNEQ5QTtcclxufVxyXG5cclxuLmNvbG9yX2ljb257XHJcbiAgICBjb2xvcjojMzlCMUMwO1xyXG59XHJcblxyXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpe1xyXG4gICAgZm9udC1zaXplOjJlbTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/mis-destinos/mis-destinos.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mis-destinos/mis-destinos.page.ts ***!
  \*********************************************************/
/*! exports provided: MisDestinosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisDestinosPage", function() { return MisDestinosPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user-data.service */ "./src/app/service/user-data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _service_menu_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/menu-data.service */ "./src/app/service/menu-data.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_audio_audio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/audio/audio */ "./src/app/providers/audio/audio.ts");
/* harmony import */ var _providers_store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/store/store */ "./src/app/providers/store/store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _interfaces_IListAudioExist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../interfaces/IListAudioExist */ "./src/app/interfaces/IListAudioExist.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var MisDestinosPage = /** @class */ (function () {
    function MisDestinosPage(alertCtrl, dataService, router, serviceRegister, storage, route, store, audioProvider, platform, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.router = router;
        this.serviceRegister = serviceRegister;
        this.storage = storage;
        this.route = route;
        this.store = store;
        this.audioProvider = audioProvider;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.userId = null;
        this.mydestines = null;
        this.arr_mon_vistos = new Array();
        this.dataResponseGuia = null;
        this.dataResponseItinerario = null;
        this.responseIdguia = null;
        this.responseIdItinerario = null;
        this.title_header = null;
        this.title_header_show = false;
        this.arr_title_header = new Array();
        this.res_prov_imgUrl = [];
        this.showSearchCity = true;
        this.res_prov_es = new Array();
        this.res_prov_other = new Array();
        this.cities = null;
        this.cont_asoc_mon = null;
        this.cont_asoc_monc = null;
        this.cont_asoc_day = null;
        this.cont_asoc_iti = null;
        this.show_day = false;
        this.show_mon = false;
        this.show_iti = false;
        this.city = null;
        this.clickAudio = false;
        this.showPause = false;
        this.menu_guia_aux = null;
        this.lookFor = null;
        this.seekbar = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]("seekbar");
        this.state = {};
        this.onSeekState = false;
        this.currentFile = {};
        this.modoAudio = null;
        this.filePlaySong = null;
        this.playAudioback = false;
        this.show_btn_planta = false;
        this.porcentaje = 0.5;
        this.selectOptions = {
            header: 'Ciudades',
            subHeader: 'Selecciona una ciudad',
            translucent: true,
            cssClass: 'my-class'
        };
        this.show = 'showd-';
        this.showDA = 'showda-';
        this.showI = 'showi-';
        this.showIA = 'showia-';
        this.showM = 'showm-';
        this.showMC = 'showmc-';
        this.showMonCIconAdd = 'showMonCIconAdd-';
        this.showMonCIconRemove = 'showMonCIconRemove-';
        this.showMonIconAdd = 'showMonIconAdd-';
        this.showMonIconRemove = 'showMonIconRemove-';
        this.showIIconAdd = 'showIIconAdd-';
        this.showIIconRemove = 'showIIconRemove-';
        this.showIIconAddItems = 'showIIconAddItems-';
        this.showIIconRemoveItems = 'showIIconRemoveItems-';
        this.showDIconAddItems = 'showDIconAddItems-';
        this.showDIconRemoveItems = 'showDIconRemoveItems-';
        this.showDIconAddItemsA = 'showDIconAddItemsA-';
        this.showDIconRemoveItemsA = 'showDIconRemoveItemsA-';
        this.showDIconAddItemsIA = 'showDIconAddItemsIA-';
        this.showDIconRemoveItemsIA = 'showDIconRemoveItemsIA-';
        this.showIitems = 'showiI-';
        this.showDItems = 'showdI-';
        this.seekbarCount = null;
        this.audioExist = [];
        this.tipoAudio = null;
        this.audioNow = null;
        this.order = 'orden';
        this.datosMisdestinos = false;
        this.rutaMapa = '/mapa/';
        this.list_view_audio_init = [];
        this.response_plano_object = [];
        this.prov_img_url = null;
    }
    MisDestinosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataResponseGuia = null;
        if (this.dataResponseGuia == null) {
            this.clickAudio = false;
            this.platform.ready().then(function () {
                _this.serviceRegister.present('Cargando datos..');
                _this.serviceRegister.getCities()
                    .then(function (data) {
                    if (data != null) {
                        _this.cities = JSON.parse(data.data);
                        _this.cities.forEach(function (element) {
                            if (element.codigo == 'es') {
                                _this.res_prov_es.push(element.nombre);
                            }
                            else {
                                _this.res_prov_other.push(element.nombre);
                            }
                            _this.res_prov_imgUrl.push({ "nombre": element.nombre, "urlimg": element.url_img });
                            _this.storage.set('provImgUrl', _this.res_prov_imgUrl);
                        });
                        if (_this.userId == null || _this.mydestines == null) {
                            _this.serviceRegister.getAllData()
                                .then(function (res) {
                                if (res != null) {
                                    _this.orderItinerario(res.itinerario);
                                    _this.orderDay(res.dia);
                                    _this.orderMonumentComp(res.monumento_comp);
                                    _this.orderMonument(res.monumento);
                                    _this.mydestines = res;
                                    if (_this.arr_title_header.length == 0 || _this.arr_title_header == null) {
                                        _this.existCityInSelect(_this.mydestines);
                                    }
                                    _this.serviceRegister.dismiss();
                                }
                                else {
                                    _this.serviceRegister.getUserId()
                                        .then(function (data) {
                                        if (data != null) {
                                            _this.userId = data;
                                            _this.serviceRegister.getDataMyDestines(_this.userId)
                                                .then(function (data) {
                                                if (data != null) {
                                                    res = JSON.parse(data.data);
                                                    _this.orderItinerario(res.itinerario);
                                                    _this.orderDay(res.dia);
                                                    _this.orderMonumentComp(res.monumento_comp);
                                                    _this.orderMonument(res.monumento);
                                                    _this.mydestines = res;
                                                    _this.existCityInSelect(_this.mydestines);
                                                    _this.storage.get('provImgUrl')
                                                        .then(function (urlImg) {
                                                        if (urlImg != null) {
                                                            _this.prov_img_url = urlImg;
                                                        }
                                                    });
                                                    _this.storage.set('mydestines', _this.mydestines);
                                                }
                                                _this.serviceRegister.dismiss();
                                            })
                                                .catch(function (error) {
                                                if (error != null) {
                                                    console.log('Error al obtener los datos de los destinos.');
                                                }
                                                _this.serviceRegister.dismiss();
                                            });
                                        }
                                    })
                                        .catch(function (error) {
                                        if (error != null) {
                                            console.log('Error al obtener datos del usuario');
                                        }
                                        _this.serviceRegister.dismiss();
                                    });
                                }
                            }).catch(function (err) {
                                _this.serviceRegister.dismiss();
                            });
                        }
                    }
                })
                    .catch(function (error) {
                    if (error != null) {
                        console.log('Error al obtener el listado de ciudades');
                        _this.serviceRegister.dismiss();
                    }
                });
            });
        }
    };
    MisDestinosPage.prototype.orderItinerario = function (res) {
        var _this = this;
        if (this.thisIsArray(res) && res.length > 0) {
            this.orderByCity(res);
            res.forEach(function (nivel1) {
                if (_this.thisIsArray(nivel1.partes) && nivel1.partes.length > 0) {
                    nivel1.partes.sort(function (a, b) {
                        return a.orden - b.orden;
                    });
                    nivel1.partes.forEach(function (nivel2) {
                        if (_this.thisIsArray(nivel2.partes) && nivel2.partes.length > 0) {
                            nivel2.partes.sort(function (a, b) {
                                return a.orden - b.orden;
                            });
                            nivel2.partes.forEach(function (nivel3) {
                                if (_this.thisIsArray(nivel3.partes) && nivel3.partes.length > 0) {
                                    nivel3.partes.sort(function (a, b) {
                                        return a.orden - b.orden;
                                    });
                                    nivel3.partes.forEach(function (nivel4) {
                                        if (_this.thisIsArray(nivel4.partes) && nivel4.partes.length > 0) {
                                            nivel4.partes.sort(function (a, b) {
                                                return a.orden - b.orden;
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    MisDestinosPage.prototype.orderDay = function (res) {
        var _this = this;
        if (this.thisIsArray(res) && res.length > 0) {
            this.orderByCity(res);
            res.forEach(function (nivel1) {
                if (_this.thisIsArray(nivel1.partes) && nivel1.partes.length > 0) {
                    nivel1.partes.sort(function (a, b) {
                        return a.orden - b.orden;
                    });
                    nivel1.partes.forEach(function (nivel2) {
                        if (_this.thisIsArray(nivel2.partes) && nivel2.partes.length > 0) {
                            nivel2.partes.sort(function (a, b) {
                                return a.orden - b.orden;
                            });
                            nivel2.partes.forEach(function (nivel3) {
                                if (_this.thisIsArray(nivel3.partes) && nivel3.partes.length > 0) {
                                    nivel3.partes.sort(function (a, b) {
                                        return a.orden - b.orden;
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    MisDestinosPage.prototype.orderMonumentComp = function (res) {
        var _this = this;
        if (this.thisIsArray(res) && res.length > 0) {
            this.orderByCity(res);
            res.forEach(function (arr_monc) {
                if (_this.thisIsArray(arr_monc.partes) && arr_monc.partes.length > 0) {
                    arr_monc.partes.forEach(function (arr_partes) {
                        if (_this.thisIsArray(arr_partes.partes) && arr_partes.partes.length > 0) {
                            arr_partes.partes.sort(function (a, b) {
                                return a.orden - b.orden;
                            });
                            arr_partes.partes.forEach(function (subpartes) {
                                if (_this.thisIsArray(subpartes.partes) && subpartes.partes.length > 0) {
                                    subpartes.partes.sort(function (a, b) {
                                        return a.orden - b.orden;
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    MisDestinosPage.prototype.orderMonument = function (res) {
        if (this.thisIsArray(res) && res.length > 0) {
            this.orderByCity(res);
        }
    };
    MisDestinosPage.prototype.orderByCity = function (res) {
        res.sort(function (a, b) {
            if (a.ciudad_guia > b.ciudad_guia) {
                return 1;
            }
            if (a.ciudad_guia < b.ciudad_guia) {
                return -1;
            }
            return 0;
        });
    };
    MisDestinosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menu_guia_aux = new Array();
        this.showSearchCity = true;
        this.menu_guia = this.dataService.getMenuGuia();
        this.title_header = null;
        this.seekbarCount = null;
        this.show_mon = false;
        this.show_iti = false;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
                _this.datosMisdestinos = JSON.parse(params.special);
                if (!_this.datosMisdestinos) {
                    _this.clickAudio = false;
                    _this.showSearchCity = true;
                }
            }
        });
        this.store.select('appState').subscribe(function (value) {
            _this.state = value.media;
        });
        this.store
            .select('appState')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["pluck"])('media', 'timeSec'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (value) { return value !== undefined; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (value) { return Number.parseInt(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])())
            .subscribe(function (value) {
            _this.seekbarCount = value;
        });
        this.route.queryParams.subscribe(function (params) {
            if (params && params.audio) {
                _this.playAudioback = JSON.parse(params.audio);
                if (_this.playAudioback) {
                    _this.showPause = false;
                }
                if (!_this.playAudioback) {
                    _this.showPause = true;
                }
            }
        });
        this.serviceRegister.getShowPlayAudio()
            .then(function (play) {
            if (play != null) {
                if (play == true) {
                    _this.showPause = false;
                }
                else {
                    _this.showPause = true;
                }
            }
        });
        if (this.datosMisdestinos == true) {
            if (this.title_header == null) {
                this.serviceRegister.getTitleHeader()
                    .then(function (header) {
                    if (header != null) {
                        _this.title_header = header;
                        _this.clickAudio = false;
                        _this.showSearchCity = false;
                    }
                });
            }
        }
        if (this.route.snapshot.data['special']) {
            if (this.route.snapshot.data['special'].idguia != null) {
                this.dataResponseGuia = this.route.snapshot.data['special'].idguia;
                this.dataResponseItinerario = this.route.snapshot.data['special'].iditinerario;
                if (this.dataResponseGuia != null) {
                    this.responseIdguia = JSON.parse(this.dataResponseGuia);
                    this.responseIdItinerario = JSON.parse(this.dataResponseItinerario);
                    this.serviceRegister.getPlayAudio()
                        .then(function (audio) {
                        if (audio != null) {
                            _this.playStream(audio);
                            _this.showPause = false;
                            _this.storage.set('playAudio', null);
                        }
                    });
                    if (this.mydestines == null) {
                        this.serviceRegister.getAllData()
                            .then(function (data) {
                            if (data != null) {
                                _this.mydestines = data;
                                _this.serviceRegister.getTipoAudio()
                                    .then(function (tipo) {
                                    if (tipo != null) {
                                        _this.tipoAudio = tipo;
                                        _this.showPause = false;
                                        _this.getshowBtnDetails();
                                        //console.log('this.tipoAudio : '+this.tipoAudio);
                                    }
                                });
                            }
                        });
                        if (!this.showSearchCity) {
                            console.log('Muestra reproductor..');
                        }
                    }
                    else {
                        this.serviceRegister.getTipoAudio()
                            .then(function (tipo) {
                            if (tipo != null) {
                                _this.tipoAudio = tipo;
                                _this.showPause = false;
                                _this.getshowBtnDetails();
                                console.log('this.tipoAudio : ' + _this.tipoAudio);
                            }
                        });
                    }
                    this.clickAudio = true;
                    console.log('this.clickAudio : ' + this.clickAudio);
                }
            }
        }
    };
    MisDestinosPage.prototype.lookForTitle = function (list, titulo) {
        var search = false;
        list.find(function (plan) {
            if (plan.title === titulo) {
                search = true;
            }
        });
        return search;
    };
    MisDestinosPage.prototype.getshowBtnDetails = function () {
        var _this = this;
        this.lookFor = false;
        this.menu_guia.subscribe(function (res) {
            _this.menu_guia_aux = res;
            _this.serviceRegister.getTitleHeader()
                .then(function (header) {
                if (header != null) {
                    if (_this.thisIsArray(_this.mydestines.monumento) && _this.mydestines.monumento.length > 0) {
                        _this.mydestines.monumento.forEach(function (element) {
                            if (_this.responseIdguia == element.idguia) {
                                if (_this.responseIdItinerario == 0) {
                                    if (!_this.lookFor) {
                                        if (element.plano == null) {
                                            _this.elimina({ name: "planta" });
                                        }
                                        _this.showBtnDetails(element);
                                    }
                                    _this.lookFor = true;
                                }
                                else {
                                    if (element.partes != null && element.partes.length > 0 && _this.thisIsArray(element.partes)) {
                                        element.partes.forEach(function (parte) {
                                            if (_this.responseIdguia == parseInt(parte.id_itinerario) && _this.responseIdItinerario == parseInt(parte.idguiapartes)) {
                                                if (!_this.lookFor) {
                                                    _this.showBtnDetails(parte);
                                                    _this.lookFor = true;
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                            if (_this.thisIsArray(element.plano)) {
                                element.plano.forEach(function (plano) {
                                    var obj = false;
                                    obj = _this.lookForTitle(_this.response_plano_object, plano.titulo);
                                    if (!obj) {
                                        _this.response_plano_object.push({ "idguia": element.idguia, "url_plano": plano.plano, "title": plano.titulo });
                                    }
                                });
                            }
                        });
                    }
                    if (_this.thisIsArray(_this.mydestines.monumento_comp) && _this.mydestines.monumento_comp.length > 0) {
                        _this.mydestines.monumento_comp.forEach(function (element) {
                            if (_this.responseIdItinerario == 0) {
                                if (_this.responseIdguia == element.idguia) {
                                    if (!_this.lookFor) {
                                        if (element.plano == null) {
                                            _this.elimina({ name: "planta" });
                                        }
                                        _this.showBtnDetails(element);
                                    }
                                    _this.lookFor = true;
                                }
                            }
                            else {
                                if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                                    element.partes.forEach(function (parte) {
                                        if (_this.responseIdguia == parseInt(parte.idguiapartes) && _this.responseIdItinerario == parseInt(parte.id_itinerario)) {
                                            if (!_this.lookFor) {
                                                _this.showBtnDetails(parte);
                                            }
                                            _this.lookFor = true;
                                        }
                                        if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                            parte.partes.forEach(function (parte) {
                                                if (_this.responseIdguia == parseInt(parte.idguiapartes) && _this.responseIdItinerario == parseInt(parte.id_itinerario)) {
                                                    if (!_this.lookFor) {
                                                        _this.showBtnDetails(parte);
                                                    }
                                                    _this.lookFor = true;
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                            if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                                element.partes.forEach(function (partes) {
                                    if (_this.thisIsArray(partes.plano) && partes.plano.length > 0) {
                                        partes.plano.forEach(function (plano) {
                                            var obj = false;
                                            obj = _this.lookForTitle(_this.response_plano_object, plano.titulo);
                                            if (!obj) {
                                                _this.response_plano_object.push({ "idguia": plano.id_guia, "url_plano": plano.plano, "title": plano.titulo });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                    if (_this.thisIsArray(_this.mydestines.dia) && _this.mydestines.dia.length > 0) {
                        _this.mydestines.dia.forEach(function (element) {
                            if (_this.responseIdguia == element.idguia) {
                                if (_this.responseIdItinerario == 0) {
                                    if (!_this.lookFor) {
                                        _this.showBtnDetails(element);
                                    }
                                    _this.lookFor = true;
                                }
                                else {
                                    if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                                        element.partes.forEach(function (parte) {
                                            if (_this.responseIdguia == parseInt(parte.idguiapartes) && _this.responseIdItinerario == parseInt(parte.id_itinerario)) {
                                                if (!_this.lookFor) {
                                                    _this.showBtnDetails(parte);
                                                }
                                                _this.lookFor = true;
                                            }
                                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                                parte.partes.forEach(function (parte) {
                                                    if (_this.responseIdguia == parseInt(parte.idguiapartes) && _this.responseIdItinerario == parseInt(parte.id_itinerario)) {
                                                        if (!_this.lookFor) {
                                                            _this.showBtnDetails(parte);
                                                        }
                                                        _this.lookFor = true;
                                                    }
                                                    if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                                        parte.partes.forEach(function (parte) {
                                                            if (_this.responseIdguia == parseInt(parte.idguiapartes) && _this.responseIdItinerario == parseInt(parte.id_itinerario)) {
                                                                if (!_this.lookFor) {
                                                                    _this.showBtnDetails(parte);
                                                                }
                                                                _this.lookFor = true;
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }
                            }
                            if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                                element.partes.forEach(function (partes) {
                                    if (!_this.thisIsArray(partes.partes)) {
                                        if (_this.thisIsArray(partes.plano) && partes.plano.length > 0) {
                                            partes.plano.forEach(function (plano) {
                                                var obj = false;
                                                obj = _this.lookForTitle(_this.response_plano_object, plano.titulo);
                                                if (!obj) {
                                                    _this.response_plano_object.push({ "idguia": partes.idguiapartes, "url_plano": plano.plano, "title": plano.titulo });
                                                }
                                            });
                                        }
                                    }
                                    else {
                                        if (_this.thisIsArray(partes.plano) && partes.plano.length > 0) {
                                            partes.plano.forEach(function (plano) {
                                                var obj = false;
                                                obj = _this.lookForTitle(_this.response_plano_object, plano.titulo);
                                                if (!obj) {
                                                    _this.response_plano_object.push({ "idguia": partes.id_itinerario, "url_plano": plano.plano, "title": plano.titulo });
                                                }
                                            });
                                        }
                                        else {
                                            partes.partes.forEach(function (element) {
                                                if (_this.thisIsArray(element.plano) && element.plano.length > 0) {
                                                    element.plano.forEach(function (plano) {
                                                        var obj = false;
                                                        obj = _this.lookForTitle(_this.response_plano_object, plano.titulo);
                                                        if (!obj) {
                                                            _this.response_plano_object.push({ "idguia": plano.id_guia, "url_plano": plano.plano, "title": plano.titulo });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        });
                    }
                    if (_this.thisIsArray(_this.mydestines.itinerario) && _this.mydestines.itinerario.length > 0) {
                        _this.mydestines.itinerario.forEach(function (element) {
                            if (_this.responseIdItinerario == 0) {
                                if (_this.responseIdguia == element.idguia) {
                                    if (!_this.lookFor) {
                                        _this.showBtnDetails(element);
                                    }
                                    _this.lookFor = true;
                                }
                            }
                            else {
                                if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                                    element.partes.forEach(function (parte) {
                                        if (_this.responseIdguia == parseInt(parte.idguiapartes) && _this.responseIdItinerario == parseInt(parte.id_itinerario)) {
                                            if (!_this.lookFor) {
                                                _this.showBtnDetails(parte);
                                            }
                                            _this.lookFor = true;
                                        }
                                        if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                            parte.partes.forEach(function (parte) {
                                                if (_this.responseIdguia == parseInt(parte.idguiapartes) && _this.responseIdItinerario == parseInt(parte.id_itinerario)) {
                                                    if (!_this.lookFor) {
                                                        _this.showBtnDetails(parte);
                                                    }
                                                    _this.lookFor = true;
                                                }
                                                if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                                    parte.partes.forEach(function (parte) {
                                                        if (_this.responseIdguia == parseInt(parte.idguiapartes) && _this.responseIdItinerario == parseInt(parte.id_itinerario)) {
                                                            if (!_this.lookFor) {
                                                                _this.showBtnDetails(parte);
                                                            }
                                                            _this.lookFor = true;
                                                        }
                                                        if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                                            parte.partes.forEach(function (parte) {
                                                                if (_this.responseIdguia == parseInt(parte.idguiapartes) && _this.responseIdItinerario == parseInt(parte.id_itinerario)) {
                                                                    if (!_this.lookFor) {
                                                                        _this.showBtnDetails(parte);
                                                                    }
                                                                    _this.lookFor = true;
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                            if (_this.thisIsArray(element.partes) && element.partes.length > 0) {
                                element.partes.forEach(function (nivel1) {
                                    if (_this.thisIsArray(nivel1.partes) && nivel1.partes.length > 0) {
                                        nivel1.partes.forEach(function (nivel2) {
                                            if (_this.thisIsArray(nivel2.partes) && nivel2.partes.length > 0) {
                                                if (nivel2.plano == null) {
                                                    nivel2.partes.forEach(function (nivel3) {
                                                        if (_this.thisIsArray(nivel3.plano) && nivel3.plano.length > 0) {
                                                            nivel3.plano.forEach(function (plano) {
                                                                var obj = false;
                                                                obj = _this.lookForTitle(_this.response_plano_object, plano.titulo);
                                                                if (!obj) {
                                                                    _this.response_plano_object.push({ "idguia": nivel3.idguiapartes, "url_plano": plano.plano, "title": plano.titulo });
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            }
                                            if (nivel2.plano != null && nivel2.plano.length > 0) {
                                                nivel2.plano.forEach(function (plano) {
                                                    var obj = false;
                                                    obj = _this.lookForTitle(_this.response_plano_object, plano.titulo);
                                                    if (!obj) {
                                                        //this.response_plano_object.push({"idguia": nivel2.id_itinerario, "url_plano": plano.plano, "title": plano.titulo});
                                                        _this.response_plano_object.push({ "idguia": nivel2.idguiapartes, "url_plano": plano.plano, "title": plano.titulo });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                            //}
                        });
                    }
                    if (_this.response_plano_object != null) {
                        _this.storage.set('planoObject', _this.response_plano_object);
                    }
                }
            });
        });
    };
    MisDestinosPage.prototype.showBtnDetails = function (element) {
        if (element.mapa == null) {
            this.elimina({ name: 'mapa' });
        }
        if (element.plano == null) {
            this.elimina({ name: 'planta' });
        }
        if (element.detalle_monumento != undefined) {
            if (element.detalle_monumento != null && element.detalle_monumento.length == 0 || element.detalle_monumento == null) {
                this.elimina({ name: 'textos' });
            }
        }
        if (element.detalles != undefined) {
            if (element.detalles != null && element.detalles.length == 0 || element.detalles == null) {
                this.elimina({ name: 'textos' });
            }
        }
        if (this.thisIsArray(element.infografia) && element.infografia.length == 0 || element.infografia == null) {
            this.elimina({ name: 'infografias' });
        }
    };
    MisDestinosPage.prototype.existCityInSelect = function (destinos) {
        var _this = this;
        if (this.thisIsArray(destinos.monumento) && destinos.monumento.length > 0) {
            destinos.monumento.forEach(function (element) {
                if (!_this.arr_title_header.includes(element.ciudad_guia)) {
                    _this.arr_title_header.push(element.ciudad_guia);
                }
            });
        }
        if (this.thisIsArray(destinos.monumento_comp) && destinos.monumento_comp.length > 0) {
            destinos.monumento_comp.forEach(function (element) {
                if (!_this.arr_title_header.includes(element.ciudad_guia)) {
                    _this.arr_title_header.push(element.ciudad_guia);
                }
            });
        }
        if (this.thisIsArray(destinos.dia) && destinos.dia.length > 0) {
            destinos.dia.forEach(function (element) {
                if (!_this.arr_title_header.includes(element.ciudad_guia)) {
                    _this.arr_title_header.push(element.ciudad_guia);
                }
            });
        }
        if (this.thisIsArray(destinos.itinerario) && destinos.itinerario.length > 0) {
            destinos.itinerario.forEach(function (element) {
                if (!_this.arr_title_header.includes(element.ciudad_guia)) {
                    _this.arr_title_header.push(element.ciudad_guia);
                }
            });
        }
        if (this.arr_title_header.length > 0) {
            this.storage.set('existCityInSelect', this.arr_title_header);
        }
    };
    MisDestinosPage.prototype.selectCity = function (city) {
        var _this = this;
        var guia_asoc_mon = false;
        var guia_asoc_monc = false;
        var guia_asoc_day = false;
        var guia_asoc_iti = false;
        this.cont_asoc_mon = 0;
        this.cont_asoc_monc = 0;
        this.cont_asoc_day = 0;
        this.cont_asoc_iti = 0;
        if (city != null) {
            if (this.mydestines == null) {
                this.presentAlert('No dispone de guía asociado a esta ciudad.');
            }
            else {
                if (this.thisIsArray(this.mydestines.monumento) && this.mydestines.monumento.length > 0) {
                    this.mydestines.monumento.forEach(function (element) {
                        if (city == element.ciudad_guia) {
                            _this.showSearchCity = false;
                            _this.title_header = element.ciudad_guia;
                            _this.storage.set('titleHeader', _this.title_header);
                            guia_asoc_mon = true;
                            _this.cont_asoc_mon++;
                        }
                        else {
                            guia_asoc_mon = false;
                        }
                    });
                }
                if (this.thisIsArray(this.mydestines.monumento_comp) && this.mydestines.monumento_comp.length > 0) {
                    this.mydestines.monumento_comp.forEach(function (element) {
                        if (city == element.ciudad_guia) {
                            _this.showSearchCity = false;
                            _this.title_header = element.ciudad_guia;
                            _this.storage.set('titleHeader', _this.title_header);
                            guia_asoc_monc = true;
                            _this.cont_asoc_monc++;
                        }
                        else {
                            guia_asoc_monc = false;
                        }
                    });
                }
                if (this.mydestines.dia !== undefined) {
                    if (this.thisIsArray(this.mydestines.dia) && this.mydestines.dia.length > 0) {
                        this.mydestines.dia.forEach(function (element) {
                            if (city == element.ciudad_guia) {
                                _this.showSearchCity = false;
                                _this.title_header = element.ciudad_guia;
                                _this.storage.set('titleHeader', _this.title_header);
                                guia_asoc_day = true;
                                _this.cont_asoc_day++;
                            }
                            else {
                                guia_asoc_day = false;
                            }
                        });
                    }
                }
                if (this.mydestines.itinerario !== undefined) {
                    if (this.thisIsArray(this.mydestines.itinerario) && this.mydestines.itinerario.length > 0) {
                        this.mydestines.itinerario.forEach(function (element) {
                            if (city == element.ciudad_guia) {
                                _this.showSearchCity = false;
                                _this.title_header = element.ciudad_guia;
                                _this.storage.set('titleHeader', _this.title_header);
                                guia_asoc_iti = true;
                                _this.cont_asoc_iti++;
                            }
                            else {
                                guia_asoc_iti = false;
                            }
                        });
                    }
                }
                if ((guia_asoc_mon == false && this.cont_asoc_mon == 0) &&
                    (guia_asoc_monc == false && this.cont_asoc_monc == 0) &&
                    (guia_asoc_day == false && this.cont_asoc_day == 0) &&
                    (guia_asoc_iti == false && this.cont_asoc_iti == 0)) {
                    this.presentAlert('No dispone de guía asociado a esta ciudad.');
                }
            }
        }
    };
    MisDestinosPage.prototype.onClickListColors = function () {
        var _this = this;
        this.serviceRegister.getExistCityInSelect()
            .then(function (res) {
            if (res != null) {
                _this.arr_title_header = res;
                setTimeout(function () {
                    var buttonElements = document.querySelectorAll('div.alert-radio-group button');
                    if (!buttonElements.length) {
                        _this.onClickListColors();
                    }
                    else {
                        for (var index = 0; index < buttonElements.length; index++) {
                            var buttonElement = buttonElements[index];
                            var optionLabelElement = buttonElement.querySelector('.alert-radio-label');
                            var text = optionLabelElement.innerHTML.trim();
                            if (_this.arr_title_header.includes(text)) {
                                optionLabelElement.setAttribute('style', 'color: #1F4D9A !important;');
                            }
                            else {
                                optionLabelElement.setAttribute('style', 'color: #D8D8D8 !important;');
                            }
                        }
                    }
                }, 100);
            }
        })
            .catch(function (err) {
            console.log(JSON.stringify(err));
        });
    };
    MisDestinosPage.prototype.elimina = function (elem) {
        this.menu_guia_aux = this.menu_guia_aux.filter(function (e) { return e.name !== elem.name; });
    };
    MisDestinosPage.prototype.thisIsArray = function ($array) {
        return Array.isArray($array) ? true : false;
    };
    MisDestinosPage.prototype.onClickToggle = function (m) {
        this.mydestines['monumento'][m].open = !this.mydestines['monumento'][m].open;
    };
    MisDestinosPage.prototype.onClickShowDay = function (pos) {
        var showText = this.showDA.concat(pos);
        var iconRemoveD = this.showDIconRemoveItemsA.concat(pos);
        var iconAddD = this.showDIconAddItemsA.concat(pos);
        if (document.getElementById(showText).style.display == 'none') {
            document.getElementById(showText).style.display = 'block';
            //ICONS
            document.getElementById(iconRemoveD).style.display = 'block';
            document.getElementById(iconAddD).style.display = 'none';
        }
        else {
            document.getElementById(showText).style.display = 'none';
            //ICONS
            document.getElementById(iconRemoveD).style.display = 'none';
            document.getElementById(iconAddD).style.display = 'block';
        }
    };
    MisDestinosPage.prototype.onClickShow = function (pos, tipo, aux) {
        var showText = this.show.concat(pos);
        var showTextIti = this.showI.concat(aux).concat(pos);
        var showTextMon = this.showM.concat(pos);
        var showTextMonC = this.showMC.concat(pos);
        var iconAddMon = this.showMonIconAdd.concat(pos);
        var iconRemoveMon = this.showMonIconRemove.concat(pos);
        var iconAddMonC = this.showMonCIconAdd.concat(pos);
        var iconRemoveMonC = this.showMonCIconRemove.concat(pos);
        var iconRemoveIti = this.showIIconRemove.concat(aux).concat(pos);
        var iconAddIti = this.showIIconAdd.concat(aux).concat(pos);
        var iconRemoveD = this.showDIconRemoveItems.concat(pos);
        var iconAddD = this.showDIconAddItems.concat(pos);
        if (tipo == 'mon') {
            if (document.getElementById(showTextMon).style.display == 'none') {
                document.getElementById(showTextMon).style.display = 'block';
                //ICONS
                document.getElementById(iconRemoveMon).style.display = 'block';
                document.getElementById(iconAddMon).style.display = 'none';
            }
            else {
                document.getElementById(showTextMon).style.display = 'none';
                //ICONS
                document.getElementById(iconRemoveMon).style.display = 'none';
                document.getElementById(iconAddMon).style.display = 'block';
            }
        }
        if (tipo == 'monc') {
            if (document.getElementById(showTextMonC).style.display == 'none') {
                document.getElementById(showTextMonC).style.display = 'block';
                //ICONS
                document.getElementById(iconRemoveMonC).style.display = 'block';
                document.getElementById(iconAddMonC).style.display = 'none';
            }
            else {
                document.getElementById(showTextMonC).style.display = 'none';
                //ICONS
                document.getElementById(iconRemoveMonC).style.display = 'none';
                document.getElementById(iconAddMonC).style.display = 'block';
            }
        }
        if (tipo == 'dia') {
            if (document.getElementById(showText).style.display == 'none') {
                document.getElementById(showText).style.display = 'block';
                //ICONS
                document.getElementById(iconRemoveD).style.display = 'block';
                document.getElementById(iconAddD).style.display = 'none';
            }
            else {
                document.getElementById(showText).style.display = 'none';
                //ICONS
                document.getElementById(iconRemoveD).style.display = 'none';
                document.getElementById(iconAddD).style.display = 'block';
            }
        }
        if (tipo == 'itinerario') {
            if (document.getElementById(showTextIti).style.display == 'none') {
                document.getElementById(showTextIti).style.display = 'block';
                //ICONS
                document.getElementById(iconRemoveIti).style.display = 'block';
                document.getElementById(iconAddIti).style.display = 'none';
            }
            else {
                document.getElementById(showTextIti).style.display = 'none';
                //ICONS
                document.getElementById(iconRemoveIti).style.display = 'none';
                document.getElementById(iconAddIti).style.display = 'block';
            }
        }
    };
    MisDestinosPage.prototype.onClickShowItems = function (pos1, pos2) {
        var showTextItems = this.showIitems.concat(pos1).concat(pos2);
        var iconAddItiItems = this.showIIconAddItems.concat(pos1).concat(pos2);
        var iconRemoveItiItems = this.showIIconRemoveItems.concat(pos1).concat(pos2);
        if (document.getElementById(showTextItems).style.display == 'none') {
            document.getElementById(showTextItems).style.display = 'block';
            //ICONS ITEMS
            document.getElementById(iconRemoveItiItems).style.display = 'block';
            document.getElementById(iconAddItiItems).style.display = 'none';
        }
        else {
            document.getElementById(showTextItems).style.display = 'none';
            //ICONS ITEMS
            document.getElementById(iconRemoveItiItems).style.display = 'none';
            document.getElementById(iconAddItiItems).style.display = 'block';
        }
    };
    MisDestinosPage.prototype.onClickShowItemsDay = function (pos1, pos2) {
        var showTextItems = this.showDItems.concat(pos1).concat(pos2);
        var iconAddItiItems = this.showDIconAddItems.concat(pos1).concat(pos2);
        var iconRemoveItiItems = this.showDIconRemoveItems.concat(pos1).concat(pos2);
        if (document.getElementById(showTextItems).style.display == 'none') {
            document.getElementById(showTextItems).style.display = 'block';
            //ICONS
            document.getElementById(iconRemoveItiItems).style.display = 'block';
            document.getElementById(iconAddItiItems).style.display = 'none';
        }
        else {
            document.getElementById(showTextItems).style.display = 'none';
            //ICONS
            document.getElementById(iconRemoveItiItems).style.display = 'none';
            document.getElementById(iconAddItiItems).style.display = 'block';
        }
    };
    MisDestinosPage.prototype.onClickShowMon = function () {
        this.show_mon = !this.show_mon;
    };
    MisDestinosPage.prototype.onClickShowIti = function (pos) {
        //this.show_iti = !this.show_iti;
        var showText = this.showIA.concat(pos);
        var iconRemoveD = this.showDIconRemoveItemsIA.concat(pos);
        var iconAddD = this.showDIconAddItemsIA.concat(pos);
        if (document.getElementById(showText).style.display == 'none') {
            document.getElementById(showText).style.display = 'block';
            //ICONS
            document.getElementById(iconRemoveD).style.display = 'block';
            document.getElementById(iconAddD).style.display = 'none';
        }
        else {
            document.getElementById(showText).style.display = 'none';
            //ICONS
            document.getElementById(iconRemoveD).style.display = 'none';
            document.getElementById(iconAddD).style.display = 'block';
        }
    };
    MisDestinosPage.prototype.presentAlert = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            //cssClass: 'my-custom-class',
                            header: 'Alert',
                            message: msg,
                            buttons: ['Aceptar']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //REPRODUCTOR
    MisDestinosPage.prototype.onClickPlayMp3 = function (item, itinerario, tipoAudio, urlimg) {
        var fn = item.id_audio;
        var idGuia = null;
        var idGuiaPartes = null;
        var idGuiaItinerario = null;
        this.modoAudio = 'pause';
        if (item != null) {
            this.storage.set('playAudio', fn);
            this.storage.set('tipoAudio', tipoAudio);
            this.storage.set('titleAudio', item.title);
            this.storage.set('modoAudio', this.modoAudio);
            idGuia = item.id_guia;
            idGuiaPartes = null;
            idGuiaItinerario = itinerario;
            if (this.mydestines != null) {
                this.listAudioExist(this.mydestines, null, urlimg);
            }
            console.log('1' + this.audioExist);
            this.storageMonument(idGuia, idGuiaPartes, idGuiaItinerario, this.audioExist);
            this.router.navigate(['/tabs/mis-destinos/' + idGuia + '/' + idGuiaItinerario]);
        }
    };
    MisDestinosPage.prototype.onClickPlayMp3Partes = function (idguia, partes, item, tipoAudio, urlimg) {
        var fn = item.id_audio;
        var idGuia = null;
        var idGuiaPartes = null;
        var idGuiaItinerario = null;
        this.modoAudio = 'pause';
        if (partes != null) {
            this.storage.set('playAudio', fn);
            this.storage.set('tipoAudio', tipoAudio);
            this.storage.set('titleAudio', item.title);
            this.storage.set('modoAudio', this.modoAudio);
            idGuia = idguia;
            idGuiaPartes = partes.idguiapartes;
            idGuiaItinerario = partes.id_itinerario;
            if (this.mydestines != null) {
                this.listAudioExist(this.mydestines, null, urlimg);
            }
            console.log(this.audioExist);
            this.storageMonument(idGuia, idGuiaPartes, idGuiaItinerario, this.audioExist);
            if (tipoAudio == 3) {
                this.router.navigate(['/tabs/mis-destinos/' + idGuiaItinerario + '/' + idGuiaPartes]);
            }
            else {
                this.router.navigate(['/tabs/mis-destinos/' + idGuiaPartes + '/' + idGuiaItinerario]);
            }
        }
    };
    MisDestinosPage.prototype.storageMonument = function (idGuia, idGuiaPartes, idGuiaItinerario, audioExist) {
        var _this = this;
        var guia = null;
        if (idGuiaPartes == null) {
            guia = idGuia;
        }
        else {
            guia = idGuiaPartes;
        }
        this.serviceRegister.getMonSee()
            .then(function (res) {
            if (res != null) {
                _this.list_view_audio_init = res;
                _this.addElementToListSee(audioExist, guia, idGuiaItinerario);
            }
            else {
                _this.addElementToListSee(audioExist, guia, idGuiaItinerario);
            }
        });
    };
    MisDestinosPage.prototype.addElementToListSee = function (audioExist, guia, idGuiaItinerario) {
        var _this = this;
        var view_audio_init = null;
        audioExist.forEach(function (audio) {
            var existe = false;
            if (audio.idguia == guia && audio.iditinerario == idGuiaItinerario) {
                _this.list_view_audio_init.forEach(function (element) {
                    if (guia == element.idguia && idGuiaItinerario == element.iditinerario) {
                        existe = true;
                    }
                });
                if (!existe) {
                    view_audio_init = new _interfaces_IListAudioExist__WEBPACK_IMPORTED_MODULE_12__["IListAudioExist"]();
                    view_audio_init.title = audio.title;
                    view_audio_init.idguia = audio.idguia;
                    view_audio_init.iditinerario = audio.iditinerario;
                    view_audio_init.url = audio.url;
                    view_audio_init.tipo = audio.tipo;
                    view_audio_init.imgthumb = audio.imgthumb;
                }
            }
            if (view_audio_init != null) {
                _this.list_view_audio_init.push(view_audio_init);
                view_audio_init = null;
                _this.storage.set('monumentSee', _this.list_view_audio_init);
            }
        });
    };
    MisDestinosPage.prototype.onClickAnterior = function (destino, idguia, iditinerario, tipo, url) {
        var encontradopos = null;
        var audioIdGuia = null;
        var audioIdIti = null;
        var cont = 0;
        this.onSeekState = this.state.playing;
        if (this.onSeekState) {
            this.audioProvider.pause();
            this.showPause = false;
        }
        //LISTA DE AUDIO EXISTENTES
        this.listAudioExist(destino, tipo, url);
        //AUDIO A REPRODUCIR
        if (this.audioExist.length > 0) {
            this.audioExist.forEach(function (audio) {
                if (idguia == audio.idguia && iditinerario == audio.iditinerario) {
                    encontradopos = cont;
                }
                cont++;
            });
        }
        if (encontradopos != null) {
            if (encontradopos == 0) {
                audioIdGuia = this.audioExist[this.audioExist.length - 1].idguia;
                audioIdIti = this.audioExist[this.audioExist.length - 1].iditinerario;
                this.storage.set('playAudio', this.audioExist[this.audioExist.length - 1].url);
                this.storage.set('titleAudio', this.audioExist[this.audioExist.length - 1].title);
                this.storage.set('tipoAudio', this.audioExist[this.audioExist.length - 1].tipo);
            }
            else {
                audioIdGuia = this.audioExist[encontradopos - 1].idguia;
                audioIdIti = this.audioExist[encontradopos - 1].iditinerario;
                this.storage.set('playAudio', this.audioExist[encontradopos - 1].url);
                this.storage.set('titleAudio', this.audioExist[encontradopos - 1].title);
                this.storage.set('tipoAudio', this.audioExist[encontradopos - 1].tipo);
            }
            this.router.navigate(['/tabs/mis-destinos/'.concat(audioIdGuia.toString()).concat('/').concat(audioIdIti.toString())]);
        }
    };
    MisDestinosPage.prototype.onClickRetroceso = function () {
        this.onSeekState = this.state.playing;
        if (this.onSeekState && this.seekbarCount >= 10) {
            this.audioProvider.seekTo(this.seekbarCount - 10);
        }
    };
    MisDestinosPage.prototype.resetState = function () {
        this.audioProvider.stop();
        this.store.dispatch({ type: _providers_store_store__WEBPACK_IMPORTED_MODULE_9__["RESET"] });
    };
    MisDestinosPage.prototype.playStream = function (url) {
        var _this = this;
        this.resetState();
        this.audioProvider.playStream(url).subscribe(function (event) {
            var audioObj = event.target;
            switch (event.type) {
                case 'canplay':
                    return _this.store.dispatch({ type: _providers_store_store__WEBPACK_IMPORTED_MODULE_9__["CANPLAY"], payload: { value: true } });
                case 'loadedmetadata':
                    return _this.store.dispatch({
                        type: _providers_store_store__WEBPACK_IMPORTED_MODULE_9__["LOADEDMETADATA"],
                        payload: {
                            value: true,
                            data: {
                                time: _this.audioProvider.formatTime(audioObj.duration * 1000, 'HH:mm:ss'),
                                timeSec: audioObj.duration,
                                mediaType: 'mp3'
                            }
                        }
                    });
                case 'playing':
                    return _this.store.dispatch({ type: _providers_store_store__WEBPACK_IMPORTED_MODULE_9__["PLAYING"], payload: { value: true } });
                case 'pause':
                    return _this.store.dispatch({ type: _providers_store_store__WEBPACK_IMPORTED_MODULE_9__["PLAYING"], payload: { value: false } });
                case 'timeupdate':
                    return _this.store.dispatch({
                        type: _providers_store_store__WEBPACK_IMPORTED_MODULE_9__["TIMEUPDATE"],
                        payload: {
                            timeSec: audioObj.currentTime,
                            time: _this.audioProvider.formatTime(audioObj.currentTime * 1000, 'HH:mm:ss')
                        }
                    });
                case 'loadstart':
                    return _this.store.dispatch({ type: _providers_store_store__WEBPACK_IMPORTED_MODULE_9__["LOADSTART"], payload: { value: true } });
            }
        });
    };
    MisDestinosPage.prototype.pause = function () {
        this.modoAudio = 'pause';
        this.storage.set('modoAudio', this.modoAudio);
        this.onSeekState = this.state.playing;
        if (this.onSeekState) {
            this.audioProvider.pause();
            console.log('Pause');
            this.showPause = false;
        }
    };
    MisDestinosPage.prototype.play = function () {
        this.modoAudio = 'reproduciendo';
        this.storage.set('modoAudio', this.modoAudio);
        this.audioProvider.play();
        this.showPause = true;
        console.log('Play');
    };
    MisDestinosPage.prototype.reset = function () {
        this.resetState();
        this.currentFile = {};
    };
    MisDestinosPage.prototype.onClickAvance = function () {
        this.onSeekState = this.state.playing;
        if (this.onSeekState && this.seekbarCount < this.state.durationSec - 10) {
            this.audioProvider.seekTo(this.seekbarCount + 10);
        }
    };
    MisDestinosPage.prototype.onClickSiguiente = function (destino, idguia, iditinerario, tipo, urlimg) {
        var encontradopos = null;
        var audioIdGuia = null;
        var audioIdIti = null;
        var cont = 0;
        this.onSeekState = this.state.playing;
        if (this.onSeekState) {
            this.audioProvider.pause();
            this.showPause = false;
        }
        //LISTA DE AUDIO EXISTENTES
        this.listAudioExist(destino, tipo, urlimg);
        if (this.audioExist.length > 0) {
            this.audioExist.forEach(function (audio) {
                if (idguia == audio.idguia && iditinerario == audio.iditinerario) {
                    encontradopos = cont;
                }
                cont++;
            });
        }
        if (encontradopos != null) {
            if (this.audioExist.length - 1 >= encontradopos + 1) {
                audioIdGuia = this.audioExist[encontradopos + 1].idguia;
                audioIdIti = this.audioExist[encontradopos + 1].iditinerario;
                this.storage.set('playAudio', this.audioExist[encontradopos + 1].url);
                this.storage.set('titleAudio', this.audioExist[encontradopos + 1].title);
                this.storage.set('tipoAudio', this.audioExist[encontradopos + 1].tipo);
            }
            else {
                audioIdGuia = this.audioExist[0].idguia;
                audioIdIti = this.audioExist[0].iditinerario;
                this.storage.set('playAudio', this.audioExist[0].url);
                this.storage.set('titleAudio', this.audioExist[0].title);
                this.storage.set('tipoAudio', this.audioExist[0].tipo);
            }
            this.router.navigate(['/tabs/mis-destinos/'.concat(audioIdGuia.toString()).concat('/').concat(audioIdIti.toString())]);
        }
    };
    MisDestinosPage.prototype.getObservableAudio = function (url) {
        var _this = this;
        this.serviceRegister.present('Preparando audio..');
        this.audioProvider.getAudio(url).subscribe(function (res) {
            if (res != null) {
                _this.playStream(res);
                _this.serviceRegister.dismiss();
            }
        });
    };
    MisDestinosPage.prototype.buscarImgInListAudio = function (audioExist, url) {
        if (audioExist != null && audioExist.length > 0) {
            audioExist.forEach(function (audio) {
                if (audio.imgthumb === url) {
                    return true;
                }
            });
        }
        return false;
    };
    MisDestinosPage.prototype.listAudioExist = function (destino, tipo, urlimg) {
        var _this = this;
        this.audioExist = [];
        if (this.thisIsArray(destino.monumento) && destino.monumento.length > 0) {
            destino.monumento.forEach(function (monument) {
                if (_this.thisIsArray(monument.audio) && monument.audio.length > 0) {
                    monument.audio.forEach(function (element) {
                        /*
                        if(!this.buscarImgInListAudio(this.audioExist, urlimg)){
                          this.audioExist.push({"title": element.title, "idguia": element.id_guia, "iditinerario": 0, "url": element.id_audio, "tipo": 3, "imgthumb": urlimg});
                        }else{
                          this.audioExist.push({"title": element.title, "idguia": element.id_guia, "iditinerario": 0, "url": element.id_audio, "tipo": 3, "imgthumb": null});
                        }
                        */
                        _this.audioExist.push({ "title": element.title, "idguia": element.id_guia, "iditinerario": 0, "url": element.id_audio, "tipo": 3, "imgthumb": urlimg });
                    });
                }
                if (_this.thisIsArray(monument.partes) && monument.partes.length > 0) {
                    monument.partes.forEach(function (parte) {
                        if (_this.thisIsArray(parte.audio) && parte.audio.length > 0) {
                            parte.audio.forEach(function (audio) {
                                //this.audioExist.push({"title": audio.title, "idguia": parte.id_itinerario, "iditinerario": audio.id_guia, "url": audio.id_audio, "tipo": 3, "imgthumb": urlimg});
                                _this.audioExist.push({ "title": audio.title, "idguia": parte.id_itinerario, "iditinerario": parte.idguiapartes, "url": audio.id_audio, "tipo": 3, "imgthumb": urlimg });
                            });
                        }
                    });
                }
            });
        }
        if (this.thisIsArray(destino.monumento_comp) && destino.monumento_comp.length > 0) {
            destino.monumento_comp.forEach(function (monument) {
                if (_this.thisIsArray(monument.audio) && monument.audio.length > 0) {
                    if (monument.idguia === undefined) {
                        monument.audio.forEach(function (element) {
                            _this.audioExist.push({ "title": element.title, "idguia": monument.idguiapartes, "iditinerario": element.id_guia, "url": element.id_audio, "tipo": 4, "imgthumb": urlimg });
                        });
                    }
                    else {
                        monument.audio.forEach(function (element) {
                            _this.audioExist.push({ "title": element.title, "idguia": element.id_guia, "iditinerario": 0, "url": element.id_audio, "tipo": 4, "imgthumb": urlimg });
                        });
                    }
                }
                if (_this.thisIsArray(monument.partes) && monument.partes.length > 0) {
                    monument.partes.forEach(function (parte) {
                        if (_this.thisIsArray(parte.audio) && parte.audio.length > 0) {
                            parte.audio.forEach(function (audio) {
                                _this.audioExist.push({ "title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 4, "imgthumb": urlimg });
                            });
                        }
                        if (_this.thisIsArray(parte.partes) && parte.partes.length > 0) {
                            parte.partes.forEach(function (parte) {
                                if (_this.thisIsArray(parte.audio) && parte.audio.length > 0) {
                                    parte.audio.forEach(function (audio) {
                                        _this.audioExist.push({ "title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio, "tipo": 4, "imgthumb": urlimg });
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
        if (this.thisIsArray(destino.dia) && destino.dia.length > 0) {
            destino.dia.forEach(function (monumento) {
                if (_this.thisIsArray(monumento.audio) && monumento.audio.length > 0) {
                    monumento.audio.forEach(function (audio) {
                        _this.audioExist.push({ "title": audio.title, "idguia": audio.id_guia, "iditinerario": 0, "url": audio.id_audio, "tipo": 2, "imgthumb": urlimg });
                    });
                }
                if (_this.thisIsArray(monumento.partes) && monumento.partes.length > 0) {
                    monumento.partes.forEach(function (parte) {
                        if (_this.thisIsArray(parte.audio) && parte.audio.length > 0) {
                            parte.audio.forEach(function (audio) {
                                _this.audioExist.push({ "title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio, "tipo": 2, "imgthumb": urlimg });
                            });
                        }
                        if (_this.thisIsArray(parte.partes) && parte.partes.length > 0) {
                            parte.partes.forEach(function (parte) {
                                if (_this.thisIsArray(parte.audio) && parte.audio.length > 0) {
                                    parte.audio.forEach(function (audio) {
                                        _this.audioExist.push({ "title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 2, "imgthumb": urlimg });
                                    });
                                }
                                if (_this.thisIsArray(parte.partes) && parte.partes.length > 0) {
                                    parte.partes.forEach(function (parte) {
                                        if (_this.thisIsArray(parte.audio) && parte.audio.length > 0) {
                                            parte.audio.forEach(function (audio) {
                                                _this.audioExist.push({ "title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio, "tipo": 2, "imgthumb": urlimg });
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
        if (this.thisIsArray(destino.itinerario) && destino.itinerario.length > 0) {
            destino.itinerario.forEach(function (monumento) {
                if (_this.thisIsArray(monumento.audio) && monumento.audio.length > 0) {
                    monumento.audio.forEach(function (audio) {
                        _this.audioExist.push({ "title": audio.title, "idguia": audio.id_guia, "iditinerario": 0, "url": audio.id_audio, "tipo": 1, "imgthumb": urlimg });
                    });
                }
                if (_this.thisIsArray(monumento.partes) && monumento.partes.length > 0) {
                    monumento.partes.forEach(function (parte) {
                        if (_this.thisIsArray(parte.audio) && parte.audio.length > 0) {
                            parte.audio.forEach(function (audio) {
                                _this.audioExist.push({ "title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 1, "imgthumb": urlimg });
                            });
                        }
                        if (_this.thisIsArray(parte.partes) && parte.partes.length > 0) {
                            parte.partes.forEach(function (parte) {
                                if (_this.thisIsArray(parte.audio) && parte.audio.length > 0) {
                                    parte.audio.forEach(function (audio) {
                                        _this.audioExist.push({ "title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 1, "imgthumb": urlimg });
                                    });
                                }
                                if (_this.thisIsArray(parte.partes) && parte.partes.length > 0) {
                                    parte.partes.forEach(function (parte) {
                                        if (_this.thisIsArray(parte.audio) && parte.audio.length > 0) {
                                            parte.audio.forEach(function (audio) {
                                                _this.audioExist.push({ "title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 1, "imgthumb": urlimg });
                                            });
                                        }
                                        if (_this.thisIsArray(parte.partes) && parte.partes.length > 0) {
                                            parte.partes.forEach(function (parte) {
                                                if (_this.thisIsArray(parte.audio) && parte.audio.length > 0) {
                                                    parte.audio.forEach(function (audio) {
                                                        _this.audioExist.push({ "title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 1, "imgthumb": urlimg });
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    MisDestinosPage.prototype.clickedStar = function () {
        var showBackMisDestinos = true;
        if (this.responseIdguia != null && this.responseIdItinerario != null) {
            var navigationExtras = {
                queryParams: {
                    special: JSON.stringify(showBackMisDestinos)
                }
            };
            this.router.navigate(['/tabs/mis-destinos'], navigationExtras);
        }
        else {
            if (!this.showSearchCity) {
                showBackMisDestinos = false;
                var navigationExtrasSearch = {
                    queryParams: {
                        special: JSON.stringify(showBackMisDestinos)
                    }
                };
                if (this.router['routerState'].snapshot.url.includes('special=false')) {
                    this.navCtrl.navigateForward("/tabs/mis-destinos");
                    this.clickAudio = false;
                    this.showSearchCity = true;
                }
                else {
                    this.router.navigate(['/tabs/mis-destinos'], navigationExtrasSearch);
                }
            }
            else {
                this.router.navigate(['/tabs/inicio']);
            }
        }
        if (this.state != null) {
            this.onSeekState = this.state.playing;
            if (this.onSeekState) {
                this.audioProvider.pause();
            }
        }
    };
    MisDestinosPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mis-destinos',
            template: __webpack_require__(/*! ./mis-destinos.page.html */ "./src/app/pages/mis-destinos/mis-destinos.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('showHide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out'))
                ])
            ],
            styles: [__webpack_require__(/*! ./mis-destinos.page.scss */ "./src/app/pages/mis-destinos/mis-destinos.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _service_menu_data_service__WEBPACK_IMPORTED_MODULE_5__["MenuDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_service_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _providers_audio_audio__WEBPACK_IMPORTED_MODULE_8__["AudioProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])
    ], MisDestinosPage);
    return MisDestinosPage;
}());



/***/ })

}]);
//# sourceMappingURL=mis-destinos-mis-destinos-module.js.map