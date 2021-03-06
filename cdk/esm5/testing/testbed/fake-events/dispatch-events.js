/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { createFakeEvent, createKeyboardEvent, createMouseEvent, createPointerEvent, createTouchEvent, } from './event-objects';
/**
 * Utility to dispatch any event on a Node.
 * @docs-private
 */
export function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/**
 * Shorthand to dispatch a fake event on a specified node.
 * @docs-private
 */
export function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, createFakeEvent(type, canBubble));
}
/**
 * Shorthand to dispatch a keyboard event with a specified key code.
 * @docs-private
 */
export function dispatchKeyboardEvent(node, type, keyCode, key, target, modifiers) {
    return dispatchEvent(node, createKeyboardEvent(type, keyCode, key, target, modifiers));
}
/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 * @docs-private
 */
export function dispatchMouseEvent(node, type, clientX, clientY) {
    if (clientX === void 0) { clientX = 0; }
    if (clientY === void 0) { clientY = 0; }
    return dispatchEvent(node, createMouseEvent(type, clientX, clientY));
}
/**
 * Shorthand to dispatch a pointer event on the specified coordinates.
 * @docs-private
 */
export function dispatchPointerEvent(node, type, clientX, clientY, options) {
    if (clientX === void 0) { clientX = 0; }
    if (clientY === void 0) { clientY = 0; }
    return dispatchEvent(node, createPointerEvent(type, clientX, clientY, options));
}
/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 * @docs-private
 */
export function dispatchTouchEvent(node, type, x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return dispatchEvent(node, createTouchEvent(type, x, y));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2gtZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90ZXN0aW5nL3Rlc3RiZWQvZmFrZS1ldmVudHMvZGlzcGF0Y2gtZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFDTCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFFekI7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBa0IsSUFBbUIsRUFBRSxLQUFRO0lBQzFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQW1CLEVBQUUsSUFBWSxFQUFFLFNBQW1CO0lBQ3RGLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLE9BQWdCLEVBQUUsR0FBWSxFQUN4RCxNQUFnQixFQUFFLFNBQXdCO0lBQzlFLE9BQU8sYUFBYSxDQUFDLElBQUksRUFDckIsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLE9BQVcsRUFBRSxPQUFXO0lBQXhCLHdCQUFBLEVBQUEsV0FBVztJQUFFLHdCQUFBLEVBQUEsV0FBVztJQUNuRixPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsSUFBVSxFQUFFLElBQVksRUFBRSxPQUFXLEVBQUUsT0FBVyxFQUNsRCxPQUEwQjtJQURBLHdCQUFBLEVBQUEsV0FBVztJQUFFLHdCQUFBLEVBQUEsV0FBVztJQUVyRixPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQWlCLENBQUM7QUFDbEcsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLENBQUssRUFBRSxDQUFLO0lBQVosa0JBQUEsRUFBQSxLQUFLO0lBQUUsa0JBQUEsRUFBQSxLQUFLO0lBQ3ZFLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge01vZGlmaWVyS2V5c30gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuaW1wb3J0IHtcbiAgY3JlYXRlRmFrZUV2ZW50LFxuICBjcmVhdGVLZXlib2FyZEV2ZW50LFxuICBjcmVhdGVNb3VzZUV2ZW50LFxuICBjcmVhdGVQb2ludGVyRXZlbnQsXG4gIGNyZWF0ZVRvdWNoRXZlbnQsXG59IGZyb20gJy4vZXZlbnQtb2JqZWN0cyc7XG5cbi8qKlxuICogVXRpbGl0eSB0byBkaXNwYXRjaCBhbnkgZXZlbnQgb24gYSBOb2RlLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudDxUIGV4dGVuZHMgRXZlbnQ+KG5vZGU6IE5vZGUgfCBXaW5kb3csIGV2ZW50OiBUKTogVCB7XG4gIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIHJldHVybiBldmVudDtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdG8gZGlzcGF0Y2ggYSBmYWtlIGV2ZW50IG9uIGEgc3BlY2lmaWVkIG5vZGUuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEZha2VFdmVudChub2RlOiBOb2RlIHwgV2luZG93LCB0eXBlOiBzdHJpbmcsIGNhbkJ1YmJsZT86IGJvb2xlYW4pOiBFdmVudCB7XG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGNyZWF0ZUZha2VFdmVudCh0eXBlLCBjYW5CdWJibGUpKTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdG8gZGlzcGF0Y2ggYSBrZXlib2FyZCBldmVudCB3aXRoIGEgc3BlY2lmaWVkIGtleSBjb2RlLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hLZXlib2FyZEV2ZW50KG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywga2V5Q29kZT86IG51bWJlciwga2V5Pzogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ/OiBFbGVtZW50LCBtb2RpZmllcnM/OiBNb2RpZmllcktleXMpOiBLZXlib2FyZEV2ZW50IHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSxcbiAgICAgIGNyZWF0ZUtleWJvYXJkRXZlbnQodHlwZSwga2V5Q29kZSwga2V5LCB0YXJnZXQsIG1vZGlmaWVycykpO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIG1vdXNlIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgY29vcmRpbmF0ZXMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaE1vdXNlRXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBjbGllbnRYID0gMCwgY2xpZW50WSA9IDApOiBNb3VzZUV2ZW50IHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgY3JlYXRlTW91c2VFdmVudCh0eXBlLCBjbGllbnRYLCBjbGllbnRZKSk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEgcG9pbnRlciBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hQb2ludGVyRXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBjbGllbnRYID0gMCwgY2xpZW50WSA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz86IFBvaW50ZXJFdmVudEluaXQpOiBQb2ludGVyRXZlbnQge1xuICByZXR1cm4gZGlzcGF0Y2hFdmVudChub2RlLCBjcmVhdGVQb2ludGVyRXZlbnQodHlwZSwgY2xpZW50WCwgY2xpZW50WSwgb3B0aW9ucykpIGFzIFBvaW50ZXJFdmVudDtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdG8gZGlzcGF0Y2ggYSB0b3VjaCBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hUb3VjaEV2ZW50KG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgeCA9IDAsIHkgPSAwKSB7XG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGNyZWF0ZVRvdWNoRXZlbnQodHlwZSwgeCwgeSkpO1xufVxuIl19